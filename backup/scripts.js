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
