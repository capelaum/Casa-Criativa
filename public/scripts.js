// acessar propriedades do documento HTML atraves de JS

const modal = document.querySelector("#modal");

function onOff() {
  modal.classList.toggle("hide");
  document.querySelector("body").classList.toggle("hideScroll");
  modal.classList.toggle("addScroll");
}

// Validação de formulario de Nova Ideias
function checkFields(event) {
  const valuesCheck = ["title", "category", "image", "description", "link"];

  // checa se existe um campo vazio - string vazia
  const isEmpty = valuesCheck.find(function (value) {
    const checkString = typeof event.target[value].value === "string";
    const checkEmpty = !event.target[value].value.trim();

    if (checkString && checkEmpty) {
      return true;
    }
  });

  if (isEmpty) {
    event.preventDefault();
    alert("Obrigatório preencher todos os campos!");
  }
}

// Array de ideias
/* const ideias = [
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
] */