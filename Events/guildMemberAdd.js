const config = require("./../Configuration/config.json");

// Member joined server
module.exports = (bot, db, winston, svr, member) => {
	// Get server data
	db.servers.findOne({_id: svr.id}, (err, serverDocument) => {
		if(!err && serverDocument) {
			if(serverDocument.config.moderation.isEnabled) {
				// Send new_member_message if necessary
				if(serverDocument.config.moderation.status_messages.new_member_message.isEnabled) {
					winston.info("Member '" + member.user.username + "' joined server '" + svr.name + "'", {svrid: svr.id, usrid: member.id});
					var ch = svr.channels.find("id", serverDocument.config.moderation.status_messages.new_member_message.channel_id);
					if(ch) {
						var channelDocument = serverDocument.channels.id(ch.id);
						if(!channelDocument || channelDocument.bot_enabled) {
							ch.sendMessage(serverDocument.config.moderation.status_messages.new_member_message.messages[getRandomInt(0, serverDocument.config.moderation.status_messages.new_member_message.messages.length-1)].replaceAll("@user", "**@" + bot.getName(svr, serverDocument, member) + "**"));
						}
					}
				}

				// Send new_member_pm if necessary
				if(serverDocument.config.moderation.status_messages.new_member_pm.isEnabled && !member.user.bot) {
					member.sendMessage("Welcome to the " + svr.name + " Discord chat! " + serverDocument.config.moderation.status_messages.new_member_pm.message_content + " I'm " + bot.getName(svr, serverDocument, svr.member(bot.user)) + " by the way. Learn more with `" + bot.getCommandPrefix(svr, serverDocument) + "help` in the public chat.");
				}

				// Add member to new_member_roles
				for(var i=0; i<serverDocument.config.moderation.new_member_roles.length; i++) {
					var role = svr.roles.find("id", serverDocument.config.moderation.new_member_roles[i]);
					if(role) {
						member.addRole(role).then().catch(err => {
							winston.error("Failed to add new member to role", {svrid: svr.id, usrid: member.id, roleid: role.id}, err);
						});
					}
				}
			}
		} else {
			winston.error("Failed to find server data for serverNewMember", {svrid: svr.id}, err);
		}
	});
};

// Get a random integer in specified range, inclusive
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

String.prototype.replaceAll = (target, replacement) => {
    return this.split(target).join(replacement);
};