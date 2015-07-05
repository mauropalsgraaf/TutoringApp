module.exports = function (express) {

  var getDevelopers = function () {
    express.get("/developers", function (req, res) {
      res.json([{ name : "developer", age : 12 }, { name : "developer1", age : 66 }]);
    });
  };

  var getDeveloperById = function () {
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