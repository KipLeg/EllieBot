const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTYyNzc4OTQ5Mzc5ODI1NzA0.YlMfxQ.YDVbU4stCOaMutEBM6cz8k58ND8"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("HI")
    }
})

client.login(process.env.TOKEN)