

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

const all = `\n\n\n💠️ 𝙶𝙸𝚃𝙷𝚄𝙱 𝙻𝙸𝙽𝙺 ↣ https://github.com/KING-BOT-OFFICIAL/KING-BOT \n\n💠 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 ↣ \n\n 💠 𝙾𝚆𝙽𝙴𝚁 𝙽𝚄𝙼𝙱𝙴𝚁 ↣ https://wa.me/94729352830`

const about  = `\n\n\n🔹 𝙽𝙰𝙼𝙴 ↠ [🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘] \𝚗🔹𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 ↠ ᴡʜɪᴛᴇ ʜᴀᴄᴋᴇʀꜱ \𝚗🔹 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 ↠ 1.0.0 ᴘᴜʙʟɪᴄ \𝚗🔹 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 ↠ ꜱɪɴʜᴀʟᴀ & ᴇɴɢʟɪꜱʜ \𝚗🔹 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 ↠ ɴᴏᴅᴇ.ᴊꜱ`

const owner = `\n\n\n️`

if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
        
        var logo = await axios.get (`https://telegra.ph/file/24b9b8507613125d34bd1.jpg`, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '️⚜️ BOT LINKS ⚜️'+all}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '📛 BOT ABOUT 📛'+about}, type: 1},
  {buttonId: 'MEHN', buttonText: {displayText: '😈 CONTACT OWNER 🤘'+owner}, type: 1},
 ]

