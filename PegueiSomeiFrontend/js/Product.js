//Busca produto na API
function getProduct(){
    var data = getApi();
    var product = JSON.parse(data);
    //console.log(product);
    return product;    
}


//Quando usuario adiciona novo produto
function newProduct(id){
    generateBarcode(id);
    product = getProduct();
    var indice = findProduct(id, product);

    if (indice != null){        
        addProduct(product[indice].id, product[indice].name, product[indice].price);

    }else{
        productNotFound();
    }
}


//Busca codigo de barra na api
function findProduct(id,product){
    var count;
    for (var indice = 0; indice <= product.length; indice ++){

        //console.log("contador" + indice);
        if (id == product[indice].id){
            count = indice;
            break;
        }
        else {
            count = null;
        }
    }

    //console.log(count);
    return count;
}


//Adiciona produto na lista
function addProduct(id, name, price){
    
    // Cria as colunas do produto
    var idProduct = document.createElement("td");
    var nameProduct = document.createElement("td");
    var priceProduct = document.createElement("td");
    var removeProduct = document.createElement("td");
        var iconRemoveProduct = document.createElement("button");

    //Adiciona informações do produto a cada coluna
    idProduct.innerText = id;    
    nameProduct.innerText = name;    
    priceProduct.innerText = price;
        priceProduct.setAttribute("id", "price")
    removeProduct.appendChild(iconRemoveProduct);
        iconRemoveProduct.setAttribute("class", "bi bi-x-square-fill");
        iconRemoveProduct.setAttribute("id", price);
        iconRemoveProduct.setAttribute("onclick","removeProduct(event)");

    //Cria a linha do produto e adiciona as classes
    var rowProduct = document.createElement("tr");
    rowProduct.setAttribute("name", "product"+id);
    rowProduct.setAttribute("id", "product-"+id)
    rowProduct.setAttribute("class","p-2");

    //Adiciona colunas a linha
    rowProduct.appendChild(idProduct);
    rowProduct.appendChild(nameProduct);
    rowProduct.appendChild(priceProduct);
    rowProduct.appendChild(removeProduct);

    //Adiciona a linha na div
    var productList = document.getElementById("product-tbody");
    productList.appendChild(rowProduct);

    //Somar valor
    addValue(price);
    
    //Limpa código de barras
    document.getElementById("input-barcode").innerHTML = "";
}


//remove produto da tabela
function removeProduct(event){
    var price = event.target;
    var target = event.target.parentNode.parentNode;
    target.remove();


    //função que remove valor da soma
    removeValue(price.id);
}


function productNotFound(){
    alert ("Produto Não Encontrado");
}