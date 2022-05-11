

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

const all = `\n\n\n💠️ 𝙶𝙸𝚃𝙷𝚄𝙱 𝙻𝙸𝙽𝙺 ↣ https://github.com/KING-BOT-OFFICIAL/KING-BOT\n\n💠 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 ↣ \n\n💠 𝙾𝚆𝙽𝙴𝚁 𝙽𝚄𝙼𝙱𝙴𝚁 ↣ https://wa.me/94729352830`

const about  = `\n\n\n🔹 𝙽𝙰𝙼𝙴 ↠ [🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘]\𝚗🔹𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 ↠ ᴡʜɪᴛᴇ ʜᴀᴄᴋᴇʀꜱ\𝚗🔹 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 ↠ 1.0.0 ᴘᴜʙʟɪᴄ\𝚗🔹 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 ↠ ꜱɪɴʜᴀʟᴀ & ᴇɴɢʟɪꜱʜ\𝚗🔹 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 ↠ ɴᴏᴅᴇ.ᴊꜱ`

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
    contentText: "  ```🙋Hey There! I'm Online now📶️️```\n\n⚜️ My name : [🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘]️\n\n ⚜️ Developer: White hackers\n\n⚜️ Thank You For Using [🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘]",
    footerText: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
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
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: Config.ALIVEMSG + "\n\n Thank you for using [🇱🇰𝙺𝙸𝙽𝙶 𝙱𝙾𝚃🤘]️",
    footerText: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
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
                `\n\n🍁 Check github for bot: `
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
        
        
        var logo = await axios.get (`https://telegra.ph/file/d85f2c2806053601295e9.jpg`, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '😈 HACKER ⚜️'+hacker}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '⚕️ PROGRAMMER 😎'+programmer}, type: 1},
  {buttonId: 'MEHN', buttonText: {displayText: '⚕️ OTHER 😌'+other}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "```Hey There! I'm Online now. ⚜️```\n\n⚕️ My name : ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️\n\n ⚜️ Developer: HIRUWA\n\n⚜️ Thank You For Using ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️\n\n  WHAT IS YOUR AMBITION 😎⚜️",
    footerText: 'BY ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️ ▷',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}

            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
      //  await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. ⚜️```\n\n⚕️ My name : ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️\n\n ⚜️ Developer: HIRUWA\n\n⚜️ Thank You For Using ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
    
    var logo = await axios.get (Config.AL, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })


        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '😈 HACKER ⚜️'+hacker}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: '⚕️ PROGRAMMER 😎'+programmer}, type: 1},
  {buttonId: 'MEHN', buttonText: {displayText: '⚕️ OTHER 😌'+other}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText:  Config.ALIVEMSG + "\n\n\nWHAT IS YOUR AMBITION 😎⚜️",
    footerText: 'BY ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️▷',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        //await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️*' })
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
                `*⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️*\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 - Public'+
                `\n\n🍁 Check github for bot:  `
           , MessageType.text);
            
        }));
}