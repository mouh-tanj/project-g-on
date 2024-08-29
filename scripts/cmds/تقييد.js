module.exports = {
	config: {
		name: "تقييد",
		aliases: ["الادمن-فقط", "adboxonly", "adminboxonly"],
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		description: {
			en: "تقييد استخدام البوت في هذه المجموعة، فقط المسؤولين يمكنهم استخدامه"
		},
		category: "box chat",
		guide: {
			en: "   {pn} [تشغيل | ايقاف]: تشغيل/إيقاف التقييد، يمكن لمسؤولي المجموعة فقط استخدام البوت"
				+ "\n   {pn} [اشعار] [تشغيل | ايقاف]: بتشغيل/إيقاف اشعار التقييد، عندما لا يكون المستخدم مسؤولاً في المجموعة"
		}
	},

	langs: {
		en: {
			turnedOn: "🌹✨ ---- تنبيه ---- ✨🌹\n\nتم تقييد استخدام البوت في\n هذه المجموعة، ولن يتمكن\n  أحد من استخدامه 🤭❌",
			turnedOff: "🌹✨ ---- تنبيه ---- ✨🌹\n\nتم إلغاء تقييد استخدام البوت\nفي هذه المجموعة، وسيتمكن\nكل الأعضاء من استخدامه ✅",
			turnedOnNoti: "Turned on the notification when user is not admin of group use bot",
			turnedOffNoti: "Turned off the notification when user is not admin of group use bot",
			syntaxError: "Syntax error, only use {pn} on or {pn} off"
		}
	},

	onStart: async function ({ args, message, event, threadsData, getLang }) {
		let isSetNoti = false;
		let value;
		let keySetData = "data.onlyAdminBox";
		let indexGetVal = 0;

		if (args[0] == "noti") {
			isSetNoti = true;
			indexGetVal = 1;
			keySetData = "data.hideNotiMessageOnlyAdminBox";
		}

		if (args[indexGetVal] == "on")
			value = true;
		else if (args[indexGetVal] == "off")
			value = false;
		else
			return message.reply(getLang("syntaxError"));

		await threadsData.set(event.threadID, isSetNoti ? !value : value, keySetData);

		if (isSetNoti)
			return message.reply(value ? getLang("turnedOnNoti") : getLang("turnedOffNoti"));
		else
			return message.reply(value ? getLang("turnedOn") : getLang("turnedOff"));
	}
};
