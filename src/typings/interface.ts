import type { Message } from 'discord.js';

export interface ISimpleCommand {
    name: string;
    adminOnly: boolean;
    description?: string;
    permissions?: string[];
};

export interface ISlashCommand {
    name: string;
    adminOnly: boolean;
    description?: string;
    permissions?: string[];
}

export interface IEvent {
    name: string;
    once: boolean;
}

export interface IHandler {
    name: string;
    type: string;
    run: () => unknown;
}