import { Telegraf } from 'telegraf';
//import 'dotenv/config';

// 🔹 Defina seu TOKEN do BotFather
const BOT_TOKEN = '8053916340:AAFUdHWjMDJu6QyXTePL6-i5tKRwtdOig6k';
const WEB_APP_URL = 'https://simplefarm-game.github.io/webapp/'; // 🔹 Substitua pela URL do seu Web App

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('Bem-vindo! Clique no botão abaixo para abrir o Web App.', {
        reply_markup: {
            inline_keyboard: [[
                { text: 'Abrir Web App 🚀', web_app: { url: WEB_APP_URL } }
            ]]
        }
    });
});

bot.launch()
    .then(() => console.log('🤖 Bot iniciado com sucesso!'))
    .catch(err => console.error('Erro ao iniciar o bot:', err));

// ⚠️ Finaliza corretamente o bot em SIGINT/SIGTERM
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
