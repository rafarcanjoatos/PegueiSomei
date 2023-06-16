function getApi(url){
  let request = new XMLHttpRequest();
  request.open('GET', "http://localhost/PegueiSomei/PegueiSomeiFrontend" + url, false);
  request.send()

  //Transforma o JSON em Objeto JS
  let data = JSON.parse(request.responseText);
  return data;
}