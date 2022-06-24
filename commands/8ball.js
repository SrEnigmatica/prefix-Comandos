const Discord =require(`discord.js`);


module.exports = {
      nombre: "8ball",
      alias: [ ],
      run: async (client, message, args) => {
        const pregunta = args.join(" ")
        if(!pregunta) return message.channel.send("Debes escribir tu pregunta")
        let respuestas = ["Si.",
                          "No.",
                          "Tal Vez.",
                          "Probablemente No.",
                          "En un futuro muy lejano.",
                          "Mejor no lo Intentes.",
                          "Dudalo.",
                          "Muy probablemente Si.",
                          "Algun dia.",
                          "Eso sera en otra vida",
                          "Sin lugar a dudas",
                          "Si tu lo crees hasi era",
                          "Si lo sueñas se cumplira",]
        let random = respuestas[Math.floor(Math.random() * respuestas.length)];

        const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle("【8ball Oriental】")
              .setDescription(`°A tu pregunta:\n**${pregunta}**\n\n°Mi respuesta es:\n${random}`)
        message.channel.send({ embeds: [embed]})

      }
}
