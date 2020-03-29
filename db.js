const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./project.db')

db.serialize(function() {

    
    // CRIAR A TABELA
    db.run(`
    CREATE TABLE IF NOT EXISTS ideias(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
        );
        `)
        
    // INSERIR
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
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Programação",
        "Estudo",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        "https://rocketseat.com.br"
    ]

        // db.run(query, values, function(error) {
            //     if(error) return console.log(error)
        
    //     console.log("INSERI IDEIA:\n",this)
    //      })

    // CONSULTAR 
    // db.all(`SELECT * FROM ideias`, function(error, rows) {
    //     if(error) return console.log(error)

    //     console.log("TABELA:\n",rows)
    // })

    // DELETAR 
    // db.run(`DELETE FROM ideias WHERE id = ?`, [id], function(error, rows) {
    //     if(error) return console.log(error)

    //     console.log("DELETEI IDEIA:\n", this)
    // })

})

module.exports = db