import translate from 'translate-google-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {

if (command == 'consejo') {
let letra = 'https://mysuenos.com/wp-content/uploads/2019/10/trebol.jpg'
let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
let texto = `
*╭━━━・☘️・━━━━━・☘️・━━━⬣*

*ღ ${frase1}*

*╰━━━・☘️・━━━━━・☘️・━━━⬣*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🍃 𝙉𝙪𝙚𝙫𝙤 𝘾𝙤𝙣𝙨𝙚𝙟𝙤 | 𝙉𝙚𝙬 𝘾𝙤𝙪𝙣𝙘𝙞𝙡', `${usedPrefix + command}`],
['🌟 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', '.consejo2'],
['⚡ 𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)}
  
if (command == 'consejo2') {
let letra = 'https://mysuenos.com/wp-content/uploads/2019/10/trebol.jpg'
let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'en' })
let texto = `
*╭━━━・☘️・━━━━━・☘️・━━━⬣*

*ღ ${frase1}*

*╰━━━・☘️・━━━━━・☘️・━━━⬣*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🍃 𝙉𝙪𝙚𝙫𝙤 𝘾𝙤𝙣𝙨𝙚𝙟𝙤 | 𝙉𝙚𝙬 𝘾𝙤𝙪𝙣𝙘𝙞𝙡', `${usedPrefix + command}`],
['🌟 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', '.consejo'],
['⚡ 𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)}
  

if (command == 'fraseromantica') {
let letra = 'https://www.tuexpertoapps.com/wp-content/uploads/2019/02/san-valentin-apps-01.jpg.webp'
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
let texto = `
*╭━━━・✨・━━━━━・✨・━━━⬣*

*ღ ${frase1}*

*╰━━━・✨・━━━━━・✨・━━━⬣*`
//m.reply(`
//*╭━━━━━━━━━⬣*
//*ღ ${frase1}*
//*╰━━━━━━━━━⬣*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🌸 𝙉𝙪𝙚𝙫𝙖 𝙁𝙧𝙖𝙨𝙚 | 𝙉𝙚𝙬 𝙋𝙝𝙧𝙖𝙨𝙚', `${usedPrefix + command}`],
['🍁 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', '.fraseromantica2'],
['⚡ 𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)}
  
if (command == 'fraseromantica2') {
let letra = 'https://www.tuexpertoapps.com/wp-content/uploads/2019/02/san-valentin-apps-01.jpg.webp'
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'en' })
let texto = `
*╭━━━・✨・━━━━━・✨・━━━⬣*

*ღ ${frase1}*

*╰━━━・✨・━━━━━・✨・━━━⬣*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🌸 𝙉𝙪𝙚𝙫𝙖 𝙁𝙧𝙖𝙨𝙚 | 𝙉𝙚𝙬 𝙋𝙝𝙧𝙖𝙨𝙚', `${usedPrefix + command}`],
['🍁 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', '.fraseromantica'],
['⚡ 𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)}
  

if (command == 'historia') {
let res = await fetch("https://api-xcoders.xyz/api/random/cerpen/cinta?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
const tld = 'cn'
let storytime = await translate(`${story}`, { tld, to: 'es' })
let titletime = await translate(`${title}`, { tld, to: 'es' })
conn.reply(m.chat, `
💗 *Título: ${titletime}*
💗 *Autor(a): ${author_name}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📖 *${storytime}*`, m)}
}
handler.tags = ['frases']
handler.command = handler.help = ['consejo', 'consejo2', 'fraseromantica', 'fraseromantica2', 'historia']
export default handler