/*
 * Serve JSON to our AngularJS client
 */

exports.users = function (req, res) {
      res.json(
          [
              {
                  name: "Brendan",
                  size: "s"
              },
              {
                  name: "Megan",
                  size: "m"
              },
              {
                  name: "Lady",
                  size: "l"
              }
          ]
      );
};