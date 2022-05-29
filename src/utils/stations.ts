import type { Client } from 'discord.js'
import fs from 'fs'
import path from 'path'
import colors from 'colors'

export const globals: object = new Object();

export const eventLoader = async (client: Client) => {
    const eventsPath = await path.join(__dirname,  '..', 'events');
    const eventFiles = await fs.readdirSync(eventsPath)
        .filter((file) => file.endsWith('.ts'));
            for(const file of eventFiles) {
                const filePath = await path.join(eventsPath, file);
                const options = await import(filePath);
                    const event = await options.default;

                        switch(event.once) {
                            case false:
                                await client.on(event.name, (...args) => event.run(...args));
                                    await console.log(colors.blue(' [EVENT-LOG] ') + colors.green(`${event.name}:\tRegistered!`));
                                        break;
                            case true:
                                await client.once(event.name, (...args) => event.run(...args));
                                    break;
                        }
            }
                console.log(colors.green('>> Events Loaded'));

}