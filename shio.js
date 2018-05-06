// Load up the discord.js library
const Discord = require("discord.js");
// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setPresence({game: {name: "+help or +helpdm", type: 2}});
});


function doMagic8BallVoodoo() {
    var rand = [':love_letter: Uhh, Sure Why not?', ':love_letter:  Hell No.', ':love_letter: It is true.', ':love_letter: Impossible.', ':love_letter: Of course.', ':love_letter: I do not think so.', ':love_letter: Yep!', ':love_letter: It is not true.', ':love_letter: I highly doubt that', ':love_letter: Nuh uh!', ':love_letter: Sources point to no.', ':love_letter: Theories prove it.', ':love_letter: I am lazy today, Try later.', ':love_letter: You are hopeless', ':love_letter: Meh', ':love_letter: Nawp', ':love_letter: Concentrate and ask again', ':love_letter: Shut up.', ':love_letter: No no no no no no no no, NOOOOOOPE', ':love_letter: Uhh I do not think so.', ':love_letter: Pfft!', ':love_letter: Sure!', ':love_letter: I have to say yes.', ':love_letter: Fine! before you start crying >.>', ':love_letter: Who cares?', ':love_letter: Ask me if i care.', ':love_letter: Do you think i give a damn?'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function coinToss() {
    var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
    return rand[Math.floor(Math.random()*rand.length)];
}


client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setPresence({game: {name: "+help or +helpdm", type: 2}});
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildMemberAdd", function(member) {
  let role = member.guild.roles.find("name", "Recruit");
  member.addRole(role).catch(console.error);
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar?') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to Secret Service, ${member}`);
});

  //BnS Class Badges:
