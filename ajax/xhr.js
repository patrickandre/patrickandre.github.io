const xhrRequest = new XMLHttpRequest();
xhrRequest.open('GET', 'http://swapi.co/api/people/1/');
let parsedData;

xhrRequest.onreadystatechange = function() {
  if (xhrRequest.readyState === 4 && xhrRequest.status == 200) {
    parsedData = JSON.parse(xhrRequest.responseText);
    console.log(parsedData.name);
    console.log(parsedData.hair_color);
    console.log(parsedData.mass);
    document.getElementById('container1').innerHTML = parsedData.name;

  }
}

xhrRequest.send();

