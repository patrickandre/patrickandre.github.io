var req = new XMLHttpRequest();
req.open("GET", "ex1.json");
req.send(null);
console.log(JSON.parse(req.responseText));
// → {banana: "yellow", lemon: "yellow", cherry: "red"}