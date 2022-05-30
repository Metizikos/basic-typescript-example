import { ISimpleCommand } from './../typings/interface';
import { Client, Message } from 'discord.js'

import { SimpleCommands } from '../main';
import { IHandler } from "../typings/interface";
import config from "../config/config"

export default {
    name: 'SimpleCommandHandler',
    type: 'messageCreate',
    async run(message: Message, client: Client) {
        if (!message.content.toLowerCase().startsWith(config.prefix)) {return;}
            const [cmd, ...args] = await message.content.slice(config.prefix.length).trim().split(" ");
            const command = await SimpleCommands.get(cmd.toLowerCase()) as ISimpleCommand;

                if (!command)return;

                    if(command.adminOnly){
                        if(message.author.id !== config.dev) {
                            return message.reply({ content: "Bu Komutu Kullanma İznin Yok"});
                        }
                    }
                await command.run(client, message, args);
    }
} as IHandler