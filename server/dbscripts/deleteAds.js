const fetch = require("node-fetch");
const config = require("config");

const PORT = config.get("port") || 5000;

//deletes ALL ads from database

function deleteAds(ids) {
  for (let i = 0; i < ids.length; i++) {
    fetch(`http://localhost:${PORT}/api/ads/${ids[i]}`, {
      method: "DELETE",
    });
  }
}

fetch(`http://localhost:${PORT}/api/ads`)
  .then((res) => res.json())
  .then((json) => {
    let ids = [];
    let ads = json.slice();
    for (let i = 0; i < ads.length; i++) {
      ids.push(ads[i]._id);
    }
    deleteAds(ids);
    console.log("all ads were succesfully deleted from database!");
  });
