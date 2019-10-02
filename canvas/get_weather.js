

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.darksky.net/forecast/50467c6e42c37df71f69fc54c303dfaa/29.6201,-82.3726,1565654400', true)

request.onload = function() {
  // Begin accessing JSON data here
}

// Send request
request.send()
