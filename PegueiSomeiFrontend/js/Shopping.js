//Declarando lista de compras
var shoppingList = [[0,"inicial","0.00",0]];


//Adiciona produto na lista
function addProductToShoppingList(id, name, price){    
    var productExists;
    var productIndex;
    var contador = 0;

    //Percorrer lista de compras, verificar se produto já existe e pegar indice
    for (const number of shoppingList) {
        if (number[0] == id) {
            productExists = true;
            productIndex = contador;
            break;
        }else{
            productExists = false;
            productIndex = shoppingList.length;
        }
        contador++;
    }
    
    //reinicia contador
    contador = 0;

    //Se produto já existe, somar quantidade
    if (productExists == true){
        shoppingList[productIndex][3] += 1;
        updateProductInShoppingList(productIndex);
    }

    //Se produto não existe, adicionar
    else if(productExists == false){
        shoppingList.push([id,name,price,1]);
        //Colocar na Div
        showNewProductInShoppingList(productIndex);
    }
    
    sumTotalValue();
}

//Adiciona mais 1 quantidade no produto
function addOneProductToShoppingList(event){
    var target = event.target.parentNode.parentNode;
    var index = findIndexInShoppingList(target.id);

    shoppingList[index][3] += 1;

    updateProductInShoppingList(index);     
    sumTotalValue();
}


//Remove produto da tabela
function removeProductOfShoppingList(event){
    var target = event.target.parentNode.parentNode;
    var index = findIndexInShoppingList(target.id);

    //Remove linha do produto
    shoppingList.splice(index,1);
    
    //Remove linha que foi clicada
    target.remove();

    sumTotalValue();
}


//remove 1 produto da linha
function removeOneProductOfShoppingList(event){
    var target = event.target.parentNode.parentNode;
    var index = findIndexInShoppingList(target.id);
    var price = findPriceInShoppingList(index);
    var oldPrice = shoppingList[index][2];

    //Remove valor do produto
    price = oldPrice - price;
    shoppingList[index][2] -= price;
    
    //Remove qtd do produto
    shoppingList[index][3] -= 1;
    
    if (shoppingList[index][3] == 0){
        target.remove();
        shoppingList.splice(index,1);
    }else{
        updateProductInShoppingList(index);
    }
        
    console.log(shoppingList);

    //Calcula total da soma        
    sumTotalValue();
}


//Atualiza Quantidade e Preço da Lista de Produtos
function updateProductInShoppingList(productIndex){    
    priceProduct = document.getElementById("priceProduct"+shoppingList[productIndex][0]);
    priceProduct.innerText = shoppingList[productIndex][2];
    
    qtdProduct = document.getElementById("qtdProduct"+shoppingList[productIndex][0]);
    qtdProduct.innerText = shoppingList[productIndex][3];
}


//Busca Indice da linha do produto na lista de compras
function findIndexInShoppingList(id){
    var index;
    var contador = 0;

    for (const number of shoppingList) {
        if (number[0] == id) {
            index = contador;
            break;
        }
        contador++;
    }

    return index;
}

//Busca valor do produto na lista de compras a partir do indice
function findPriceInShoppingList(id){
    let price = 0;

    for (const number of shoppingList) {
        if (number[0] == id) {
            price = number[2];
            break;
        }
    }

    return price;
}

//Função que calcula valor
function sumTotalValue(){
    var boxTotalValue = document.getElementById("total-value");
    var totalValue = 0;   

    for (const number of shoppingList) {  
        totalValue += parseFloat(number[2]) * parseFloat(number[3]);        
    }
    
    if(totalValue>0){
        boxTotalValue.innerText = totalValue.toFixed(2);
    }else{
        boxTotalValue.innerText = "0.00";
    }
}




function showNewProductInShoppingList(productIndex){
    // Cria as colunas do produto
    var idProduct = document.createElement("td");
    var nameProduct = document.createElement("td");
    var priceProduct = document.createElement("td");
    var qtdProduct = document.createElement("td");
    var moreProduct = document.createElement("td");            
        var iconMoreProduct = document.createElement("div");
    var lessProduct = document.createElement("td");    
        var iconLessProduct = document.createElement("div");
    var removeProduct = document.createElement("td");
        var iconRemoveProduct = document.createElement("div");

    //Adiciona informações do produto a cada coluna
    idProduct.innerText = shoppingList[productIndex][0];
        idProduct.setAttribute("id", "idProduct"+shoppingList[productIndex][0]);
    nameProduct.innerText = shoppingList[productIndex][1];    
    priceProduct.innerText = shoppingList[productIndex][2];
        priceProduct.setAttribute("id", "priceProduct"+shoppingList[productIndex][0]);
    qtdProduct.innerText = shoppingList[productIndex][3];
        qtdProduct.setAttribute("id", "qtdProduct"+shoppingList[productIndex][0]);
    moreProduct.appendChild(iconMoreProduct);
        iconMoreProduct.setAttribute("class", "bi bi-plus-lg text-warning");
        iconMoreProduct.setAttribute("onclick","addOneProductToShoppingList(event)");
    lessProduct.appendChild(iconLessProduct);
        iconLessProduct.setAttribute("class", "bi bi-dash-lg text-warning");
        iconLessProduct.setAttribute("onclick","removeOneProductOfShoppingList(event)");
    removeProduct.appendChild(iconRemoveProduct);
        iconRemoveProduct.setAttribute("class", "bi bi-x-lg text-warning");
        iconRemoveProduct.setAttribute("onclick","removeProductOfShoppingList(event)");

    //Cria a linha do produto e adiciona as classes
    var rowProduct = document.createElement("tr");
    rowProduct.setAttribute("name", "product-"+shoppingList[productIndex][0]);
    rowProduct.setAttribute("id", ""+shoppingList[productIndex][0])
    rowProduct.setAttribute("class","p-2");

    //Adiciona colunas a linha
    rowProduct.appendChild(idProduct);
    rowProduct.appendChild(nameProduct);
    rowProduct.appendChild(priceProduct);
    rowProduct.appendChild(qtdProduct);
    rowProduct.appendChild(moreProduct);
    rowProduct.appendChild(lessProduct);
    rowProduct.appendChild(removeProduct);

    //Adiciona a linha na div
    var productList = document.getElementById("product-tbody");
    productList.appendChild(rowProduct);
}