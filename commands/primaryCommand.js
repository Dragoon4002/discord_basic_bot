import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Demo code');


export async function execute(interaction) {
    await interaction.reply("Thus is a demo Code from Coding Train")
}