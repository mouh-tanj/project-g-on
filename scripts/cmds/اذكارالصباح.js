module.exports.config = {
		name: "اذكارالصباح",
		version: "1.4",
		author: "محمد تانجيرو",
		countDown: 5,
		role: 0,
		description: {
			ar: "ترسل أذكار الصباح، كل ذكر مفصول عن التاني بفاصل زمني"
		},
		category: "box chat",
		guide: {
			ar: "{pn}"
		}
	},

module.exports.onStart = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("🌹 آية الكرسي مرة واحدة 🌹\n\n🌹 سـورة الإخـلاص، الفـلـق،\n   الناس 3 مرات لكل سورة 🌹");
setTimeout(() => {a({body: "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله،\nوَالحَـمـدُ للـه، لا إلـهَ إلاّ اللّـهُ\nوَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ\nولـهُ الحَـمْـد، وهُـوَ علـى كلّ\nشَيءٍ قدير، رَبِّ أسْأَلُـكَ خَيرَ\nمـا في هـذا اليوم وَخَـيرَ مـا\nبَعْـدَه، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما\nفي هـذا اليوم وَشَرِّ ما بَعْـدَه،\nرَبِّ أَعوذُ بِكَ مِنَ الْكَسَلِ وَسوءِ\nالْكِبَر، رَبِّ أَعوذُ بِكَ مِنْ عَذابٍ\nفـي النّـارِ وَعَـذابٍ في القَـبْر.\n ༺ا-🌹━━♡━━🌹-ا༻  \n\n  🌹✨ مرة واحدة ✨🌹  "})}, 10000);
setTimeout(() => {a({body: "اللّهُمَّ بِكَ أَصـبَحْنا وَبِكَ أَمْسَينا،\nوَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ\nالنُّـشُــور.\n\nاللّهُـمَّ ما أَصْبَـَحَ بي مِنْ نِعْمَةٍ أَو\nبِأَحَدٍ مِـنْ خَلْقِك، فَمِـنْكَ وَحْدَكَ\nلا شريكَ لَـك، فَلَـكَ الْحَمْدُ وَلَـكَ\nالشُّـكْـــر.\n  ༺ا-🌹━━♡━━🌹-ا༻  \n\n  🌹✨ مرة واحدة ✨🌹  " })}, 20000);
setTimeout(() => {a({body: "اللّهـمَّ أَنْتَ رَبِّـي لا إلـهَ إلاّ أَنْتَ،\nخَلَقْتَنـي وَأَنا عَبْـدُك، وَأَنا عَلـى\nعَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت،\nأَعـوذُ بِـكَ مِـنْ شَـرِّ ما صَنَـعْت،\nأَبـوءُ لَكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ\nبِذَنْبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ\nالذُّنـوبَ إِلاّ أَنْتَ.\n ༺ا-🌹━━♡━━🌹-ا༻ \n\n  🌹✨ مرة واحدة ✨🌹" })}, 30000);
setTimeout(() => {a({body: "اللّهُمَّ إِنِّي أسْأَلُكَ العَفْوَ وَالعافِيةَ\nفي الدُّنْـيا وَالآخِـرَة، اللّهُـمَّ إِنِّي\nأسْأَلُكَ العَفْوَ وَالعافِيةَ في ديني\nوَدُنْـيايَ وَأهْـلي وَمالـي، اللّهُـمَّ\nاسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي،\nاللّهُـمَّ احْفَظْـني مِـن بَـينِ يَدَيَّ\nوَمِن خَلْفـي وَعَن يَمـيني وَعَن\nشِمـالي، وَمِـن فَوْقـي، وَأَعـوذُ\nبِعَظَمَتِكَ أَن أُغْـتالَ مِن تَحْتي.\n ༺ا-🌹━━♡━━🌹-ا༻ \n\n  🌹✨ مرة واحدة ✨🌹  " })}, 40000);
setTimeout(() => {a({body: "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ\nفاطِـرَ السّماواتِ وَالأرْضِ رَبَّ\nكـلِّ شَـيءٍ وَمَليـكَه، أَشْهَـدُ أَنْ\nلا إِلـهَ إِلاّ أَنْـت، أَعـوذُ بِـكَ مِـن\nشَرِّ نَفْسي وَمِن شَرِّ الشَّيْطانِ وَ\nشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلى نَفْسي\nسـوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِـم.\n ༺ا-🌹━━♡━━🌹-ا༻ \n\n  🌹✨ مرة واحدة ✨🌹  " })}, 50000);
setTimeout(() => {a({body: "يَـا حَـيُّ يَـا قـيُّـومُ بِـرَحْـمَـتِـكَ\nأسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَ\nلاَ تَكِلْنِي إلَى نَفْسِي طَرْفَةَ عَيْنٍ.\n\nأَصْبَحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَ\nعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ\nنَبِيِّـنَـا مُحَمَّـدٍ صَلَّـى اللـهُ عَلَيْـهِ\nوَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ\nحَـنِيـفـاً مُسْـلِـماً وَمَـا كَـانَ مِـنَ\nالمُشْرِكِينَ.\n ༺ا-🌹━━♡━━🌹-ا༻ \n\n  🌹✨ مرة واحدة ✨🌹  " })}, 60000);
setTimeout(() => {a({body: "اللَّهُـمَّ إِنِّـي أَسْـأَلُكَ عِلْمًا نَافِعًـا،\nوَرِزْقًـا طَـيِّبًا، وَعَمَـلًا مُتَـقَبَّـلًا.\n\nأصْبَـحْـنا وَأَصْبَـحْ المُـلـكُ للـهِ\nرَبِّ العالَمين، اللّهُمَّ إِنِّي أسْأَلُكَ\nخَيْرَ هذا الـيَوْم؛ فَتْحَهُ وَنَصْرَهُ\nوَنـورَهُ وَبَـرَكَتَـهُ وَهُداهُ، وَأَعوذُ\nبِكَ مِنْ شَرِّ ما فيهِ وَشَرِّ ما بَعْدَه\n ༺ا-🌹━━♡━━🌹-ا༻ \n\n  🌹✨ مرة واحدة ✨🌹  " })}, 70000);
setTimeout(() => {a({body: "اللّـهُــمَّ عـافِــني فـي بَــدَنــي،\nاللّـهُــمَّ عـافِــني في سَـمْــعي،\nاللّـهُــمَّ عـافِــني فـي بَـصَــري،\nلا إلـهَ إلاّ أَنْتَ، اللّهُـمَّ إِنّي أَعوذُ\nبِكَ مِنَ الْكُفر وَالفَقْر، وَأَعوذُ بِكَ\nمِنْ عَذابِ القَبْر، لا إلـهَ إلاّ أَنْتَ.\n\nبِـســمِ اللـهِ الـذي لا يَـضُـرُّ مَـعَ\nاسمِهِ شَيءٌ في الأرْضِ وَلا في\nالسّماءِ وَهـوَ السّـمـيعُ العَـلـيم.\n\nرَضـيـتُ بِالـلـهِ رَبَّـاً وَبِـالإسْـلامِ\nديـناً وَبِمُحَـمَّـدٍ صلى الله عليـه\nوسـلـم نَـبِـيّــاً. \n\nسُـبْـحـانَ اللـهِ وَبِحَـمْـدِهِ، عَدَدَ\nخَـلْـقِـه، وَرِضـا نَـفْـسِـه، وَزِنَـةَ\nعَـرْشِـه، وَمِـدادَ كَـلِمـاتِـه.\n ༺ا-🌹━━♡━━🌹-ا༻ \n\n    🌹✨ 3 مرات ✨🌹    " })}, 80000);
setTimeout(() => {a({body: "اللّهُـمَّ إِنِّي أَصْبَحْتُ أُشْهِـدُك،\nوَأُشْـهِــدُ حَـمَـلَــةَ عَـرْشِــك، \nوَمَلَائِكَتَكَ، وَجَمـيعَ خَلْـقِك،\nأَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ\nوَحْـدَكَ لا شَريـكَ لَـك ، وَأَنَّ\nمُـحَـمّـداً عَـبْـدُكَ وَرَسـولُـك.\n༺ا-🌹━━♡━━🌹-ا༻\n\n   🌹✨ 4 مرات ✨🌹   " })}, 90000);
setTimeout(() => {a({body: "حَسْبِـيَ اللّـهُ لا إلـهَ إلاّ هُوَ عَلَـيهِ\nتَوَكَّلتُ وَهُوَ رَبُّ العَرْشِ العَظيم.\n ༺ا-🌹━━♡━━🌹-ا༻ \n\n    🌹✨ 7 مرات ✨🌹   " })}, 100000);
setTimeout(() => {a({body: "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ\nلَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُـوَ\nعَـلَـى كُـلِّ شَـيْءِ قَـدِيـرِ.\n༺ا-🌹━━♡━━🌹-ا༻\n\n  🌹✨ 10 مرة ✨🌹  " })}, 110000);
setTimeout(() => {a({body: "سُـبْـحــانَ اللــهِ وَبِـحَــمْـدِهِ،\n\nأسْتَــغْفِـرُ اللــهَ وَأتُـوبُ إلَيْـهِ،\n\nلَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ\nلَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُـوَ\nعَـلَـى كُـلِّ شَـيْءِ قَـدِيـرِ.\n༺ا-🌹━━♡━━🌹-ا༻\n\n 🌹✨ 100 مرة ✨🌹 " })}, 120000);
setTimeout(() => {a({body: "الـلَّـهُـــمَّ صَــلِّ وَسَـلِّـــمْ\nعـلــى نَـبِـيِّــنَـا مُـحـمَّـد.\n༺ا-🌹━♡━🌹-ا༻\n\n🌹✨ 10 مرات ✨🌹" })}, 130000);
     }
