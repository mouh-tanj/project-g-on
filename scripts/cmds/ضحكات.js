const fs = require("fs");
module.exports.config = {
                name: "ضحكات",
		version: "1.3",
		author: "محمد تانجيرو",
		countDown: 5,
		role: 0,
		description: { ar: "ترسل ضحكات بعض الشخصيات الأسطورية" },
		category: "no prefix",
		guide: { ar: "{pn} [اسم الشخصية]" }
                         };

module.exports.onChat = function({ message, api, event, client, envGlobal, __GLOBAL }) {
  var { threadID, messageID } = event;
  let mhmd = event.body;

  if(mhmd.includes("ضحكة لايت") || mhmd.includes("ضحكة كيرا")) {
    var legendary = {body: "ضحكة أسطورية 🫣🔥",
    attachment: fs.createReadStream(`${__dirname}/Laughs/kira.mp3`)}
    api.sendMessage(legendary, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
        };
  
  if(mhmd.includes("ضحكة دوفلامينغو") || mhmd.includes("ضحكة دوفي")) {
    var legendary = {body: "ضحكة أسطورية 🫣🔥",
    attachment: fs.createReadStream(`${__dirname}/Laughs/dofi.mp3`)}
    api.sendMessage(legendary, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
        };

  if(mhmd.includes("ضحكة تيتش") || mhmd.includes("ضحكة اللحية السوداء")) {
    var legendary = {body: "ضحكة أسطورية 🫣🔥",
    attachment: fs.createReadStream(`${__dirname}/Laughs/titch.mp3`)}
    api.sendMessage(legendary, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
        };
  
  if(mhmd.includes("ضحكة كروكودايل") || mhmd.includes("ضحكة كروكو")) {
    var legendary = {body: "ضحكة أسطورية 🫣🔥",
    attachment: fs.createReadStream(`${__dirname}/Laughs/croco.mp3`)}
    api.sendMessage(legendary, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
        };

  if(mhmd.includes("ضحكة بروك")) {
    var legendary = {body: "ضحكة أسطورية 🫣🔥",
    attachment: fs.createReadStream(`${__dirname}/Laughs/brook.mp3`)}
    api.sendMessage(legendary, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
        };

  if(mhmd.includes("ضحكة سيزار")) {
    var legendary = {body: "ضحكة أسطورية 🫣🔥",
    attachment: fs.createReadStream(`${__dirname}/Laughs/caesar.mp3`)}
    api.sendMessage(legendary, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
        };

  if(mhmd.includes("ضحكة مادارا")) {
    var legendary = {body: "ضحكة أسطورية 🫣🔥",
    attachment: fs.createReadStream(`${__dirname}/Laughs/madara.mp3`)}
    api.sendMessage(legendary, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
        };
}

  module.exports.onStart = function({ message, api, event, client, envGlobal, __GLOBAL }) {}
