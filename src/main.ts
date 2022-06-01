import 'dotenv/config'
import colors from 'colors'
import { client, start } from './utils/client'
import { eventLoader, simpleCommandLoader, handlerLoader } from './utils/stations'
import { Collection } from 'discord.js'


export const SimpleCommands = new Collection();
export const SlashCommands = new Collection(); // SOON

console.log(colors.blue('Loading...'));

eventLoader(client);;
simpleCommandLoader(client);
handlerLoader(client);

start();
