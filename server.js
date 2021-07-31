const { Client } = require("discord.js");
const client = new Client({ intents: 513 });
const smartestchatbot = require("smartestchatbot");
const x = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("Ready for chatting!| Bot by 0_0");
});
client.on("message", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  message.content = message.content
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(here)/gi, "here");
  if (message.content.includes(`@`)) {
    return message.reply(
      `**:x: Please dont mention anyone**`
    );
  }
  message.channel.startTyping();
  if (!message.content)
    return message.channel.send("I can only reply to text messages");
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "!                     𝖄𝕬𝕾𝕾𝕴𝕹.©®™#0911",
    user: message.author.id,
    language: "en"
  }).then(reply => {
    message.reply({
      embed: {
        title: "Chat-Bot",
        color: "#dad6da",
        description: `**${reply}**`,
        timestamp: new Date(),
        footer: {
          text: `${client.user.username}`
        }
      }
    });
  });
  message.channel.stopTyping();
});
client.login(process.env.TOKEN); //login using the token
