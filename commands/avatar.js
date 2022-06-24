const Discord = require(`discord.js`);
module.exports = {
    name: "avatar",
    alias: ["av","foto"],
    run: async (client, message, args) => {
        const usuario = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Avatar de` + usuario.tag)
        .setDescription(`[Ver Imagen](${usuario.displayAvatarURL({size: 1024, dynamic: true})})`)
        .setImage(usuario.displayAvatarURL({size: 1024, dynamic: true}))
        .setColor(`RANDOM`)
        .setTimestamp()
        .setFooter(`Solicitada por:` + message.member.displayName)               
    message.delete()
    message.reply({embeds: [embed]})

    }
}