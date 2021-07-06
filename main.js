const Discord = require('discord.js');

const client = new Discord.Client();

// prefix to initiate command
const prefix = '-';

client.once('ready', () => {
    console.log('EmpanadaBank is online');
})

//function to igore and look for prefix
client.on('message', message => {
   if(!message.content.startsWith(prefix) || message.author.bot) return; 

//    splice to add multiple commands 
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

   if(command === 'ping'){
       message.channel.send('pong!');
   } else if (command == 'youtube'){
       message.channel.send('youtube.com')
   } else if (command == 'pong'){
       message.channel.send('ping')
   }
});





client.login('ODYyMDM2NDYzMDYzNTMxNTIw.YOSgBA.7rJpNBy6BKuEWC4AWgPNvY1oUvw')