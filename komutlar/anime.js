const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Write the name of the logo that I will make ...**  <a:maple_leaf:742698148329291826>`)
  const linqo = `https://habbofont.net/font/battlebanzai/${yazi}.gif`
  .replace(' ', '+')

  
  const narcosembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RED")
  .setImage(linqo)
  .setFooter('Anime Font Logo Created')
  message.channel.send(narcosembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['text-photo ',' text-photo'],
    permLevel: 0
}

exports.help = {
    name: 'anime',
    description: 'Dynamically translates the text you type.',
    usage: 'anime'
}