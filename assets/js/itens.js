let itens = [{
    nome: "Buttermilk Pancakes",
    valor: 15.99,
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imagem: "https://lilluna.com/wp-content/uploads/2017/12/buttermilk-pancakes-resize-10-500x500.jpg",
},
{
    nome: "Diner Double",
    valor: 13.99,
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imagem: "https://lilluna.com/wp-content/uploads/2017/12/buttermilk-pancakes-resize-10-500x500.jpg"
},
{
    nome: "Godzilla Milkshake",
    valor: 6.99,
    descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imagem: "https://lilluna.com/wp-content/uploads/2017/12/buttermilk-pancakes-resize-10-500x500.jpg"
},
{
    nome: "Country Delight",
    valor: 20.99,
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imagem: "https://lilluna.com/wp-content/uploads/2017/12/buttermilk-pancakes-resize-10-500x500.jpg"

}]


const name = document.querySelector('.box-name');
const price = document.querySelector('.box-price');
const description = document.querySelector('box-description');

let currentItem = 0;

function iniciarRestaurante() {
    var containerItens = document.getElementById('pratos');
    itens.map((valor => {
        containerItens.innerHTML += `
        <div class="box-itens">
            <div class="box-img">
                <img src="`+valor.imagem+`" alt="`+valor.nome+`">
            </div>
            <div class="box-more">
                <div class="box-title">
                    <p>`+valor.nome+`</p>
                    <div class="box-price">R$`+valor.valor+`</div>                
                </div>
                <div class="border-bottom"></div>
                <div class="box-description">`+valor.descricao+`</div>
            </div>
    </div>`
    }))
}

iniciarRestaurante();