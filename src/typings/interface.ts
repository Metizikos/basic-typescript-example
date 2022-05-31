import type { Message, Client, Interaction } from 'discord.js';

export interface ISimpleCommand {
    name: string;
    adminOnly: boolean;
    description?: string;
    permissions?: string[];
    disabled?: boolean;
    run: (client: Client, message: Message, args: string[]) => unknown;
};

export interface ISlashCommand {
    data: {
        name: string;
        description?: string;

    }
    disabled?: boolean;
    run: (interaction: Interaction) => unknown;
}

export interface IEvent {
    name: string;
    once: boolean;
}

export interface IHandler {
    name: string;
    type: string;
}