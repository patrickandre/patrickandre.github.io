const xhrRequest = new XMLHttpRequest();
      xhrRequest.open('GET', 'http://swapi.co/api/people/1/');
      xhrRequest.send();

  xhrRequest.onreadystatechange = function() {
    if (xhrRequest.readyState === 4 && xhrRequest.status == 200) {
      let parseData = JSON.parse(xhrRequest.responseText);

      console.log(parseData.gender);
      console.log(parseData.mass);
      console.log(parseData.eye_color);
      document.getElementById('container1').innerHTML = parseData.gender;

    }
  }
