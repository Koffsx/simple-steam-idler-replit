const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [730, 271590, 1172470, 244210, 582660, 291550, 1938090, 681280, 1085660, 227300, 2073850, 383870, 2074920, 242760, 4000, 1568590, 1408720, 43160, 2357570, 2325290, 359550, 304930, 438100, 236390, 460920, 105600, 1245620];  // Enter here AppIDs of the needed games
var status = 7;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
