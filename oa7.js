function sendData(endpoint) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);
  xhr.setRequestHeader('Content-type', 'text/plain');
  xhr.send();

  xhr.onload = function () {
    if (xhr.status.toString()[0] !== '2') {
      console.error(xhr.status + '> ' + xhr.statusText);
    }
  };
}
