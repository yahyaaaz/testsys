const Discord = require('discord.js');  
const db = require('quick.db');  
const hastebin = require('hastebin-gen');  
const client = new Discord.Client();    
const Canvas = require('canvas');        
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set();  
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
const prefix = "y";

client.on("ready", () => {
  console.log("Yossif | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`yahya ... `, 'https://www.twitch.tv/hix');
});


const antic = JSON.parse(fs.readFileSync('./antic.json', 'utf8'));
client.on("message", message =>{
if(!antic[message.author.id]) {
antic[message.author.id] = {
actions: 0
}}
})


client.on('guildMemberRemove', alpha => {
alpha.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "MEMBER_KICK") {
if(!antic[anti.executor.id]) {
antic[anti.executor.id] = {
actions: 0
};
} else { 
antic[anti.executor.id].actions+=1
if (antic[anti.executor.id].actions == 5) {
alpha.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
antic[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./antic.json", JSON.stringify(antic) ,(err) =>{
        if (err) console.log(err.message);
    });
});





client.on('roleDelete', alpha => {
alpha.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "ROLE_DELETE") {
if(!antic[anti.executor.id]) {
antic[anti.executor.id] = {
actions: 0
};
} else { 
antic[anti.executor.id].actions+=1
if (antic[anti.executor.id].actions == 3) {
alpha.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
antic[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./antic.json", JSON.stringify(antic) ,(err) =>{
        if (err) console.log(err.message);
    });
});




client.on('channelDelete', alpha => {
alpha.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "CHANNEL_DELETE") {
if(!antic[anti.executor.id]) {
antic[anti.executor.id] = {
actions: 0
};
} else { 
antic[anti.executor.id].actions+=1
if (antic[anti.executor.id].actions == 1) {
alpha.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
antic[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./antic.json", JSON.stringify(antic) ,(err) =>{
        if (err) console.log(err.message);
    });
});


client.on('roleCreate', alpha => {
alpha.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "ROLE_CREATE") {
if(!antic[anti.executor.id]) {
antic[anti.executor.id] = {
actions: 0
};
} else { 
antic[anti.executor.id].actions+=1
if (antic[anti.executor.id].actions == 4) {
alpha.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
antic[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./antic.json", JSON.stringify(antic) ,(err) =>{	
        if (err) console.log(err.message);
    });
});




client.on('channelCreate', alpha => {
alpha.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "CHANNEL_CREATE") {
if(!antic[anti.executor.id]) {
antic[anti.executor.id] = {
actions: 0
};
} else { 
antic[anti.executor.id].actions+=1
if (antic[anti.executor.id].actions == 3) {
alpha.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
antic[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./antic.json", JSON.stringify(antic) ,(err) =>{
        if (err) console.log(err.message);
    });
});


client.on('guildBanAdd', function(alpha){
alpha.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "MEMBER_BAN_ADD") {
if(!antic[anti.executor.id]) {
antic[anti.executor.id] = {
actions: 0
};
} else { 
antic[anti.executor.id].actions+=1
if (antic[anti.executor.id].actions == 3) {
alpha.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
antic[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./antic.json", JSON.stringify(antic) ,(err) =>{
        if (err) console.log(err.message);
    });
});

client.login(process.env.BOT_TOKEN);
