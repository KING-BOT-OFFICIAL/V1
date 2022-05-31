const Trex  = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({

    token: config.HEROKU.API_KEY
});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 

const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')

const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');

const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi({

    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'

});

const Language = require('../language');
const Lang = Language.getString('scrapers');


var dlang_dsc = ''
var closer_res = ''
var dlang_lang = ''
var dlang_similarity = ''
var dlang_other = ''
var dlang_input = ''


if (config.LANG == 'EN') {

    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'

}

if (config.LANG == 'SI') {

    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'

}

    Trex.addrex({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,'‍‍🙇‍️ NEED WORD 🙇‍',MessageType.text);

        let arama = await yts(match[1]);

        arama = arama.all;

        if(arama.length < 1) return await message.client.sendMessage(message.jid, '🙇‍♂️ ‍NOT FOUND 🙇‍♂️,MessageType.text);

        var reply = await message.client.sendMessage(message.jid,`[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] 𝙸𝚂 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙳 𝚈𝙾𝚄𝚁 𝚂𝙾𝙽𝙶  ✨➾🔎࿐`,MessageType.text);

        let title = arama[0].title.replace(' ', '+');

        let stream = ytdl(arama[0].videoId, {

            quality: 'highestaudio',

        });

    

        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));

        ffmpeg(stream)

            .audioBitrate(320)

            .save('./' + title + '.mp3')

            .on('end', async () => {

                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));

                writer.setFrame('TIT2', arama[0].title)

                    .setFrame('TPE1', [arama[0].author.name])

                    .setFrame('APIC', {

                        type: 3,

                        data: fs.readFileSync(title + '.jpg'),

                        description: arama[0].description

                    });

                writer.addTag();

                reply = await message.client.sendMessage(message.jid,fs.readFileSync('./' + title + '.jpg'), MessageType.image, { caption: '\n\n❑ ᴛɪᴛʟᴇ :\n'+ title + ' \n❑ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ : Youtube\n❑ ꜰɪʟᴇ ᴛʏᴘᴇ : MP3 Audio\n\n\n '+'</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ '+'\n' });
                reply = await message.client.sendMessage(message.jid,`[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] 𝙸𝚂 𝚄𝙿𝙻𝙾𝙰𝙳𝙸𝙽𝙳 𝚈𝙾𝚄𝚁 𝚂𝙾𝙽𝙶  ✨➾🎲`,MessageType.text);

                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 2, isForwarded: false }, quoted: message.data, ptt: false});

            });

            

    }));