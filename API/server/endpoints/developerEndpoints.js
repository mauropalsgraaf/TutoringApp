module.exports = function (express) {

  let getDevelopers = function () {
    express.get("/developers", function (req, res) {
      res.json( [{ name : "developer", age : 122 }, { name : "developer1", age : 66 }]);
    });
  };

  let getDeveloperById = function () {
    express.get("/developers/:id", function (req, res) {
      res.json({ name : "developer", id : req.params.id });
    });
  };

  return {
    setupDeveloperEndpoints : function () {
      getDevelopers();
      getDeveloperById();
    }
  }
};