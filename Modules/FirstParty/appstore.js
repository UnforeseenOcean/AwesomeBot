const itunes = require("searchitunes");

module.exports = (bot, db, winston, userDocument, serverDocument, channelDocument, memberDocument, msg, suffix) => {
    var apps = getAppList(suffix);
    if(apps.length>0) {
        var results = [];
        for(var i=0; i<apps.length; i++) {
            itunes({
                entity: "software",
                country: "US",
                term: apps[i],
                limit: 1
            }, (err, data) => {
                if(err) {
                    winston.warn("Apple app '" + apps[i] + "' not found to link", {svrid: msg.guild.id, chid: msg.channel.id, usrid: msg.author.id})
                    results.push(msg.author + " Sorry, no such app exists.\n");
                } else {
                    results.push(data.results[0].trackCensoredName + " by " + data.results[0].artistName + ", " + data.results[0].formattedPrice + " and rated " + data.results[0].averageUserRating + " stars: " + data.results[0].trackViewUrl + "\n");
                }
            });
        }
        bot.sendArray(msg.channel, results, 0);
    } else {
        msg.channel.sendMessage("http://www.apple.com/itunes/charts/free-apps/");
    }
}

function getAppList(suffix) {
    var apps = suffix.split(",");
    var i = 0;
    while(i<apps.length) {
        if(!apps[i] || apps.indexOf(apps[i])!=i) {
            apps.splice(i, 1);
        } else {
            i++;
        }
    }
    return apps;
}