const { CommandInteraction, MessageEmbed, MessageActionRow, MessageButton  } = require("discord.js");
const DB = require("../../Structure/Schemas/SuggestDB");

module.exports = {
    name: "suggest",
    description: "sugerencia de las god",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "type",
            description: "Select an Option",
            type: "STRING",
            required: true,
            choices: [
                {name: "Command", value: "Command"},
                {name: "Event Listener", value: "Event Listener"},
                {name: "System", value: "Other"}
            ]
            },
            {
                name: "suggestion",
                description: "Describe your suggestion",
                type: "STRING",
                required: true,

            } 
        ],
       /**
        * 
        * @param {CommandInteraction} interection 
        */
        async execute(interaction) {

            const { options, guildId, member, user } = interaction;
            const type = options.getString("type");
            const Suggestion = options.getString("suggestion");

            const Embed = new MessageEmbed()

            .setColor("RANDOM")
            .setAuthor({name:user.tag, iconURL:user.displayAvatarURL({dynamic: true})})
            .setFields(

                {name: "Suggestion:", value: Suggestion, inline: false},
                {name:"type:", value: type, inline: true},
                {name: "Status", value: "pending", inline: true}
            )
            .setTimestamp()

            const Buttons = new MessageActionRow();

            Buttons.addComponents(
                new MessageButton().setCustomId("suggest-accept").setLabel("⏱ Accept").setStyle("PRIMARY"),
                new MessageButton().setCustomId("suggest-decline").setLabel("⏱ Decline").setStyle("SECONDARY"),
            )

try {

    const M = interaction.reply({embeds: [Embed], components: [Buttons], fetchReply: true});

    await DB.create({GuildID: guildId, MessageID: M.id, Details: [
        {
            MemberID: member.id,
            type: type, 
            Suggestion: Suggestion 
        }
    ]})

} catch (err) {
    console.log(err);
}

        }
    }
  