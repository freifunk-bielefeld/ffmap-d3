/* after making any changes here enter "make" in your terminal to appy the changes */

var ffmapConfig = {
  // link to your main community site:
  url:       "/",

  // visible link in the navigation:
  community_site : "freifunk.net",
  community_name : "Freifunk",

  // initial gravity, friction, of the graph at pageload:
  gravity:   0.05,
  friction:  0.73,
  theta:     0.8,
  charge:    1.0,
  distance:  1.0,
  strength:  1.0,

  // path to the nodes.json
  nodes_json: "nodes.json",
};

document.getElementById("community_site").innerHTML = ffmapConfig.community_site;
document.title = ffmapConfig.community_name + " -  " + document.title;
