// acessar propriedades do documento HTML atraves de JS

function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

        document
            .querySelector("body")
            .classList
            .toggle("hideScroll")

        document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

// Validação de formulario
function checkFields(event) {

    const valuesCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    const isEmpty = valuesCheck.find(function(value) {

        const checkString = typeof event.target[value].value === "string"
        const checkEmpty = !event.target[value].value.trim()

        if (checkString && checkEmpty) {
            return true
        }
    })

    if(isEmpty) {
        event.preventDefault()
        alert("Obrigatório preencher todos os campos!")
    }
}