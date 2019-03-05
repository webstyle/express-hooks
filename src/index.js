function after(hook) {
  return function(req, res, next) {
    let temp = res.send;
    let body;
    res.send = function() {
      body = arguments["0"];
      temp.apply(this, arguments);
    };
    next();
    res.on("finish", () => hook(JSON.parse(body)));
  };
}

function before(hook) {
  return async function(req, res, next) {
    await hook();
    next();
  };
}

function each(method, hook) {
  return function(req, res, next) {};
}

module.exports = {
  after,
  before
};
