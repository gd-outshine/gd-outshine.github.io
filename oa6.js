function sendData(endpoint) {
  var xhr = new XMLHttpRequest();

  xhr.open('POST', endpoint);
  xhr.setRequestHeader('Content-type', 'text/plain');
  xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://analytics.outshine.com');
  xhr.send();

  xhr.onload = function () {
    if (xhr.status.toString()[0] !== '2') {
      console.error(xhr.status + '> ' + xhr.statusText);
    }
  };
}
