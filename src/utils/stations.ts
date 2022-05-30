import { Client } from 'discord.js'
import fs from 'fs'
import path from 'path'
import colors from 'colors'

import { SimpleCommands } from '../main'

export const eventLoader = async (client: Client) => {
    const eventsPath = await path.join(__dirname,  '..', 'events');
    const eventFiles = await fs.readdirSync(eventsPath)
        .filter((file) => file.endsWith('.ts'));
            for(const file of eventFiles) {
                const filePath = await path.join(eventsPath, file);
                const options = await import(filePath);
                    const event = await options.default;

                        switch (event.once) {
                            case false:
                                await client.on(event.name, (...args) => event.run(...args));
                                    await console.log(colors.blue(' [EVENT-LOG]\t') + colors.green(`${event.name}:  Registered!`));
                                        break;
                            case true:
                                await client.once(event.name, (...args) => event.run(...args));
                                    break;
                        }
            }
                console.log(colors.green('>> Events Loaded'));

}

export const simpleCommandLoader = async (client: Client) => {
    const commandsPath = await path.join(__dirname, '..', 'commands/SimpleCommands');
    const commandFiles = await fs.readdirSync(commandsPath)
        .filter((file) => file.endsWith('.ts'));
            for(const file of commandFiles) {
                const filePath = await path.join(commandsPath, file);
                const options = await import(filePath);
                    const command = await options.default;

                        switch (command.disabled) {
                            case true:
                                await console.log(colors.blue('[SimpleCommand-LOG]\t') + colors.red(`${command.name}:\tDISABLED`));
                                    break;
                            case false:
                                await SimpleCommands.set(command.name, command);
                                await console.log(colors.blue('[SimpleCommand-LOG]\t') + colors.green(`${command.name}:  Registered`));
                                    break;
                        }
            }
                console.log(colors.green('>> SimpleCommands Loaded'));
}

export const handlerLoader = async (client: Client) => {
    const handlersPath = await path.join(__dirname,  '..', 'handlers');
    const handlerFiles = await fs.readdirSync(handlersPath)
        .filter((file) => file.endsWith('.ts'));
            for(const file of handlerFiles) {
                const filePath = await path.join(handlersPath, file);
                const options = await import(filePath);
                    const handler = await options.default;


                                await client.on(handler.type, (...args) => handler.run(...args));
                                    await console.log(colors.blue(' [HANDLER-LOG]\t') + colors.green(`${handler.name}:  Registered!`));
            }
                console.log(colors.green('>> Handlers Loaded'));

}