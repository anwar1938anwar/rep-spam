const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("626517608174190615")
setInterval(function() {
channel.send(`!gstart 6h 1w 5k`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
