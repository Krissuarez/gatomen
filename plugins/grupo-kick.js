import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `${ag} ππππΌ ππππππππππΏπ ππ πΎπππΌππΏπ\n#on restrict | #off restrict\nππ/ππΌ ππππππππΌπππ(πΌ) πΏππ½π πΌπΎππππΌπ ππ πΎπππΌππΏπ\n\n πππππ ππππ πΌπΎππππΌππ πππ πΎππππΌππΏ\n#on restrict | #off restrict`
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res) 
await delay(1 * 1000)
if (command == 'kick') { 
conn.sendHydrated(m.chat, `πΌπ πππΏπ ππππΌπΏππΎπΌπΏπ(πΌ) πΏππ πππππ π`, wm, null, md, 'πππ©ππ½π€π©-ππΏ', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)
}

if (command == 'sacar') { 
conn.sendHydrated(m.chat, `πΌπ πππΏπ ππππΌπΏππΎπΌπΏπ(πΌ) πΏππ πππππ π`, wm, null, md, 'πππ©ππ½π€π©-ππΏ', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)
}
  
if (command == 'ban') { 
conn.sendHydrated(m.chat, `πΌπ πππΏπ ππππΌπΏππΎπΌπΏπ(πΌ) πΏππ πππππ π`, wm, null, md, 'πππ©ππ½π€π©-ππΏ', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)
}
}}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'sacar', 'ban'] ///^(kick|sacar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
//handler.premium = true

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


