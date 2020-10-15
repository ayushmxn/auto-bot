# Documentation

## Setup

### Environment

node v14 (recommended)  
npm v6.14.8 (recommended)

### Project

```npm install``` to install node modules
```npm run dev``` to run in your local environment
```npm start``` to run indefinately on a production server

### Configuration

Rename ```.env-sample``` to ```.env``` in the project directory and add your unique bot token and prefix.

### Tutorials

[DigitalOcean Tutorial](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js) to get a basic understanding of how Discord bots work.    

[Hosting a Discord Bot on Repl.it](https://dev.to/fizal619/so-you-want-to-make-a-discord-bot-4f0n) to understand why we use the ```.env``` file and ```express``` package when hosting a Discord Bot on Repl.it.    

[Discord.js](https://discord.js.org) library which allows you to interact with the [Discord API](https://discord.com/developers/docs/intro).

## API Usage

Commands are of the format ```prefix command(s) --optional-subcommand argument(s)```.    

Command | Option(s) | Argument(s) | Description
------- | --------- | ------------| -----------
help | | | Gives a summary of commands used with their description, similar to this table.
about | | | A description of the Auto Bot.
nickname | --update | new nickname | Change nickname of user who calls this command