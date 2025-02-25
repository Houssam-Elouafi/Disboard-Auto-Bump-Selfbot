require('dotenv').config();
require('./keep-alive');
const { Client } = require('discord.js-selfbot-v13');
const express = require('express');

// Create an HTTP server for Render
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Selfbot is running!');
});

app.listen(PORT, () => {
    console.log(`✅ Web server running on port ${PORT}`);
});

// Start the Discord selfbot
const client = new Client();

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    const channel = await client.channels.fetch(process.env.BUMP_CHANNEL);
    
    async function bump() {
        await channel.sendSlash('302050872383242240', 'bump');
        console.count('Bumped!');
    }

    function loop() {
        // Send bump message every 2-3 hours, to prevent detection.
        var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000;
        setTimeout(() => {
            bump();
            loop();
        }, randomNum);
    }
    
    bump();
    loop();
});

client.login(process.env.TOKEN);
