//Quando usuario escaneia um produto
function scanProduct(id){      
    product = getApi("/product.json");
    
    //Precisamos de um índice para extrair o produto do array de sua linha
    var index = findProductIndex(id, product);

    //Contador para não adicionar vários produtos ao mesmo tempo
    var executed = false;

    //Adiciona produto a Lista de Compras se não for nulo ou já executado
    if ((index != null)&&(executed != true)){
        
        executed = true;
        addProductToShoppingList(product[index].id, product[index].name, product[index].price);

    }else{
        productNotFound();
    }
}

//Busca valor do codigo de barra nos dados coletados da API
function findProductIndex(id,product){
    var count;
    
    for (var index = 0; index < product.length-1; index ++){
        if (id != product[index].id){            
            count = null;
        }
        else if (id == product[index].id){
            count = index;
            break;
        }
    }

    return count;
}


function productNotFound(){
    alert ("Produto Não Encontrado");
}