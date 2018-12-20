const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("525413699176103978")
setInterval(function() {
channel.send(`AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED  AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED AHMED`);
}, 30)
})

client.login(process.env.BOT_TOKEN);