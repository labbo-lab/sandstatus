function addRequestStats(url, title) {
  elem = document.createElement("div")
  reqStart = Date.now()
  fetch(url)
    .then((response) => {
      reqEnd = Date.now()
      reqElapsed = reqEnd - reqStart
      statusCode = response.status
      elem = document.createElement("div")
      elem.innerHTML = `
      <b>${title}</b>
      <br>
      <span>Status: ${statusCode}</span>
      <br>
      <span>${reqElapsed}ms (${reqElapsed/1000}s)</span>
      <hr>
      `
      document.body.append(elem)
    })

};

addRequestStats("https://sandspiel.club/", "Main Page")
addRequestStats("https://us-central1-sandtable-8d0f7.cloudfunctions.net/api/creations", "Creations")
addRequestStats("https://us-central1-sandtable-8d0f7.cloudfunctions.net/api/creations?title=test", "Search ('test')")
addRequestStats("https://us-central1-sandtable-8d0f7.cloudfunctions.net/api/creations/7f117001e4bf8a22c882", "Creation")

