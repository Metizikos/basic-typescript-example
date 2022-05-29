import { IEvent } from "../typings/interface";
import colors from 'colors'
import type { Client } from 'discord.js'

export default {
     name: 'ready',
     once: true,
     run() {
         console.log(colors.green('System Ready!'));
     }
} as IEvent;