const btn = {
    contentText: "┌─────────────┐\n│       𝙷𝙸 𝚃𝙷𝙴𝚁𝙴,     │\n│  °•ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ•°  │\n└─────────────┘\n\n\n📌හලෝ කට්ටිය මම මේ වෙලාවේ ᴀʟɪᴠᴇ බම්.\n📌පහල තියෙන ටික කියවලා බලන්න.\n📌නැත්තන් ඔයාට ඕන දෙය එන්න දාලා කියවන්න.\n\n😀ɢᴏᴏᴅ ʟᴜᴄᴋ✌️\n\n\n📌 𝙸 𝚊𝚖 *𒀽᭕￭ᴋᷜɪͥɴᷠɢᷚ￭᭄𒀽* 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚄𝚜𝚎𝚛 𝙱𝚘𝚝 V1.0.0\n\n📌 𝙺𝚒𝚗𝚐 𝙱𝚘𝚝 𝙸𝚜 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚍 𝙱𝚢 𝚆𝙷𝙸𝚃𝙴 𝙷𝙰𝙲𝙺𝙴𝚁𝚂.\n\n\n\n💢𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐒𝐔𝐏𝐏𝐎𝐑𝐓💢\n\n🎲 𝙶𝙸𝚃𝙷𝚄𝙱 𝙿𝙰𝙶𝙴 ➙ https://github.com/nethsaragimhan/king-bot\n\n🎲 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 ➙ https://youtube.com/channel/UCgwWV1Cya4_gUFKYOQYQtHw\n\n🎲 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿 ➙ https://chat.whatsapp.com/FxRkE50toG4KtC8p9703PY\n\n🎲 𝚃𝙰𝙻𝙴𝙶𝚁𝙰𝙼 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 𝙶𝚁𝙾𝚄𝙿 ➙ https://t.me/kingwabotsupport\n\n🎲 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝚁 𝙸𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ➙ https://wa.me/94729352830\n\n\n\n♦️දැන් මේක කියෙව්වා ඇති.😊\n♦️තාම [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️] පණපිටින් ඉන්නවා.💝\n♦️ගන්න ඕන දෙයක් ගන්න.✌️ \n♦️Command ටික දන්නෙ නැත්තන් ```.menu``` දාන්න.🤗\n\n\n\n    🔥ᴋɪɴɢ ʙᴏᴛ භාවිතය ගැන ස්තූතියි.🔥\n\n      🔰 ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ 🔰",
    footerText: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}

            
            
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
    
    var logo = await axios.get (Config.AL , { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '⚜️ BOT LINKS ⚜️'+all}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '📛 BOT ABOUT 📛'+about}, type: 1},
  {buttonId: 'MEHN', buttonText: {displayText: '😈 CONTACT OWNER 🤘'+owner}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/24b9b8507613125d34bd1.jpg',
    contentText: Config.ALIVEMSG + "\n\n Thank you for using [🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘]️",
    footerText: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
      //  await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*️Thank you for Using [🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘]*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*[🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘]️*\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 Public'+
                `\n\n🍁 Check github for bot :- https://github.com/KING-BOT-OFFICIAL/KING-BOT`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
        
        
        var logo = await axios.get (`https://telegra.ph/file/24b9b8507613125d34bd1.jpg`, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '⚜️ BOT LINKS ⚜️'+all}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '📛 BOT ABOUT 📛'+about}, type: 1},
  {buttonId: 'MEHN', buttonText: {displayText: '😈 CONTACT OWNER 🤘'+owner}, type: 1},
  ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "┌─────────────┐\n│       𝙷𝙸 𝚃𝙷𝙴𝚁𝙴,     │\n│  °•ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ•°  │\n└─────────────┘\n\n\n📌හලෝ කට්ටිය මම මේ වෙලාවේ ᴀʟɪᴠᴇ බම්.\n📌පහල තියෙන ටික කියවලා බලන්න.\n📌නැත්තන් ඔයාට ඕන දෙය එන්න දාලා කියවන්න.\n\n😀ɢᴏᴏᴅ ʟᴜᴄᴋ✌️\n\n\n📌 𝙸 𝚊𝚖 *𒀽᭕￭ᴋᷜɪͥɴᷠɢᷚ￭᭄𒀽* 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚄𝚜𝚎𝚛 𝙱𝚘𝚝 V1.0.0\n\n📌 𝙺𝚒𝚗𝚐 𝙱𝚘𝚝 𝙸𝚜 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚍 𝙱𝚢 𝚆𝙷𝙸𝚃𝙴 𝙷𝙰𝙲𝙺𝙴𝚁𝚂.\n\n\n\n💢𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐒𝐔𝐏𝐏𝐎𝐑𝐓💢\n\n🎲 𝙶𝙸𝚃𝙷𝚄𝙱 𝙿𝙰𝙶𝙴 ➙ https://github.com/nethsaragimhan/king-bot\n\n🎲 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 ➙ https://youtube.com/channel/UCgwWV1Cya4_gUFKYOQYQtHw\n\n🎲 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿 ➙ https://chat.whatsapp.com/FxRkE50toG4KtC8p9703PY\n\n🎲 𝚃𝙰𝙻𝙴𝙶𝚁𝙰𝙼 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 𝙶𝚁𝙾𝚄𝙿 ➙ https://t.me/kingwabotsupport\n\n🎲 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝚁 𝙸𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ➙ https://wa.me/94729352830\n\n\n\n♦️දැන් මේක කියෙව්වා ඇති.😊\n♦️තාම [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️] පණපිටින් ඉන්නවා.💝\n♦️ගන්න ඕන දෙයක් ගන්න.✌️ \n♦️Command ටික දන්නෙ නැත්තන් ```.menu``` දාන්න.🤗\n\n\n\n    🔥ᴋɪɴɢ ʙᴏᴛ භාවිතය ගැන ස්තූතියි.🔥\n\n      🔰 ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ 🔰",
    footerText: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}

            
            var image = await axios.get ('https://telegra.ph/file/24b9b8507613125d34bd1.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
      //  await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "┌─────────────┐\n│       𝙷𝙸 𝚃𝙷𝙴𝚁𝙴,     │\n│  °•ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ•°  │\n└─────────────┘\n\n\n📌හලෝ කට්ටිය මම මේ වෙලාවේ ᴀʟɪᴠᴇ බම්.\n📌පහල තියෙන ටික කියවලා බලන්න.\n📌නැත්තන් ඔයාට ඕන දෙය එන්න දාලා කියවන්න.\n\n😀ɢᴏᴏᴅ ʟᴜᴄᴋ✌️\n\n\n📌 𝙸 𝚊𝚖 *𒀽᭕￭ᴋᷜɪͥɴᷠɢᷚ￭᭄𒀽* 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚄𝚜𝚎𝚛 𝙱𝚘𝚝 V1.0.0\n\n📌 𝙺𝚒𝚗𝚐 𝙱𝚘𝚝 𝙸𝚜 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚍 𝙱𝚢 𝚆𝙷𝙸𝚃𝙴 𝙷𝙰𝙲𝙺𝙴𝚁𝚂.\n\n\n\n💢𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐒𝐔𝐏𝐏𝐎𝐑𝐓💢\n\n🎲 𝙶𝙸𝚃𝙷𝚄𝙱 𝙿𝙰𝙶𝙴 ➙ https://github.com/nethsaragimhan/king-bot\n\n🎲 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 ➙ https://youtube.com/channel/UCgwWV1Cya4_gUFKYOQYQtHw\n\n🎲 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿 ➙ https://chat.whatsapp.com/FxRkE50toG4KtC8p9703PY\n\n🎲 𝚃𝙰𝙻𝙴𝙶𝚁𝙰𝙼 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 𝙶𝚁𝙾𝚄𝙿 ➙ https://t.me/kingwabotsupport\n\n🎲 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝚁 𝙸𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ➙ https://wa.me/94729352830\n\n\n\n♦️දැන් මේක කියෙව්වා ඇති.😊\n♦️තාම [🇱🇰𝐊𝐢𝐧𝐠 𝐁𝐨𝐭✌️] පණපිටින් ඉන්නවා.💝\n♦️ගන්න ඕන දෙයක් ගන්න.✌️ \n♦️Command ටික දන්නෙ නැත්තන් ```.menu``` දාන්න.🤗\n\n\n\n    🔥ᴋɪɴɢ ʙᴏᴛ භාවිතය ගැන ස්තූතියි.🔥\n\n      🔰 ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ 🔰️"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
    
    var logo = await axios.get (Config.AL, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })


        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '⚜️ BOT LINKS ⚜️'+all}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '📛 BOT ABOUT 📛'+about}, type: 1},
  {buttonId: 'MEHN', buttonText: {displayText: '😈 CONTACT OWNER 🤘'+owner}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/24b9b8507613125d34bd1.jpg',
    contentText:  Config.ALIVEMSG + "\n\n\nThonk you for using [🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘].️",
    footerText: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        //await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*[🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘]*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*[🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘]️*\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 - Public'+
                `\n\n🍁 Check github for bot :- https://github.com/KING-BOT-OFFICIAL/KING-BOT  `
           , MessageType.text);
            
        }));
}
