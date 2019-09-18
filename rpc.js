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
		//startTimestamp,
		instance: false
	})
}
	
rpc.on('ready', () => {
  setActivity();
  console.log('nice...');
  console.log('Authed for user', rpc.user.username);
});

rpc.login({clientId}).catch(console.error);
