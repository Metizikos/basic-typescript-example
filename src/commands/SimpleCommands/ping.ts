import { Message, Client } from 'discord.js'

import { ISimpleCommand } from "../../typings/interface";

export default {
    name: 'ping',
    description: 'reply pong',
    adminOnly: true,
    disabled: false,
    run: (client, message, args) => {
        return message.channel.send('pong');
    }
} as ISimpleCommand