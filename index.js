const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN6);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`J'ai ${client.guilds.size} serveurs`, { type: "STREAMING", url: "https://www.twitch.tv/gotagatv" })
})
client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`J'ai ${client.guilds.size} serveurs`, { type: "STREAMING", url: "https://www.twitch.tv/gotagatv" })
  });

  client.on("guildDelete", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild leave: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`J'ai ${client.guilds.size} serveurs`, { type: "STREAMING", url: "https://www.twitch.tv/gotagatv" })
  });
