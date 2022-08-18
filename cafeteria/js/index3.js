import itens from "./123/dataset.js";
import food from "./123/food.js";


function loadFoods(){
if (localStorage.getItem("food-app:loaded") !== "ok") { 
  food.load(itens);
  localStorage.setItem("food-app:loaded", "ok"); 
};
for (const f of food.readAll()){
  createFoodCard(f);
};
}


function createFoodCard(food) {
  let foodCard = `<div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="${food.imagem}" class="card-img-top" alt="${food.nome}">
            <div class="card-body">
                <h5 class="card-title">${food.nome}</h5>
                <p class="card-text">
                    ${food.descricao}
                </p>
                <h5 class="card-title">Valor: ${food.preco}</h5>
            </div>
            
        </div>
    </div>`;
  const cardDeck = document.querySelector("#card-deck");
  cardDeck.insertAdjacentHTML("beforeend", foodCard);
  return foodCard;
}



// Adicionar onclick no button: addFoodButton
let addFoodButton = document.getElementById("addFoodButton");
addFoodButton.onclick = (event) => {
  // Recuperar o elemento do formulário pelo id.
  let foodForm = document.getElementById("foodForm");

  // Adicionar onsubmit no form: foodForm
  foodForm.onsubmit = (e) => {
    e.preventDefault();
    //TODO: Manipular o formulário
    let newFood = Object.fromEntries(new FormData(foodForm));
    food.create(newFood);

    const foodCard = createFoodCard(newFood);
    let itensCardapio = document.getElementById("itens-cardapio");
    itensCardapio.insertAdjacentHTML('beforeend', foodCard);
  };
};


//addFoodsCard();
loadFoods()
