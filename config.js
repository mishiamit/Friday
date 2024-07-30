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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_20_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA2NCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDc1LFxuICAgICAgICA5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMixcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICA4MCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyL2NzSHJ1TnVncndZd2w5NDVHRWNlbE4zZzFOQ0o0QlROUG1TRUlDaHgwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTU1NDc4NTM4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUFDQzQzMUQ1ODY1OTVCQjBENUY1RjM4RTBFNTc3OEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODkyMDMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NTU0Nzg1MzgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNjM4RDREMTg4NTkwMzU3ODkyMjRENkUyMzVEMkUxMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4OTIwMzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNUppUlE4bWVUWWFtOWNPZEFZTGJlQVwiLFxuICBcInBob25lSWRcIjogXCJkYzdlZWQ3OC05NWY0LTQ5YmUtOWM5Yi05MjAzZDlmYWNlZDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDEsXG4gICAgICAxMDQsXG4gICAgICAzLFxuICAgICAgMjMxLFxuICAgICAgODMsXG4gICAgICAyMzUsXG4gICAgICAxMzcsXG4gICAgICAyMzcsXG4gICAgICAyMjgsXG4gICAgICAyNTAsXG4gICAgICAyMTQsXG4gICAgICAxNTksXG4gICAgICAxMTQsXG4gICAgICAxNDUsXG4gICAgICA5NixcbiAgICAgIDIwOSxcbiAgICAgIDE0NyxcbiAgICAgIDQxLFxuICAgICAgNTMsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAxNzEsXG4gICAgICAyMTQsXG4gICAgICA1NSxcbiAgICAgIDgsXG4gICAgICA2MyxcbiAgICAgIDk5LFxuICAgICAgMTUxLFxuICAgICAgNDEsXG4gICAgICA2NSxcbiAgICAgIDY5LFxuICAgICAgMTI2LFxuICAgICAgMjA1LFxuICAgICAgNjEsXG4gICAgICA5MSxcbiAgICAgIDE1LFxuICAgICAgNyxcbiAgICAgIDExMixcbiAgICAgIDE3MyxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLV0VHQ0Q4NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5NTU0Nzg1MzgyOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NTg0MjMwMTY5MDEwODozMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGcmlkYXlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKVGt5ZlFGRUx2NWg3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVRbUJiT0RwMmE1TlBWTVNGZkg2cTUzVC9iT2FuVWhKL01jdnpXRStqZ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR2I3UmNKUXFBdTBDOHhva2IwSDRJcEZaSDdOS3hyY2lERlJrWm1PUFIrUm9QaE9wSTBNbVhDT0VPTHhtWnVCTVhUSnBMRUE3V3RnT2hJSjhQb0tsQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT2p5aXdFRUpiWmNRd2hrYzZHSWJ0UlVEb2ZBSE00K1o1RVdvbVVYT291ODhGUmh6WjZmQVhuajlDZzdDZFBuckVvTVRLQ29FNjlzRTE0bFBSN21xZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NTU0Nzg1MzgyOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODkyMDMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUUzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRTMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZWGhLQ2hvZVp0UlJtNGljUEhvZVZtTk13ZWhhNEVKOUlKeGx6WnJNMmhRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODY2NTU3NjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTg5MjAzMzEwM1wifSIKfQ=="  // PUT your SESSION_ID 


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
