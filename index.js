const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json'); // a garder en version desktop
const token = process.env.token;
const prefix = (cfg.prefix);

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Regardez _iShoqn_').catch(console.error)
});

bot.login(cfg.token);
