var buttonKeyboard = addEventListener("keyup", userAction);

function userAction (event){
    var id = document.getElementById("input-barcode").value;
    newProduct(id);
}