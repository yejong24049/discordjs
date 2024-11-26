
const { Client, Intents } = 
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});


client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', (message) => {
  
  if (message.content === '!ping') {
    
    message.reply(`Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

//
client.login('MTI2NTUwMDk0OTk1NTIxOTQ5OA.G2TVyz.n8uYa9KFW1JTra8loOPiㅊㅎ허겨옫3소ㅜㅗㄷ렇qy7zjbmtU');
