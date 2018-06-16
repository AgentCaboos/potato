const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on("ready", async () => {
  console.log('BlockyIsles Bot Is Succesvol Opgestart!')
  client.user.setActivity("www.BlockyIsles.com", {
    type: "PLAYING"
  });

});

client.on('message', message => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (command.toLowerCase() === `${prefix}ping`) {
    message.channel.send('pong!')
  }
  let members = `There Are ${message.guild.memberCount} Members In Our Discord Server`;

  if (command.toLowerCase() === `${prefix}members`) {
    message.channel.send(members)
  }
  if (command.toLowerCase() === `${prefix}forum`) {
    message.channel.send('https://www.blockyisles.com/')
  }
  if (command.toLowerCase() === `${prefix}store`) {
    message.channel.send('http://blockyisles.buycraft.net/')
  }
  if (command.toLowerCase() === `${prefix}ip`) {
    message.channel.send('The IP of our minecraft server is: play.BlockyIsles.com')
  }
  if (command.toLowerCase() === `${prefix}version`) {
    message.channel.send('Premium 1.8')
  }

  if (command.toLowerCase() === `${prefix}version`) {
    if (!args) return message.reply("Please Ask A Full Question!")
  }
  if (command.toLowerCase() === `${prefix}8ball`) {

    let replies = ["Yes.", "No", "Maybe", "Sometimes"];
    let result = replies[Math.floor((Math.random() * replies.length))];
    let question = args.join(" ");

    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag)
      .setColor("#00ffff")
      .addField("Question", `${question}`, true)
      .addField("Answer", `${result}`, true);
    message.channel.send({
      embed: embed
    });
  }
  if (command.toLowerCase() === `${prefix}commands`) {
    message.channel.send('These are the commands !version !members !forum !ip !store !ping !8ball')
  }
});

client.login('NDU1ODA5MzI3NTMwMjQ2MTQ1.DgBZ_Q.V9_55EyoZtdircuNPpV5jSxx4L8')

