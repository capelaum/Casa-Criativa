const express = require('express')      // express para criar e configurar meu servidor
const server = express();
// console.log(server)

const db = require("./db")

// Array de ideias
const ideias = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        url: "https://dragonpharmabrasil.com/"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mindset",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        url: "https://www.headspace.com/pt"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729069.svg",
        title: "Yoga",
        category: "Saúde",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        url: "https://www.headspace.com/pt"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        url: "https://www.headspace.com/pt"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729021.svg",
        title: "Video Games",
        category: "Lazer",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        url: "https://store.steampowered.com/?l=portuguese"
    },
]

// configurar arquivos estáticos pelo express
server.use(express.static("public"))

// habilitar uso do request body
server.use(express.urlencoded({ extended: true }))

// config do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,   
})

// cria rota e captura pedido do cliente para responder - renderiza a pagina principal
server.get("/", function(req, res) {
    db.all(`SELECT * FROM ideias`, function(error, rows) {
        if(error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }
        // tira a referencia - pega uma cópia
        const reversedIdeias = [...rows].reverse()
    
        // New colection
        let listIdeias = []    
        for(let ideia of reversedIdeias) {
            if (listIdeias.length < 2) {
                listIdeias.push(ideia)
            }
        }
        return res.render('index.html', { ideias: listIdeias })
    })
})

// renderiza a pagina de ideias
server.get("/ideias", function(req, res) {
    db.all(`SELECT * FROM ideias`, function(error, rows) {
        if(error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }

        const reversedIdeias = [...rows].reverse()
        return res.render('ideias.html', { ideias: reversedIdeias })
    })

})

// insere no db os dados do formulario
server.post("/", function(req, res) {
    const query = 
        ` 
        INSERT INTO ideias (
            image,
            title,
            category,
            description,
            link
            ) VALUES (?, ?, ?, ?, ?);
            `
            
    const values = 
    [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]

    db.run(query, values, function(error) {
        if(error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }
        
        return res.redirect("/ideias")
    
    })

    //console.log(req.body)
})

server.delete("/", function(req, res) {
    const title = req.body.title;

    db.run(`DELETE FROM ideias WHERE id = ?`, [id], function(error, rows) {
        if(error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }
        console.log("DELETEI IDEIA:\n", this)
    })
    return res.redirect("/ideias")
})

// servidor ligado na porta 3000
server.listen(3000)