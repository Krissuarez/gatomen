let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙻𝙸𝙽𝙺 𝙴𝚁𝚁𝙾𝙽𝙴𝙾 𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n*👉🏻 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*#join https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC*\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴, 𝙿𝚄𝙴𝙳𝙴 𝙲𝙰𝚄𝚂𝙰𝚁 𝙸𝙽𝚃𝙴𝚁𝙵𝙴𝚁𝙴𝙽𝙲𝙸𝙰, 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝙻𝙾 𝚄𝙽𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙲𝙾𝙼𝙾 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙽𝚄𝙴𝚅𝙾*'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}╭══•───────────────•══╮\n┃ 📧 *𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝙐𝘿 𝙋𝘼𝙍𝘼 𝙐𝙉 𝙂𝙍𝙐𝙋𝙊*\n┃ 📧 *𝙂𝙍𝙊𝙐𝙋 𝙍𝙀𝙌𝙐𝙀𝙎𝙏*\n╰══•───────────────•══╯\n\n*👤 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝙉𝙏𝙀 | 𝘼𝙋𝙋𝙇𝙄𝘾𝘼𝙉𝙏*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 | 𝙂𝙍𝙊𝙐𝙋 𝙇𝙄𝙉𝙆*\n ' + link, jid)

throw m.reply(`${ag}*✅ Su enlace se envió a Mí Propietario(a).*\n*Your link was sent to My Owner.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *Su Grupo será Evaluado y Quedará a decisión de Mí Propietario(a) si ${gt} se une o no al Grupo.*\n*Your Group will be Evaluated and it will be up to My Owner if ${gt} joins the Group or not.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *Es posible que su Solicitud sea Rechazada por las siguientes Causas:*\n*Your Application may be Rejected for the following Reasons:*\n*1️⃣ El Bot está Saturado.*\n*The Bot is Saturated.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *El Bot fue eliminado del Grupo.*\n*The Bot was removed from the Group.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *El Grupo no cumple con las Normativas de ${gt}*\n*The Group does not comply with the Regulations of ${gt}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *El enlace del grupo se restableció.*\n*The group link was restored.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *No se agrega a Grupos según Mi Propietario(a).*\n*Not added to Groups by My Owner*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*\n*The request may take hours to be answered. Please be patient. Thank you*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^unete|join|nuevogrupo$/i
export default handler
