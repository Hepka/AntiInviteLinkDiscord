export default const messages = {
	alert: "{{ USER_MENTION }}, the invitation link is prohibited on this server!", // This message will be displayed when someone posts an invitation link
	logEmbed: {
		title: "Invite link was posted", 
		description: "Sender: {{ USER }}\nChannel: {{ CHANNEL }}\nMessage Content: {{ CONTENT }}",
		color: "#123456", // The color of the strip on the left in the "hex" format
		footer: {
			text: "AntiInviteLink", // You can write anything here. This will be displayed at the bottom of the embed.
			iconURL: "serverAvatar" // Possible values: botAvatar, senderAvatar, serverAvatar
		},
		timestamp: Date.now() // Put "//" in front of this line, if you don't need time in embed.
	}
}