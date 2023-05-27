
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

        console.log("contador" + indice);
        if (id == product[indice].id){
            count = indice;
            break;
        }
        else {
            count = null;
        }
    }

    console.log(count);
    return count;
}


//Adiciona produto na lista
function addProduct(id, name, price){

    var idProduct = document.createElement("td");
    idProduct.innerText = id;
    
    var nameProduct = document.createElement("td");
    nameProduct.innerText = name;
    
    var priceProduct = document.createElement("td");
    priceProduct.innerText = price;

    var rowProduct = document.createElement("tr");
    rowProduct.setAttribute("name", "product-"+id);
    rowProduct.setAttribute("id", "product-"+id)
    rowProduct.classList.add("product");
    rowProduct.appendChild(nameProduct);
    rowProduct.appendChild(priceProduct);

    var productList = document.getElementById("product-list");
    productList.appendChild(rowProduct);
    
    document.getElementById("input-barcode").reset;
}


function productNotFound(){
    alert ("Produto Não Encontrado");
}