// //Liga o escutador do código de barras
// window.onload = function () {
//     document.getElementById("input-barcode").focus();
// }
var contador = 0;
//Gera código de barras
function generateBarcode(id){
    JsBarcode("#product1", id);
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


function startCamera(){
    Quagga.init({
        inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#camera')
        },
        decoder : {
        readers : ["code_128_reader"]
        }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        //console.log("Initialization finished. Ready to start");
        Quagga.start();
    });

    // Quagga.decodeSingle({
    //     decoder: {
    //         readers: ["code_128_reader"] // List of active readers
    //     },
    //     locate: true, // try to locate the barcode in the image
    //     src: '/test/fixtures/code_128/image-001.jpg' // or 'data:image/jpg;base64,' + data
    // }, function(result){
    //     if(result.codeResult) {
    //         console.log("result", result.codeResult.code);
    //     } else {
    //         console.log("not detected");
    //     }
    // });

    
    Quagga.onDetected( function(data){
        
        if (contador == 0){
            contador ++;
            var id = data.codeResult.code;
            newProduct(id);              
        }

        Quagga.stop();
        stopModal(); 
    });
}

function stopCamera(){
    Quagga.stop();
}

function stopModal(){
    btnModal = document.getElementById("stop-camera");
    btnModal.click();
    setTimeout(zerarContador, 500);
}

function zerarContador(){
    contador = 0;
}