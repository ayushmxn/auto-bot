import Discord from "discord.js";
import { config } from "dotenv";

export async function bot() {
    config();
    const client = new Discord.Client();

    client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on("message", (message: any) => {

        if (message.author.bot) {
            return;
        }

        const messageArray = message.content.split(" ");
        const pre = messageArray[0];
        const cmd = messageArray[1];
        const arg = messageArray.slice(2);

        if (pre === "asl") {
            message.reply("Hello!");
        }
    });
    client.login(process.env.DISCORD_ACCESS_TOKEN);
}