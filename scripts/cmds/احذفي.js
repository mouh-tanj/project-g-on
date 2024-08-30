module.exports = {
	config: {
		name: "احذفي",
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			en: "تأمر البوت بحذف رسالته"
		},
		category: "box chat",
		guide: {
			en: "قم بالرد على الرسالة التي تريد إلغاء إرسالها واكتب {pn}"
		}
	},

	langs: {
		en: {
			returnCant: "رد على إحدى رسالاتي التي تريدني أن أحذفها 🙄",
			missingReply: "من أنت حتى تأمرني 🤔، لن أحذف 🙄"
		}
	},

	onStart: async function ({ message, event, api, getLang }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getLang("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getLang("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
	}
};





/*
{
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
	}
*/
