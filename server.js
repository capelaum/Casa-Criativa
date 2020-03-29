const express = require('express')      // express para criar e configurar o meu servidor
const server = express();
// console.log(server)

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
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729069.svg",
        title: "Yoga",
        category: "Saúde",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729021.svg",
        title: "Video Games",
        category: "Lazer",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        url: "https://store.steampowered.com/?l=portuguese"
    },
]

// configurar arquivos estáticos
server.use(express.static("public"))

// config do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,   
})

// cria rota e captura pedido do cliente para responder
server.get("/", function(req, res) {
    
    // tira a referencia - pega uma cópia
    const reversedIdeias = [...ideias].reverse()

    // New colection
    let listIdeias = []    

    for(let ideia of reversedIdeias) {
        if (listIdeias.length < 2) {
            listIdeias.push(ideia)
        }
    }

    return res.render('index.html', { ideias: listIdeias })
})

server.get("/ideias", function(req, res) {

    const reversedIdeias = [...ideias].reverse()
    
    return res.render('ideias.html', { ideias: reversedIdeias })
})

// servidor ligado na porta 3000
server.listen(3000)