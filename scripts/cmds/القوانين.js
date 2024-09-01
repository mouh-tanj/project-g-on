const { getPrefix } = global.utils;

module.exports = {
	config: {
		name: "القوانين",
		version: "1.6",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			en: "عرض/إضافة/تعديل/تغيير الترتيب/حذف قوانين المجموعة الخاصة بك"
		},
		category: "box chat",
		guide: {
			en: "   {pn} [اضافة] <القانون الذي تريد إضافته>"
				+ "\n   {pn}: قائمة القوانين"
				+ "\n   {pn} [تعديل] <n> <القانون بعد التعديل>"
				+ "\n   {pn} [تحريك] <stt1> <stt2>"
				+ "\n   {pn} [حذف] <n>"
				+ "\n   {pn} [حذفالكل]"
		}
	},

	langs: {
		en: {
			yourRules: "🌹 قوانين 💙 المجموعة 🌹\nا====✨---------✨=====ا\n\n%1\nا=====✨---------✨====ا\nمخالفة القوانين = إنذار أو طرد",
			noRules: "🌹 لا توجـد قوانيـن في هذه\nالمجمـوعـة، للإضـافة أڪتـب:\n%1قوانين اضافة وتكتب القانون",
			noPermissionAdd: "من أنت حتى تضيف القوانين 🙍‍♀️",
			noContent: "أكتب القانون الذي تࢪيد إدخاله للقائمة، بعد كلمة أضف 🫠",
			success: "✨ تمت إضافة قانون جديد بنجاح ✅، أحسنت 👌",
			noPermissionEdit: "من أنت حتى تعدل القوانين 🙍‍♀️",
			invalidNumber: "Please enter the number of the rule you want to edit",
			rulesNotExist: "Rule number %1 does not exist",
			numberRules: "المجموعة بها %1 قانون فقط",
			noContentEdit: "Please enter the content you want to change for rule number %1",
			successEdit: "Edited rule number %1 to: %2",
			noPermissionMove: "من أنت حتى تعدل تࢪتيب القوانين 🙍‍♀️",
			invalidNumberMove: "Please enter the number of 2 group rules you want to swap",
			sameNumberMove: "Cannot swap position of 2 same rules",
			rulesNotExistMove2: "Rule number %1 and %2 does not exist",
			successMove: "Swapped position of rule number %1 and %2 successfully",
			noPermissionDelete: "من أنت حتى تحذف القوانين 🙍‍♀️",
			invalidNumberDelete: "أدخل ࢪقم القانون الذي تࢪيد\nحذفـه بعد ڪلمة حـذف 🫠",
			rulesNotExistDelete: "🌹 القانون %1 غيࢪ موجود 🙎‍♀️",
			successDelete: "🌹 تم حذف القانون ࢪقم %1\nبنجاح ✅، محتوى القانون:\n\n%2",
			noPermissionRemove: "من أنت حتى تحذف القوانين 🙍‍♀️",
			confirmRemove: "⚠️ لتأكيد حذف كل القوانين\nتفاعـل مـع هـذه الࢪسـالة ✅",
			successRemove: "تم حذف كل القوانين بنجاح ✅",
			invalidNumberView: "Please enter the number of the rule you want to view"
		}
	},

	onStart: async function ({ role, args, message, event, threadsData, getLang, commandName }) {
		const { threadID, senderID } = event;

		const type = args[0];
		const rulesOfThread = await threadsData.get(threadID, "data.rules", []);
		const totalRules = rulesOfThread.length;

		if (!type) {
			let i = 1;
			const msg = rulesOfThread.reduce((text, rules) => text += `${i++}. ${rules}\n`, "");
			message.reply(msg ? getLang("yourRules", msg) : getLang("noRules", getPrefix(threadID)), (err, info) => {
				global.GoatBot.onReply.set(info.messageID, {
					commandName,
					author: senderID,
					rulesOfThread,
					messageID: info.messageID
				});
			});
		}
		else if (["اضافة"].includes(type)) {
			if (role < 1)
				return message.reply(getLang("noPermissionAdd"));
			if (!args[1])
				return message.reply(getLang("noContent"));
			rulesOfThread.push(args.slice(1).join(" "));
			try {
				await threadsData.set(threadID, rulesOfThread, "data.rules");
				message.reply(getLang("success"));
			}
			catch (err) {
				message.err(err);
			}
		}
		else if (["تعديل"].includes(type)) {
			if (role < 1)
				return message.reply(getLang("noPermissionEdit"));
			const stt = parseInt(args[1]);
			if (stt === NaN)
				return message.reply(getLang("invalidNumber"));
			if (!rulesOfThread[stt - 1])
				return message.reply(`${getLang("rulesNotExist", stt)}, ${totalRules == 0 ? getLang("noRules") : getLang("numberRules", totalRules)}`);
			if (!args[2])
				return message.reply(getLang("noContentEdit", stt));
			const newContent = args.slice(2).join(" ");
			rulesOfThread[stt - 1] = newContent;
			try {
				await threadsData.set(threadID, rulesOfThread, "data.rules");
				message.reply(getLang("successEdit", stt, newContent));
			}
			catch (err) {
				message.err(err);
			}
		}
		else if (["تحريك"].includes(type)) {
			if (role < 1)
				return message.reply(getLang("noPermissionMove"));
			const num1 = parseInt(args[1]);
			const num2 = parseInt(args[2]);
			if (isNaN(num1) || isNaN(num2))
				return message.reply(getLang("invalidNumberMove"));
			if (!rulesOfThread[num1 - 1] || !rulesOfThread[num2 - 1]) {
				let msg = !rulesOfThread[num1 - 1] ?
					!rulesOfThread[num2 - 1] ?
						message.reply(getLang("rulesNotExistMove2", num1, num2)) :
						message.reply(getLang("rulesNotExistMove", num1)) :
					message.reply(getLang("rulesNotExistMove", num2));
				msg += `, ${totalRules == 0 ? getLang("noRules") : getLang("numberRules", totalRules)}`;
				return message.reply(msg);
			}
			if (num1 == num2)
				return message.reply(getLang("sameNumberMove"));

			// swap
			[rulesOfThread[num1 - 1], rulesOfThread[num2 - 1]] = [rulesOfThread[num2 - 1], rulesOfThread[num1 - 1]];
			try {
				await threadsData.set(threadID, rulesOfThread, "data.rules");
				message.reply(getLang("successMove", num1, num2));
			}
			catch (err) {
				message.err(err);
			}
		}
		else if (["حذف", "مسح", "إزالة"].includes(type)) {
			if (role < 1)
				return message.reply(getLang("noPermissionDelete"));
			if (!args[1] || isNaN(args[1]))
				return message.reply(getLang("invalidNumberDelete"));
			const rulesDel = rulesOfThread[parseInt(args[1]) - 1];
			if (!rulesDel)
				return message.reply(`${getLang("rulesNotExistDelete", args[1])}, ${totalRules == 0 ? getLang("noRules") : getLang("numberRules", totalRules)}`);
			rulesOfThread.splice(parseInt(args[1]) - 1, 1);
			await threadsData.set(threadID, rulesOfThread, "data.rules");
			message.reply(getLang("successDelete", args[1], rulesDel));
		}
		else if (["حذفالكل", "مسحالكل", "إزالةالكل"].includes(type)) {
			if (role < 1)
				return message.reply(getLang("noPermissionRemove"));
			message.reply(getLang("confirmRemove"), (err, info) => {
				global.GoatBot.onReaction.set(info.messageID, {
					commandName: "rules",
					messageID: info.messageID,
					author: senderID
				});
			});
		}
		else if (!isNaN(type)) {
			let msg = "";
			for (const stt of args) {
				const rules = rulesOfThread[parseInt(stt) - 1];
				if (rules)
					msg += `${stt}. ${rules}\n`;
			}
			if (msg == "")
				return message.reply(`${getLang("rulesNotExist", type)}, ${totalRules == 0 ? getLang("noRules") : getLang("numberRules", totalRules)}`);
			message.reply(msg);
		}
		else {
			message.SyntaxError();
		}
	},

	onReply: async function ({ message, event, getLang, Reply }) {
		const { author, rulesOfThread } = Reply;
		if (author != event.senderID)
			return;
		const num = parseInt(event.body || "");
		if (isNaN(num) || num < 1)
			return message.reply(getLang("invalidNumberView"));
		const totalRules = rulesOfThread.length;
		if (num > totalRules)
			return message.reply(`${getLang("rulesNotExist", num)}, ${totalRules == 0 ? getLang("noRules") : getLang("numberRules", totalRules)}`);
		message.reply(`${num}. ${rulesOfThread[num - 1]}`, () => message.unsend(Reply.messageID));
	},

	onReaction: async ({ threadsData, message, Reaction, event, getLang }) => {
		const { author } = Reaction;
		const { threadID, userID } = event;
		if (author != userID)
			return;
		await threadsData.set(threadID, [], "data.rules");
		message.reply(getLang("successRemove"));
	}
};
