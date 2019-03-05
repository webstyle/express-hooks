# Express.js routing lifecycle hooks

## Installation
```bash
npm i @webstyle/expresshooks --save
```


### before
```js
const { before } = require('expresshooks');

async function logger() {
    // your code here....
    return true;
}

// Add before hook as middleware 
app.get("/", before(logger), function(req, res) {
  return res.send("Hello world");
});
```

### after
```js
const { after } = require('expresshooks');

async function logger(response) {
    // your code here...
    return true;
}

// Add after hook as middleware 
app.get("/", after(logger), function(req, res) {
  return res.send("Hello world");
});
```
