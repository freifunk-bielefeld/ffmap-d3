/* after making any changes here enter "make" in your terminal to appy the changes */
var ffmapConfig = {
    // link to your main community site:
    url: "/",

    // visible link in the navigation:
    community_site: "gotham.freifunk.net",
    community_name: "Freifunk Gotham",

    // ipv6 prefix for link to router status site
    prefix6: "fdef:17a0:ffb1:300::",

    // initial gravity, friction, of the graph at pageload:
    gravity: 0.05,
    friction: 0.73,
    theta: 0.8,
    charge: 1.0,
    distance: 1.0,
    strength: 1.0,

    // all communities to be listed
    community_labels: {
        "gotham": "Gotham"
    },
    community_links: {
        "gotham": "http://gotham.freifunk.net"
    },
    show_unlisted_communities: true,

    // latest firmware versions
    recent_firmwares : [ "undefined", "server", "ffbi-0.5.0" ],

    // path to the nodes.json
    nodes_json: "nodes.json",
};
