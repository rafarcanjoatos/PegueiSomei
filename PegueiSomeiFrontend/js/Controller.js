function getApi(){
  let request = new XMLHttpRequest();
  request.open('GET', "http://localhost/PegueiSomei/PegueiSomeiFrontend/product.json", false);
  request.send()
  return request.responseText;
}