client.on("message", (message) => {
  if(message.content === "Hey Shio, What badges do i need for flame blade master?") {
    message.channel.send("You need either Magnum or Transcedence for Soul badge and Revelation or Pulse for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for lightning blade master?") {
    message.channel.send("Use Eternity for Soul badge and Skyrift for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for wind kfm?") {
    message.channel.send("Get Magnum for Soul badge and Skyrift for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for flame kfm?") {
    message.channel.send("You need Magnum for Soul badge and Revelation for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for shadow assassin?") {
    message.channel.send("Use Holy Fire for Soul badge and Pulse for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for lightning assassin?") {
    message.channel.send("Get Blue Moon for Soul badge and Pulse for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for earth destroyer?") {
    message.channel.send("You need either Primal Force or Eternity for Soul badge and Skyrift for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for shadow destroyer?") {
    message.channel.send("You need Magnum for Soul badge and Pulse for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for lightning blade dancer?") {
    message.channel.send("Get Courage for Soul badge and Pulse for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for wind blade dancer?") {
    message.channel.send("You can use either Eternity or Alluvion for Soul badge and Skyrift for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for frost soul fighter?") {
    message.channel.send("Use Blue Moon for Soul badge and Pulse for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for earth soul fighter?") {
    message.channel.send("You need Primal Force for Soul badge and Skyrift for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for earth summoner?") {
    message.channel.send("You need either Magnum or Alluvion for Soul badge and Enigma for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for wind summoner?") {
    message.channel.send("You need either Holy Fire or Courage for Soul badge and Enigma for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for flame force master?") {
    message.channel.send("You need Courage for Soul badge and Skyrift for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for frost force master?") {
    message.channel.send("You can use either Blue Moon or Magnum for Soul badge and Revelation for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for frost warlock?") {
    message.channel.send("Get Magnum for Soul badge and Skyrift for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for shadow warlock?") {
    message.channel.send("You need Primal Force for Soul badge and Pulse for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for flame gunslinger?") {
    message.channel.send("You need Holy Fire for Soul badge and Skyrift for Mystic badge.");
  }
  if(message.content === "Hey Shio, What badges do i need for shadow gunslinger?") {
    message.channel.send("You need Magnum for Soul badge and Pulse for Mystic badge.");
  }
  if(message.content === "Thank You Shio") {
    message.channel.send("What can i say except you're welcome!");
  }
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Leader"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator", "Leader"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

  if(command === "website") {
    message.channel.send("https://secretservice-bns.shivtr.com");
}

  if(command === "help") {
    const embed = new Discord.RichEmbed()
  .setTitle("Command List")
  .setAuthor("Shio Bot", "https://cldup.com/pHxjiMblQK.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("It looks like you need help. Here are some stuff i can do. | Full command list at https://secretservice-bns.shivtr.com/pages/shiobot")
  .setFooter("Coded by Eri-Kun#5662", "https://cldup.com/hOIVlHLUYz.png")
  .setThumbnail("https://cldup.com/eWpE5VM6HS.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://secretservice-bns.shivtr.com/pages/shiobot")
  .addBlankField(true)
  .addField("Server / Guild Commands.", ".")
  .setColor(255, 178, 102)
  .addField("+ping",
    "Calculates ping between sending a message and editing it, giving a nice round-trip latency.")
  .addField("+say", "Makes the bot say something and delete the message.")
  .addField("+kick", "This command is limited to mods and admins.")
  .addField("+ban", "This command is limited to mods and admins.")
  .addField("+purge", "This command removes all messages from all users in the channel, up to 100.")
  .addField("+website", "This command will send the Secret Service website URL.")
  .addField("+stream", "This command will send the stream url located in the website.")
  .addField("+giveaway", "This command will show the giveaway prize along with the stream url.")
  .addField("what is my avatar?", "This command will post the user's avatar and link.")
  
  .addBlankField(true)
  
  .addField("Action Commands", ".")
  .addField("+slap @user", "Slaps mentioned user.", true)
  .addField("+stab @user", "Stabs mentioned user.", true)
  .addField("+punch @user", "Punches mentioned user.", true)
  .addField("+kiss @user", "Kisses mentioned user.", true)
  .addField("+kill @user", "Kills mentioned user.", true)
  .addField("+pat @user", "Pats mentioned user.", true )
  
  .addBlankField(true)
  
  .addField("BnS Commands", ".")
  .addField("Hey Shio, What badges do i need for element_here class_here? ", "ex: Hey Shio, What badges do i need for flame gunslinger?")
  .addField("Elements:", "flame, shadow, lightning, earth, wind & frost.")
  .addField("Classes:", "blade master, kfm, assassin, destroyer, blade dancer, soul fighter, summoner, force master, warlock & gunslinger.")
  .addBlankField(true);
  
  message.channel.send({embed});
}

 if(command === "giveaway") {
    message.channel.send("Get a chance to win 1,600 NCoins at https://secretservice-bns.shivtr.com/pages/weeklystream be sure to to login to your twitch account!");
}

if(command === "stream") {
    message.channel.send("Visit https://secretservice-bns.shivtr.com/pages/weeklystream be sure to to login to your twitch account or at https://twitch.tv/summerwarz");
}

//Action Commands

if(command =="slap") {
  var slaps = ['https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif', 'https://media1.tenor.com/images/1cf84bf514d2abd2810588caf7d9fd08/tenor.gif?itemid=7679403', 'https://media1.tenor.com/images/85722c3e51d390e11a0493696f32fb69/tenor.gif?itemid=5463215'];
  var rand = Math.floor(Math.random()*rand.length);
  var randomSlap = slaps[rand];

    let slappedUser = (message.mentions.users.first())
    if (!slappedUser) return message.channel.send("You must mention a user!")
    message.delete().catch(O_o=>{});
    
    let slappedEmbed = new Discord.RichEmbed()
    .setTitle('')
    .setColor(0x1D82B6)
    .setDescription(message.author.tag + ' slapped ' + slappedUser + '!')
	.setImage(randomSlap);

    message.channel.send(slappedEmbed);
    return;

  }
 
if(command =="stab") {

    let stabbedUser = (message.mentions.users.first())
    if (!stabbedUser) return message.channel.send("You must mention a user!")
		message.delete().catch(O_o=>{});

    let stabbedEmbed = new Discord.RichEmbed()
    .setTitle('')
    .setColor(0x1D82B6)
    .setDescription(message.author.tag + ' stabbed ' + stabbedUser + '!')
	.setImage(`https://media.giphy.com/media/cOffMW62NWtt6/giphy.gif`);

    message.channel.send(stabbedEmbed);
    return;

  } 

if(command =="punch") {

    let punchedUser = (message.mentions.users.first())
    if (!punchedUser) return message.channel.send("You must mention a user!")
		message.delete().catch(O_o=>{});

    let punchedEmbed = new Discord.RichEmbed()
    .setTitle('')
    .setColor(0x1D82B6)
    .setDescription(message.author.tag + ' punched ' + punchedUser + '!')
	.setImage(`https://media.giphy.com/media/1426DjQ2dTFkzK/giphy.gif`);

    message.channel.send(punchedEmbed);
    return;

  }   

if(command =="kiss") {

    let kissedUser = (message.mentions.users.first())
    if (!kissedUser) return message.channel.send("You must mention a user!")
		message.delete().catch(O_o=>{});

    let kissedEmbed = new Discord.RichEmbed()
    .setTitle('')
    .setColor(0x1D82B6)
    .setDescription(message.author.tag + ' kissed ' + kissedUser + '!')
	.setImage(`https://media.giphy.com/media/KmeIYo9IGBoGY/giphy.gif`);

    message.channel.send(kissedEmbed);
    return;

  } 

if(command =="kill") {

    let killedUser = (message.mentions.users.first())
    if (!killedUser) return message.channel.send("You must mention a user!")
		message.delete().catch(O_o=>{});

    let killedEmbed = new Discord.RichEmbed()
    .setTitle('')
    .setColor(0x1D82B6)
    .setDescription(message.author.tag + ' killed ' + killedUser + '!')
	.setImage(`https://pa1.narvii.com/5923/0d0a641d8f9c96d6db625530495d0474115af9dc_hq.gif`);

    message.channel.send(killedEmbed);
    return;

  }
  
if(command =="pat") {

    let pattedUser = (message.mentions.users.first())
    if (!pattedUser) return message.channel.send("You must mention a user!")
		message.delete().catch(O_o=>{});

    let pattedEmbed = new Discord.RichEmbed()
    .setTitle('')
    .setColor(0x1D82B6)
    .setDescription(message.author.tag + ' patted ' + pattedUser + '!')
	.setImage(`https://media1.tenor.com/images/f79a9ec48bde0e592e55447b17ecfbad/tenor.gif?itemid=8053566`);

    message.channel.send(pattedEmbed);
    return;

  }
  
  
if(command =="hug") {

    let huggedUser = (message.mentions.users.first())
    if (!huggedUser) return message.channel.send("You must mention a user!")
		message.delete().catch(O_o=>{});

    let huggedEmbed = new Discord.RichEmbed()
    .setTitle('')
    .setColor(0x1D82B6)
    .setDescription(message.author.tag + ' hugged ' + huggedUser + '!')
	.setImage(`https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif?itemid=9200935`);

    message.channel.send(huggedEmbed);
    return;

  }
  
if(command =="poke") {

    let pokedUser = (message.mentions.users.first(), message.mentions.roles.first())
    if (!pokedUser) return message.channel.send("You must mention a user or a role!")
		message.delete().catch(O_o=>{});

    let pokedEmbed = new Discord.RichEmbed()
    .setTitle('')
    .setColor(0x1D82B6)
    .setDescription(message.author.tag + ' poked ' + pokedUser + '!')
	.setImage(`https://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-12.gif`);

    message.channel.send(pokedEmbed);
    return;

  } 

if(command == "meh") {
	if (message.author.id !== '314027916285706242') return message.reply("You are not Gabby to use this command.");
	message.channel.send(`Meh..`, {files: ["https://funcatpictures.com/wp-content/uploads/2013/10/funny-cat-pics-meh.jpg"]});
	
}

if (command == 'botclean') {
	if(!message.member.roles.some(r=>["Administrator", "Moderator", "Leader"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
  
    message.channel.fetchMessages().then(messages => {
        const botMessages = messages.filter(msg => msg.author.bot);
        message.channel.bulkDelete(botMessages);
        messagesDeleted = botMessages.array().length; // number of messages deleted

        // Logging the number of messages deleted on both the channel and console.
        message.channel.send("Deletion of messages successful. Total messages deleted: " + messagesDeleted);
        console.log('Deletion of messages successful. Total messages deleted: ' + messagesDeleted)
    }).catch(err => {
        console.log('Error while doing Bulk Delete');
        console.log(err);
    });
}
if (command === "serverinfo") {
   let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor('15f153')
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    message.channel.send(serverembed);
}

if (command === "listemojis") {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  message.channel.send(emojiList);
}

if (command === "shio") {
    message.channel.sendMessage(doMagic8BallVoodoo())
}

if (command === "cointoss") {
    message.channel.sendMessage(coinToss())
  }
  
if (command === "helpdm") {
    message.channel.sendMessage(":calling: It seems you have requested help. Check your DMs.");
    message.author.sendMessage("Thanks for using the help command, Please visit: https://secretservice-bns.shivtr.com/pages/shiobot for full command list.")
  }

if(command == "fullcmd") {
	message.channel.send(`Here you go!`, {files: ["./commandlist.txt"]});
	
}

if(command === "lalala") {
	message.channel.send('LA LA LA LA', {files: ["./images/lalala2.gif"]});
	
}

if(command === "cat") {
 const randomCat = require("./randomcat.js");
 message.channel.send(randomcat());
}

});

client.login(config.token);