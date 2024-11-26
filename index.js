// discord.js 모듈을 가져옵니다.
const { Client, Intents } = require('discord.js');

// 봇 토큰을 사용하여 클라이언트를 초기화합니다.
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

// 봇이 준비되었을 때 실행될 코드입니다.
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// 메시지가 들어왔을 때 실행될 코드입니다.
client.on('messageCreate', (message) => {
  // 메시지가 봇의 메시지가 아니고, 명령어가 "!ping"일 때
  if (message.content === '!ping') {
    // 서버와의 핑을 측정하고, 결과를 출력합니다.
    message.reply(`Pong! 🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

// 봇 로그인
client.login('YOUR_BOT_TOKEN');
