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
        url: "https://rpcketseat.com.br"
    },
]

// configurar arquivos estáticos
server.use(express.static("public"))

// config do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server, 
    noCache: true,  
})

// cria rota e captura pedido do cliente para responder
server.get("/", function(req, res) {

    
    return res.render('index.html', { ideias })
})

server.get("/ideias", function(req, res) {
    return res.render('ideias.html')
})

// servidor ligado na porta 3000
server.listen(3000)