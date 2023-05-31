//Função que calcula valor
function addValue(price){
    var showTotalValue = document.getElementById("total-value");
    var totalValue = document.getElementById("total-value").innerHTML;   

    totalValue = parseFloat(totalValue) + parseFloat(price);
    showTotalValue.innerText = totalValue.toFixed(2);
}

function removeValue(price){        
    var showTotalValue = document.getElementById("total-value");
    var totalValue = document.getElementById("total-value").innerHTML;   

    totalValue = parseFloat(totalValue) - parseFloat(price);

    if(totalValue>0){
        showTotalValue.innerText = totalValue;
    }else{
        showTotalValue.innerText = "0.00";
    }
}