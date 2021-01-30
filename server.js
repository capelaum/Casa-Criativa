const express = require('express')      // express para criar e configurar meu servidor
const server = express();
// console.log(server)

var publicDir = require('path').join(__dirname,'/public');
server.use(express.static(publicDir));
const db = require("./db")

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

server.get("/delete", function(req, res) {
    const id = req.query.id;

    db.run(`DELETE FROM ideias WHERE id = ?`, id, function(error) {
        if(error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }
        console.log("DELETE IDEIA:\n", req.query.id)
    })

    return res.redirect("/ideias")
})

let port = process.env.PORT || 3000;


// servidor ligado na porta 3000
server.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port)
});