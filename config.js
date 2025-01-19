const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349134916433" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349134916433";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_17_17_01_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTksXG4gICAgICAgIDY0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia0d0d2k2QUMyUGZ5LzkwYUUrdzVDZDVxeEhYbWhmUHNvVjJsa0JQMTFrUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMHM3dlRrZExTa2VrRlpfVWZYVTRaQVwiLFxuICBcInBob25lSWRcIjogXCJjMWFlZDgyZi0wNmFlLTQ5MTgtYWRhMy05YTFhOGNhMDdiNDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMjQzLFxuICAgICAgMTE3LFxuICAgICAgMTEyLFxuICAgICAgODAsXG4gICAgICA3MixcbiAgICAgIDc2LFxuICAgICAgMixcbiAgICAgIDIyNSxcbiAgICAgIDIxNixcbiAgICAgIDE5MSxcbiAgICAgIDE5MSxcbiAgICAgIDIzMyxcbiAgICAgIDE2NSxcbiAgICAgIDE1NCxcbiAgICAgIDI1MCxcbiAgICAgIDIyNixcbiAgICAgIDQ5LFxuICAgICAgMTg0LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAxMDYsXG4gICAgICAyMzEsXG4gICAgICAxNTgsXG4gICAgICAyMTYsXG4gICAgICA2NyxcbiAgICAgIDE1MCxcbiAgICAgIDgwLFxuICAgICAgMTc2LFxuICAgICAgMjIsXG4gICAgICAzNyxcbiAgICAgIDI1NCxcbiAgICAgIDEzOSxcbiAgICAgIDczLFxuICAgICAgMTMxLFxuICAgICAgMjAxLFxuICAgICAgMTM0LFxuICAgICAgMzMsXG4gICAgICA1OCxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU3TEo3UEpWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM0OTE2NDMzOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MzgyOTQyMTY3MDQ5OjE2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKYheW9oSggw5jisaDFglbJhuKxpCAp5b2h4piF8J+YjOKdpO+4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2UXBITVFpZWUwdkFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV1ZyRHJoNWdUbGxDckRhbUtKM3VxMS9UaldJWXBMSDlxRTdIYmlsZjFTVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUZTYwbjdXMERRbW41UjJwMEErR0ViMVRxc1N6RStCRmZac240MGxFa1dSZm5ocER3VmdaSVF0TnhQdVVnbzdaTERSOWYwbFUxblVSdkUrVVdqWkxDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpSWlVU2JIQzBrQ05jTzNLUlRUcExnbCsvaWVrdlRWNW00bXB2NEhnYzJIMkk0eGdvdFJiNm9CVmtxcWp3RFgxWlZUMUE5NE80NkxzUnJJbVlSSmdEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM0OTE2NDMzOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzczMDcwMjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOdFpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU50Wi5qc29uIjogIntcImtleURhdGFcIjpcIm9KZUlZcGZyNFRXV2ZOZUxBeWVBVzJxcVNmKzdubklsM3BjWnJKQXl2azg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQxNzcyNTcxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzczMDcwMjUwMjdcIn0iCn0=  "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "★彡( ØⱠłVɆⱤ )彡★😌❤️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
