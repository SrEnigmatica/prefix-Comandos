const Discord =require(`discord.js`);


module.exports = {
      nombre: "curiosidad",
      alias: ["cur","c"],
      run: async (client, message, args) => {
        let respuestas = 
                 [
                  "Sabias que los creepers al inicio fueron un error de codigo.",
                  "Alex en Realidad es zurda.",
                  "Sabias que los piglins en Bedrock pueden usarse para Bugs y granajs de produccion masiva.",
                  "Java esta mas completo en mods y plugins en lugar de bedrock.",
                  "Dr.Manche y Deni se an Besado mas de 5 veces.",
                  "Deni tiene y es menor de edad.",
                  "La mitad del Staff del OrientalCraft es staff en Veltacraft.",
                  "Veltacraft es el mejor Servidor Network.",
                  "Existe un zombi gigante, sin embargo este esta oculto y solo es posible generarlo con /summon.",
                  "Los Aldeanos Bebes, al igual que los adultos, tienen barba.",
                  "Las tnt del permadeth demon son autoeditables.",
                  "Denii es novio de Dios y del Mundo.",
                  "Existe el husk en minecraft sin embargo este no existe, y solo es posible generarlo con /summon husk.",
                  "Sabias que puedes conectar bots a discord para autorespuestas.",
                  "La programacion de un bot en minecraft es mas facil de lo que crees.",
                  "Antiguamente Annonymus comboco usuarios apartir de una serie de paginas cifradas.",
                  "El perfil del Desarrollador Dinnerbone tambien aparece de cabeza igual que pasa al colocarselo a un mob.",
                  "jeb_ en las ovejas puedes darles efecto rgb.",
                  "Grumm sirve para dar vuelta verticalmente a mobs.",
                  "Aunque se considere que los aldeanos bebés son  en realidad son niños, esto explica porque corren y hacen cosas que un bebé no puede hacer.",
                  "Se considera que en un futuro el minecraft 4D sera posible jugarlo aun que aun esta en proceso de desarrollo",
                  "Los creepers y las abejas son los unicos mobs que puede atacar solo una vez",
                  "Se hizo que las abejeas fueran de media cuadra de largo y ancho, ya que mojang consideraba que ese tmaño era el mas lindo.",
                  "Los ajolotes son las primeras criaturas anfibias agregadas en Minecraft. Sin embargo, no fue el primero en anunciarse desde que se anunciaron las ranas en MINECON LIVE 2019.",
                  "Si se hace que dos lobos domesticados tengan una cría, esta llorará constantemente, pues tiene la salud de un lobo salvaje que es menor a la del lobo domesticado.",
                  "Los pollitos son tan pequeños que caben por el hueco de una escalera.",
                  "Hay una pantalla de inicio que dice En caso de que no sea obvio los zorros no son jugadores, fue añadida de la descripción de error MC-166292.",
                  "El javaScript de More Ore Tools y Fantasy Ores es mas facil de lo qeu uno piensa.",
                  "Dia 3 aprendiendo a programar: Estoy desarrollando sentimientos de amor por mis profesores atte:Denny.",
                  "En modo pacifico en verciones de la 1.12 los golems y lobos te podian hacer daño",
                  "Cuando un enderman esta en un bloque si poder teletrasportarse, si lo golpeas con una flecha regresara",
                  "En el modo espectador, es posible aumentar o disminuir la velocidad de un viaje simplemente desplasando la rueda del mause",
                  "Dinamarca ha sido completamente recreada en minecraft por Simon Kokkendorf y Thorbjorn Nielsen",
                  "Minecraft no se llamaba Minecraft se llamaba Cave Games",
                 ]
                  
        let random = respuestas[Math.floor(Math.random() * respuestas.length)];

        const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setAuthor(message.member.displayName, message.author.displayAvatarURL ())
              .setTitle("☻Curiosidades del Mundo Minecraft☻")
              .setDescription(`°Curiosidades del Mundo :\n\n${random}`)
              .setFooter(`Consulta por:` + message.member.displayName)
        message.delete()      
        message.channel.send({ embeds: [embed]}
      )}
}
