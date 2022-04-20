let menu = [{
  id: 1,
  nome: "Buttermilk Pancakes",
  valor: 15.99,
  descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  imagem: "https://lilluna.com/wp-content/uploads/2017/12/buttermilk-pancakes-resize-10-500x500.jpg",
  categoria: "breakfast",
},
{
  id: 2,
  nome: "Diner Double",
  valor: 13.99,
  descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  imagem: "https://www.dennys.ca/wp-content/uploads/2019/10/images-1.jpg",
  categoria: "lunch",
},
{
  id: 3,
  nome: "Godzilla Milkshake",
  valor: 6.99,
  descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  imagem: "https://i2-prod.glasgowlive.co.uk/incoming/article16335490.ece/ALTERNATES/s1200b/0_DSC_5334-copy-1.jpg",
  categoria: "lunch",
},
{
  id: 4,
  nome: "Country Delight",
  valor: 20.99,
  descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  imagem: "https://www.falandodeviagem.com.br/imagens21/ComidasTurquia.jpg",
  categoria: "breakfast",
}];

const menuCentral = document.querySelector(".section-center");
const conteudoBotao = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  mostrarItensMenu(menu);
  mostrarBotoes();
});

function mostrarItensMenu(itensMenu) {
  let mostrarMenu = itensMenu.map(function (item) {
    return `<div class="box-itens">
    <div class="box-img">
        <img src="${item.imagem}" alt="${item.nome}">
    </div>
    <div class="box-more">
        <div class="box-title">
            <p>${item.nome}</p>
            <div class="box-price">R$${item.valor}</div>                
        </div>
        <div class="border-bottom"></div>
        <div class="box-description">${item.descricao}</div>
    </div>
</div>`;
  });
  mostrarMenu = mostrarMenu.join("");
  menuCentral.innerHTML = mostrarMenu;
}

function mostrarBotoes() {
  const categorias = menu.reduce(
    function (values, item) {
      if (!values.includes(item.categoria)) {
        values.push(item.categoria);
      }
      return values;
    },
    ["all"]
  );
  const categoriaBtns = categorias
    .map(function (categoria) {
      return `<button type="button" class="filter-btn" data-id=${categoria}>
            ${categoria}
          </button>`;
    })
    .join("");

  conteudoBotao.innerHTML = categoriaBtns;
  const filterBtns = conteudoBotao.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const categoria = e.currentTarget.dataset.id;
      const menucategoria = menu.filter(function (menuItem) {
        // console.log(menuItem.categoria);
        if (menuItem.categoria === categoria) {
          return menuItem;
        }
      });
      if (categoria === "all") {
        mostrarItensMenu(menu);
      } else {
        mostrarItensMenu(menucategoria);
      }
    });
  });
}
mostrarBotoes();