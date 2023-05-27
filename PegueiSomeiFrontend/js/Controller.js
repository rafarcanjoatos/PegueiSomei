function getApi(url){
  let request = new XMLHttpRequest();
  request.open('GET', "http://localhost/PegueiSomeiJs/product.json", false);
  request.send()
  return request.responseText;
}