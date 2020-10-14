require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
app.get((request, response) => { response.send('Auto Bot says hi.') });
app.listen(port, () => console.log(`Auto Bot is listening at port ${port}`));

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = process.env.PREFIX;

client.on("message", function (message) {
  msg = message.content.split(' ');

  if (message.author.bot) return;

  if (msg[0] !== prefix) return;

  if (msg[0] === prefix) {
    if (msg[1] === "help") {
      message.reply("Refer to the documentation (https://github.com/ayushmxn/auto-bot/blob/master/.github/DOCUMENTATION.md). If you find yourself doing repetitive task(s) not covered by the Auto Bot, open an issue on it's Github (https://github.com/ayushmxn/auto-bot/issues).");
      return;
    }
    if (msg[1] === "about") {
      message.reply("Auto Bot is meant to automate a lot of repetative tasks. Note: This bot is currently under development, hence, some extra steps (https://github.com/ayushmxn/auto-bot/blob/master/.github/DOCUMENTATION.md#setup) are required for you to add it to your server.");
      return;
    }
    if (msg[1] === "nickname") {
      if (msg[2] === "--update") {
        let list = client.guilds.cache.get('740244361794813974');
        list.members.cache.each(member => {
          if (member.user == message.author) {
            member.setNickname(msg[3], 'auto bot override')
            .then(member => console.log('Nickname changed.'))
            .catch(console.error);
          }
        });
      }
    }
    else {
      message.reply("It seems you may have given an invalid command. Refer to the examples in the usage section (https://github.com/ayushmxn/auto-bot/blob/master/.github/DOCUMENTATION.md#usage).");
      return;
    }
  }

});

client.login(process.env.BOT_TOKEN);