const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("626737836011290637")
setInterval(function() {
channel.send(`C`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
