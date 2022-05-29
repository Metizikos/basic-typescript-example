import 'dotenv/config'
import colors from 'colors'

import { client, start } from './utils/client'
import { eventLoader } from './utils/stations'

console.log(colors.blue('Loading...'));
eventLoader(client);;


start();