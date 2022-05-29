import { Client, Intents } from 'discord.js'
import colors from 'colors'

export const client = new Client({
    intents: 34647,
    presence: {
        status: 'idle',
        activities: [{
            name: 'By Metizikos',
            type: 3,
        }],
    },
});

export const start = async () => {
    await client.login(process.env.TOKEN || '');
}

