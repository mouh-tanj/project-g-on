const { getPrefix } = global.utils;

module.exports = {
	config: {
		name: "القوانين",
		version: "1.6",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			en: "إنشاء/عرض/إضافة/تعديل/تغيير الترتيب/حذف قوانين المجموعة الخاصة بك"
		},
		category: "box chat",
		guide: {
			en: "   {pn} [add | -a] <rule to add>: add rule for group."
				+ "\n   {pn}: view group rules."
				+ "\n   {pn} [edit | -e] <n> <content after edit>: edit rule number n."
				+ "\n   {pn} [move | -m] <stt1> <stt2> swap position of rule number <stt1> and <stt2>."
				+ "\n   {pn} [delete | -d] <n>: delete rule number n."
				+ "\n   {pn} [remove | -r]: delete all rules of group."
				+ "\n"
				+ "\n   Example:"
				+ "\n    {pn} add don't spam"
				+ "\n    {pn} move 1 3"
				+ "\n    {pn} -e 1 don't spam message in group"
				+ "\n    {pn} -r"
		}
	},

	langs: {
		en: {
			yourRules: "Your group rules\n%1",
			noRules: "Your group has no rules, to add rules for group use `%1rules add`",
			noPermissionAdd: "Only admins can add rules for group",
			noContent: "Please enter the content for the rule you want to add",
			success: "Added new rule for group successfully",
			noPermissionEdit: "Only admins can edit group rules",
			invalidNumber: "Please enter the number of the rule you want to edit",
			rulesNotExist: "Rule number %1 does not exist",
			numberRules: "Your group only has %1 rules",
			noContentEdit: "Please enter the content you want to change for rule number %1",
			successEdit: "Edited rule number %1 to: %2",
			noPermissionMove: "Only admins can move group rules",
			invalidNumberMove: "Please enter the number of 2 group rules you want to swap",
			sameNumberMove: "Cannot swap position of 2 same rules",
			rulesNotExistMove2: "Rule number %1 and %2 does not exist",
			successMove: "Swapped position of rule number %1 and %2 successfully",
			noPermissionDelete: "Only admins can delete group rules",
			invalidNumberDelete: "Please enter the number of the rule you want to delete",
			rulesNotExistDelete: "Rule number %1 does not exist",
			successDelete: "Deleted rule number %1 of group, content: %2",
			noPermissionRemove: "Only group admins can remove all group rules",
			confirmRemove: "⚠️ React to this message with any emoji to confirm remove all group rules",
			successRemove: "Removed all group rules successfully",
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
		else if (["اضافة", "اضيفي"].includes(type)) {
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
