module.exports.config = {
		name: "زوجيني",
		version: "1.4",
		author: "محمد تانجيرو",
		countDown: 5,
		role: 0,
		description: {
			ar: "يزوجك بشخص من الغروب بشكل عشوائي"
		},
		category: "box chat",
		guide: {
			ar: "{pn}"
		}
	},

module.exports.onStart = async function({ api, event, usersData }) {
        const axios = require("axios");
        const fs = require("fs-extra");
        var TOKEN = "6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
        var data = await usersData.get(senderID);
        var money = usersData.money
        if( money < 200) api.sendMessage(`انت لا تملك المال الكافي، قم بكتابة هذا الامر لتحصل على بعض المال ${global.config.PREFIX}كهف - ${global.config.PREFIX}هدية - ${global.config.PREFIX}عمل`, event.threadID, event.messageID) //thay số tiền cần trừ vào 0, xóa money = 0
        else {
        var tile = Math.floor(Math.random() * 101);
        

        //let loz = await api.getThreadInfo(event.threadID);
        var emoji = event.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];

        var namee = (await Users.getData(event.senderID)).name;
        var name = (await Users.getData(id)).name;

        var arraytag = [];
        arraytag.push({id: event.senderID, tag: namee});
        arraytag.push({id: id, tag: name});
      
        Currencies.setData(event.senderID, options = {money: money - 200})
  
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=${TOKEN}`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/1.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=${TOKEN}`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/2.png"));
        var msg = {body: `✨💙 🤭 لدينا زوجان هنا 💙✨\n       نسبة الرومنسية: ${tile} %\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
        //fs.unlinkSync(__dirname + '/cache/1.png');
        //fs.unlinkSync(__dirname + '/cache/2.png');
      }
}
