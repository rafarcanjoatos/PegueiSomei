//Liga o escutador do código de barras
window.onload = function () {
    document.getElementById("input-barcode").focus();
}

//Gera código de barras
function generateBarcode(id){
    JsBarcode("#produto1", id);
}

//Ouvir Codigo de Barras se tiver números válidos
var validChars = ['0','1','2','3','4','5','6','7','8','9'];
var buttonKeyboard = addEventListener("keyup", userAction);

function userAction (event){    
    if(validChars.find(element => element == event.key) != null){
        var id = document.getElementById("input-barcode").value;
        newProduct(id);
    }    
}