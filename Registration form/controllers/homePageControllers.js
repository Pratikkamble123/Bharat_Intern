const path = require("path");

const homePageController = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/homepage.html")); 
};

module.exports = homePageController;
