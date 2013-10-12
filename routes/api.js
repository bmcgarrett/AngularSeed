/*
 * Serve JSON to our AngularJS client
 */

exports.users = function (req, res) {
      res.json(
          [
              {
                  name: "Brendan"
              },
              {
                  name: "Megan"
              },
              {
                  name: "Lady"
              }
          ]
      );
};