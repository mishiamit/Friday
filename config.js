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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "917018274372";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_26_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQzLFxuICAgICAgICA0LFxuICAgICAgICA2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU3LFxuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQxLFxuICAgICAgICA4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM1LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRTlkMS9qZmk3VkJyK2krM2NvblNpd285M1Nsd1VPR1ZETEN5VC9Hc2Ewaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk1NTQ3ODUzODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA0RkEzRDNBQzM1Rjg0N0Q0RjYwNzcyMzNFRDAzQkY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY0ODM1OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTU1NDc4NTM4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODU0MkQ3QTQwMEFBRERGREY0OUNBQUJBRDY1Mjg2OEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjQ4MzU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhqTU9YalZsVGNpTzdSRjducVlydXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWNlZTZjMTctN2EwZS00YWJjLThkNWItZTA5ZmFmODJlMDdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDExNSxcbiAgICAgIDE3OSxcbiAgICAgIDE3LFxuICAgICAgMzUsXG4gICAgICAyNTEsXG4gICAgICAxMjcsXG4gICAgICA0MSxcbiAgICAgIDIzNCxcbiAgICAgIDc3LFxuICAgICAgMTY0LFxuICAgICAgMTEyLFxuICAgICAgMTAsXG4gICAgICA1MCxcbiAgICAgIDEwNixcbiAgICAgIDM0LFxuICAgICAgMTM0LFxuICAgICAgMjI2LFxuICAgICAgMTQyLFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICA2MixcbiAgICAgIDEzMyxcbiAgICAgIDgzLFxuICAgICAgMjIyLFxuICAgICAgMTE3LFxuICAgICAgNzIsXG4gICAgICA2MSxcbiAgICAgIDI1NSxcbiAgICAgIDI3LFxuICAgICAgMTYsXG4gICAgICAxOTIsXG4gICAgICAyMjMsXG4gICAgICAxNjYsXG4gICAgICAxMjUsXG4gICAgICA5MSxcbiAgICAgIDE1OSxcbiAgICAgIDE0OCxcbiAgICAgIDI4LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0VMVzhLNVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTU1NDc4NTM4MjozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjU4NDIzMDE2OTAxMDg6MzNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRnJpZGF5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlhreWZRRkVKMk90clVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFUW1CYk9EcDJhNU5QVk1TRmZINnE1M1QvYk9hblVoSi9NY3Z6V0UramdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImltaHEyMUdvWnErWktqSTZ1UGJCVzFSc1RYZDVyYVhEMGNkdENkcTFHbzQvK1QwUkY2NjN6aGxiY01WVjFpUEhIeWxiRXJ1TEFUZDBNR0NlMFFXT0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJhaFV0TEZTTjVLek9jN1RZSmE5RFpJaW5HcG95ay84N2JXd3pwbGZieU44UDhKRzE3VmxpVVNpYm5vS3ZWWU95WFVzYlp2cjZ0QWVCckRjYnFRM2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTU1NDc4NTM4MjozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY0ODM1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1FN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUU3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSkJseGliWHhlMmdRZmZENkkyVS91TmhxSlZPdDhNSDlKMENHV3dyUFdFWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTg2NjU1NzY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2NDgzNTg1NzFcIn0iCn0="  // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "FRIDAY"  ).toUpperCase(),



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
