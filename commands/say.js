const Discord = require("discord.js");

module.exports = {
    name: "say",
    alias: ["replit","s" ],
    run: async (client, message, args) => {
        const mensaje = args.join(" ")
        if(!mensaje) return message.channel.send("Debes de Escribir Algo!")
    setTimeout(function(){
        message.delete()
        message.channel.send(`${mensaje}`)
    }, 1000)
  }
}