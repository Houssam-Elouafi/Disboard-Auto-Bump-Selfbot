client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    try {
        const channel = await client.channels.fetch(process.env.BUMP_CHANNEL);
        console.log(`Fetched channel: ${channel.id}`);

        async function bump() {
            console.log("Attempting to send bump command...");
            try {
                await channel.sendSlash('302050872383242240', 'bump');
                console.log("Bump command sent successfully!");
            } catch (err) {
                console.error("Error sending bump command:", err);
            }
        }

        function loop() {
            var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000;
            setTimeout(function () {
                bump();
                loop();
            }, randomNum);
        }

        bump();
        loop();

    } catch (err) {
        console.error("Error fetching the channel:", err);
    }
});
