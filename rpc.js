var rich = require("discord-rpc");
var rpc = new rich.Client({transport:"ipc"});
var	clientId = "client_id_goes_here";

async function setActivity() {
rpc.setActivity({
		details: "Umm ok",
		state: "i suck",
		largeImageKey: 'viz',
		largeImageText: 'Nice Logo huh?',
		smallImageKey: 'zygra',
		smallImageText: 'LoL',
		startTimestamp: new Date() //Still only 15 sec allowed RIP RPC
	})
}
	
rpc.on('ready', () => {
  setActivity();
  console.log('nice memez... rpc on track');
});

rpc.login({clientId}).catch(console.error);
