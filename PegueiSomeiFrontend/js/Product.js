
//Busca produto na API
function getProduct(){
    var data = getApi();
    var product = JSON.parse(data);
    console.log(product);
    return product;    
}


//Quando usuario adiciona novo produto
function newProduct(id){
    generateBarcode(id);
    product = getProduct();
    
    if(findProduct(id,product)!=null){
        console.log("vamos somar");
    }else{
        productNotFound();
    }
}


//Busca codigo de barra na api
function findProduct(id,product){
    
    var result = product.find(obj => {
        return obj.id === id;
      });
      
      showProduct(result.id, result.name, result.price);    
      return result;
}


//Adiciona produto na lista
function addProduct(id, name, price){

    var inputProduct = document.createElement("div");
    inputProduct.setAttribute("name", "product-"+id);
    inputProduct.setAttribute("id", "product-"+id)
    inputProduct.classList.add("product");

    var productList = document.getElementById("product-list");
    productList.appendChild(inputProduct);


}


function productNotFound(){
    alert ("Produto Não Encontrado");
}