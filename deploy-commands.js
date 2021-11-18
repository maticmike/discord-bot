const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('supply').setDescription('Replies with total supply'),
	new SlashCommandBuilder().setName('peek')
	.setDescription('Replies with os links to users supply')
	.addStringOption(option =>
		option.setName('address')
			.setDescription('The address to peek')
            .setRequired(true)),
    new SlashCommandBuilder().setName('snapshot')
    .setDescription('Replies with with a image of their Mike')
    .addIntegerOption(option =>
        option.setName('id')
            .setDescription('The Matic Mike to Pull')
            .setRequired(true)),
    new SlashCommandBuilder().setName('powerlevel')
    .setDescription('Replies with the powerlevel of Mike')
    .addIntegerOption(option =>
        option.setName('id')
            .setDescription('The Matic Mike to Pull')
            .setRequired(true))
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);