const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')
const moment = require("moment-timezone")
let setting = JSON.parse(fs.readFileSync('./setting.json'))
const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `Bot WhatsApp\nBy '𝆎𝐹𝒶𝒶𝒶𝓇ོ🍃`, 'jpegThumbnail': fs.readFileSync('./media/Farz.jpg')}}}
module.exports = welcome = async (farz, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await farz.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await farz.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add' && mem.includes(farz.user.jid)) {
            farz.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(farz.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await farz.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = farz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                teks = `*Hallo @${num.split('@')[0]}*
_Selamat datang di grup_
_*${mdata.subject}*_ `
	            buff = await getBuffer(pp_user)
		        farz.sendMessage(mdata.id, buff, MessageType.image, {thumbnail :buff,caption: teks, contextInfo: {"mentionedJid": [num]},quoted : fgc})
		}
            if (anu.action == 'remove' && !mem.includes(farz.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await farz.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = farz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `@${num.split('@')[0]} Keluar dari grup *${mdata.subject}* \nSelamat tinggal balik lagi titip gorengan yaa`
                buff = await getBuffer(pp_user)
                farz.sendMessage(mdata.id, buff, MessageType.image, {thumbnail :buff,caption: out, contextInfo: {"mentionedJid": [num]},quoted : fgc})
            }
            if (anu.action == 'promote' && !mem.includes(farz.user.jid)) {
                mdata = await farz.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = farz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                fah = `*PROMOTE - DETECTED*\n\n*Name* : @${num.split('@')[0]}\n*Time* : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n*Group* : ${mdata.subject}\n\n*Ciee Jadi Atmiin :v*`
                buff = await getBuffer(pp_user)
                farz.sendMessage(mdata.id, buff, MessageType.image, {thumbnail :buff,caption: fah, contextInfo: {"mentionedJid": [num]},quoted :fgc})
              }
if (anu.action == 'demote' && !mem.includes(farz.user.jid)) {
                mdata = await farz.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = farz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                hah = `*DEMOTE - DETECTED*\n\n*Name* : @${num.split('@')[0]}\n*Time* : _${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}_\n*Group* : _${mdata.subject}_\n\n*Awokwok Ter Demote :v*`
                buff = await getBuffer(pp_user)
                farz.sendMessage(mdata.id, buff, MessageType.image, {thumbnail :buff,caption: hah, contextInfo: {"mentionedJid": [num]},quoted :fgc})
               }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
