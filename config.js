const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="amitmishra301106gmail.com"
global.location="Uttar Pradesh, India."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://friday:#Sam@98167@friday.bhjapuo.mongodb.net/?retryWrites=true&w=majority&appName=Friday"
global.allowJids= process.env.ALLOW_JID || "true" 
global.blockJids= process.env.BLOCK_JID || "true"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://friday:#Sam@98167@friday.bhjapuo.mongodb.net/?retryWrites=true&w=majority&appName=Friday"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/mishiamit";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaeI0A17IUYM34elLG2V";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaeI0A17IUYM34elLG2V" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/mishiamit/Friday/blob/main/quriobot_favicon.1727b193.png" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Friday" 


global.devs = "919554785382" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919554785382";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,913xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,913xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "913184474176,913xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_28_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDk1LFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICA1LFxuICAgICAgICAxNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI5LFxuICAgICAgICA5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MCxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY2LFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInNIUkYxVDY1SWxXRjFiRjNnNEY4MUxSd1BQYUp6dVlxMG8xRDZjMlBFK1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NTU0Nzg1MzgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyODUwMkZCMjEwQjMzQ0Q3M0RCOEI4QzczMEQyMTJCRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0ODkzMDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk1NTQ3ODUzODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNBMjhCNDg2RjA4NDM0NjhFMUNFQUFEODhBQUUxM0FCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ4OTMwMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0R3dMYVRfblFhQ2hHUWpEYU10UlB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJiY2Y2YmUyLWU0YTAtNDZkNS1iOTZiLTc0YmM3MjAwYjkzY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICA5NSxcbiAgICAgIDE3LFxuICAgICAgMTcxLFxuICAgICAgMjQ0LFxuICAgICAgMTI3LFxuICAgICAgOTAsXG4gICAgICAxNjgsXG4gICAgICAyNTAsXG4gICAgICAyMDQsXG4gICAgICAxNzMsXG4gICAgICAxMzUsXG4gICAgICAxMjEsXG4gICAgICAxMjAsXG4gICAgICAyMzQsXG4gICAgICAyNTUsXG4gICAgICAxMDksXG4gICAgICAxMjEsXG4gICAgICA4NyxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDI0NixcbiAgICAgIDc4LFxuICAgICAgMzgsXG4gICAgICA3OCxcbiAgICAgIDM1LFxuICAgICAgMTQ4LFxuICAgICAgMTI5LFxuICAgICAgMTQ3LFxuICAgICAgMTAzLFxuICAgICAgMTE0LFxuICAgICAgMjM0LFxuICAgICAgMTIwLFxuICAgICAgMjQyLFxuICAgICAgMjIsXG4gICAgICAxNTgsXG4gICAgICAyNTIsXG4gICAgICAxMDUsXG4gICAgICAxMSxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCTEU3S1BNNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5NTU0Nzg1MzgyOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NTg0MjMwMTY5MDEwODoyN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCItQm90XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkRreWZRRkVJNnY3N1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFUW1CYk9EcDJhNU5QVk1TRmZINnE1M1QvYk9hblVoSi9NY3Z6V0UramdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlcyanhwTnpQVmpwZEZpOWxROGxBTVRYTWxvZXRYTktKb0Q4bGoyS013amVvOC9zRUxnQ2U2ZlV2TzlVT0JpRk1Sc2psa0lMZkthYjhNY2Z5SzdMTEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZaUVorM01MeFJZREwrQmVnWHBsU0JyZlJ2WWo3YUlabHkwWkVZdFVuRjk1WURPV013K3hGeTZpK0NWRWdPMWJQejlJclpYRS9HSTM1VXdPMGpBRUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTU1NDc4NTM4MjoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ4OTI5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1FeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUV5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibEdPc0tta1VIMy9GS0ExNWNYMEdGaVByS3I2cE9MV0RRNnFKNEhHZkFQOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTg2NjU1NzYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExMTk4NTYzMjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Mglobal.userImages Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```Friday```", //*Friday*\n https://youtube.com/@techbizz1718?si=bo3qjpzUFPv01SVa"),
 
  author : process.env.PACK_AUTHER|| "Friday",
  packname: process.env.PACK_NAME || "Friday",
  botname : process.env.BOT_NAME  || "Friday",
  ownername:process.env.OWNER_NAME|| "Amit",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-XrQ3W6vF6Uec5dxArvJTT3BlbkFJtzlZuQ6JXQd3j8LhNdSO",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-167f35af-f19f-4ace-8d00-6d90b0ee31e0",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
