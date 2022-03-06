var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {

  let item = "whitespot";
  /*
  const SerpApi = require('google-search-results-nodejs')
  const search = new SerpApi.GoogleSearch("4e7a340d74d473a65c7491c76092227cfebc97a4c7ca936dd08a95b677b4ff75");
  search.json({
    q: item, 
    location: "Vancouver"
  }, (result) => {
  console.log(result["organic_results"][0]);
  res.send(result["organic_results"][0]  );
    })
    */
      res.send("API is working properly");
});

module.exports = router;
