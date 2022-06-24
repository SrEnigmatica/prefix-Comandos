const Discord =require(`discord.js`);
const ms = require(`ms`);

module.exports = {
      nombre: "ping",
      category: "net",
      premium: false,
      alias: ["ip", "java", "bedrock", "net", "dis"],
      run: async (client, message, args) => {
           message.channel.send(`.`).then(msg => {
               let ping = msg.createdTimestamp - message.createdTimestamp;

           msg.edit({
               content: null,
               embeds:[new Discord.MessageEmbed()
                .setColor(`RED`)
                .setTitle(`Ping Parametros tiempo y mensajes.`)
                .setDescription(`*Mensajes* : ${ms(ping)}☎
                               \n*BotActived* : ${ms(client.uptime)}☎
                             \n\n*Parametros estables Sr.Enigma`)]                      
           });
        });
      }
};