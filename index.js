const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN6);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`👑 Roi des Paumés 👑`, { type: "STREAMING", url: "https://www.twitch.tv/gotagatv" })
})

