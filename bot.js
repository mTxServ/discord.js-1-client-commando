const CommandoClient = require('./client');

const client = new CommandoClient({
    commandPrefix: '?', // Préfixe des commandes (ex: ?help)
    owner: 'VOTRE_ID' // ID de l'utilisateur propriétaire du bot
});

client.registry
    .registerDefaultTypes()
    .registerGroups([])
;

client.once('ready', () => {
    console.log(`Je suis prêt !`);
});


client.on('error', console.error);

client.login('VOTRE_TOKEN');
