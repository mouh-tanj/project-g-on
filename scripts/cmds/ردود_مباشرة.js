const fs = require("fs");
module.exports.config = {
                name: "ردود_مباشرة",
            		version: "1.3",
            		author: "محمد تانجيرو",
            		countDown: 5,
            		role: 0,
            		description: { ar: "ردود البوت على بعض الرسائل دون الحاجة إلى بادئة" },
            		category: "no prefix",
            		guide: { ar: "لا تحتاج للبادئة (.)" }
                         };

module.exports.onChat = async function({ message, api, event, client, envGlobal, __GLOBAL }) {
  var { threadID, messageID, reason } = event;
  let mhmd = event.body;
  
  if (mhmd.startsWith ("جعت ") || mhmd.endsWith(" جعت") || mhmd.includes(" جعت ") || mhmd.toString() == "جعت") {
  return api.sendMessage("إذا جعت كل 🙄",
event.threadID,event.messageID)};

 if (mhmd.startsWith ("احبك ") || mhmd.endsWith(" احبك") || mhmd.includes(" احبك ") || mhmd.toString() == "احبك") {
    return api.sendMessage("أمممم ... الأمر محرج 🤭\nدعني أفكر في الأمر 🙄",
event.threadID,event.messageID)}; 

  if (mhmd.includes ("سلام عليكم")) {
    return api.sendMessage("وعليكم السلام ورحمة الله وبركاته 😊",
event.threadID,event.messageID)};

  if (mhmd.includes ("صباح الخي") || mhmd.includes ("صباحو")) {
    return api.sendMessage("صباح النور عزيزي 👋\nلتحظى بيوم جيد 😊",
  event.threadID,event.messageID)};

  if (mhmd.includes ("مساء الخي") || mhmd.includes ("مساؤو")) {
    return api.sendMessage("مساء النور عزيزي 👋\nكيف كان يومك 🤭",
  event.threadID,event.messageID)};

  if (mhmd.includes ("تصبح على خير") || mhmd.includes ("تصبحوا على خير") || mhmd.includes ("تصبحو على خير") || mhmd.includes ("تصبحون على خير")) {
    return api.sendMessage("وأنت من أهله، نوم هنيء لك 🤭",
  event.threadID,event.messageID)};

  if (mhmd.includes ("ليلة سعيدة")) {
    return api.sendMessage("ليلة سعيدة لك ايضا عزيزي ❤️\nأحلام سعيدة وكوابيس بعيدة🤭",
  event.threadID,event.messageID)};

  if ((mhmd.toString() == "باي") || (mhmd.toString() == "بيباي") || (mhmd.toString() == "بيبااي") || (mhmd.toString() == "بيباااي") || (mhmd.toString() == "بايباي") || (mhmd.toString() == "بايو")) {
    return api.sendMessage("باي، إلى اللقاء 👋",
  event.threadID,event.messageID)};

  if (mhmd.includes("كيفك") || mhmd.includes ("كيف حالك")) {
      return api.sendMessage("بخير الحمد لله 💙\nوأنت كيفك يا حلو 😊",
    event.threadID,event.messageID)};

  if (mhmd.includes("اين انت") || mhmd.includes ("وينك")) {
    return api.sendMessage("أنا هنا 👋، اشتقت لي 🙄",
  event.threadID,event.messageID)};

  if (mhmd.startsWith("اهلا ") || mhmd.endsWith (" اهلا") || mhmd.includes(" اهلا ") || mhmd.toString() == "اهلا" || mhmd.startsWith("هلا ") || mhmd.endsWith (" هلا") || mhmd.includes(" هلا ") || mhmd.toString() == "هلا" || mhmd.includes("أهلا")) {
    return api.sendMessage("أهلا 👋، نورت ✨",
  event.threadID,event.messageID)};

  if (mhmd.includes("منور") || mhmd.includes ("نورت")) {
    return api.sendMessage("بنورك، شكرا لك 🤭",
  event.threadID,event.messageID)};

  if (mhmd.includes ("الحمد لله") || mhmd.includes ("الحمدلله") || mhmd.includes ("بخير")) {
    return api.sendMessage("دووم الصحة والعافية 🤭",
  event.threadID,event.messageID)};

  if (mhmd.includes("كم عمر") || mhmd.includes ("شحال عمر") || mhmd.includes ("شحال في عمر") || mhmd.includes ("اديش عمر")) {
    return api.sendMessage("عمري صار 20 🤭، وأنت 🙄",
  event.threadID,event.messageID)};

 if (mhmd.startsWith ("أكاني ") || mhmd.endsWith(" أكاني") || mhmd.includes(" أكاني ") || mhmd.toString() == "أكاني" || mhmd.startsWith ("اكاني ") || mhmd.endsWith(" اكاني") || mhmd.includes(" اكاني ") || mhmd.toString() == "اكاني") {
    return api.sendMessage("أمممم ... الأمر محرج 🤭\nدعني أفكر في الأمر 🙄", attachment: fs.createReadStream(`${__dirname}/Laughs/ara ara.mp3`),
event.threadID,event.messageID)};
  
};
module.exports.onStart = function({ message, api, event, client, envGlobal, __GLOBAL }) { }
