const { CommandInteraction, MessageEmbed, Client } = require("discord.js");


module.exports = {
    name: "ban",
    description: "Ban a member.",
    permission: "BAN_MEMBERS",
    options: [
        {
            name: "target",
            description: "Select the target.",
            type: "USER",
            required: true
        },
        {
            name: "reason",
            description: "Select a reason.",
            type: "STRING",
            required: false
        }
    ],
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction, client) {
        const embed = new MessageEmbed();

        const { options } = interaction;
        const target = options.getMember("target");
        const reason = options.getString("reason") || "No reason provided";
        await target.user.fetch();

        if (!target) { //for whatever reason //
            interaction.reply({ embeds: [embed.setColor("RED").setDescription("The target is not a valid member.")] });
            return;
        }

        //optional //

        // if (target.user == client.bot.user) { 
        //     interaction.reply({ embeds: [embed.setColor("RED").setDescription("You cannot ban bots.")] });
        //     return;
        // }

        if (target.user.id === client.user.id) {
            interaction.reply({ embeds: [embed.setColor("RED").setDescription("You cannot ban me!")] });
            return;
        }

        if (target.user.id === interaction.user.id) {
            interaction.reply({ embeds: [embed.setColor("YELLOW").setDescription("You cannot ban yourself dummy.")] });
            return;
        }

        if (target.roles.highest.position >= interaction.member.roles.highest.position) {
            interaction.reply({ embeds: [embed.setColor("RED").setDescription("This user has a administration permission.")] });
            return;
        }

        if (!interaction.guild.me.permissions.has("BAN_MEMBERS")) {
            interaction.reply({ embeds: [embed.setColor("RED").setDescription("I do not have the permission to ban members.")] });
            return;
        }

        const response = new MessageEmbed()
            .setTitle("Succesfully banned the target!")
            .setColor("GREEN")
            .setThumbnail(target.user.avatarURL({ dynamic: true }))
            .setImage(target.user.bannerURL({ dynamic: true, size: 512 }))
            .addFields(
                { name: "ID", value: target.user.id },
                { name: "Reason", value: reason },
                { name: "Joined Server", value: `<t:${parseInt(target.joinedTimestamp / 1000)}:R>`, inline: true },
                { name: "Account Created", value: `<t:${parseInt(target.user.createdTimestamp / 1000)}:R>`, inline: true },
            );

        try {
            const targetDM = new MessageEmbed()
                .setTitle(`You have been banned from the server!: ${interaction.guild}`)
                .setColor("RED")
                .setThumbnail(target.user.avatarURL({ dynamic: true }))
                .setImage(target.user.bannerURL({ dynamic: true, size: 512 }))
                .addFields(
                    { name: "ID", value: target.user.id },
                    { name: "Reason", value: reason },
                    { name: "Banned By", value: interaction.user.tag },
                    { name: "Joined Server At", value: `<t:${parseInt(target.joinedTimestamp / 1000)}:R>`, inline: true },
                );
            await target.send({ embeds: [targetDM] })
        }
        catch (err) {
            if (err) {
                await interaction.channel.send({ embeds: [embed.setColor("RED").setDescription(`The target could not be DM'd about the BAN info because they have disabled DM's!`)] });
            }
        }

        interaction.reply();
        interaction.followUp({ embeds: [response] });
        await target.ban({ days: 0, reason: reason });
    }
}