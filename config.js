require('dotenv').config;

export const token = process.env.token ||''; // <--- Your Bot Token Here <---
export const thumbnail = process.env.thumbnail || ''; // <--- Your Bot Embeds Thumbnail <---
export const boostersRole = process.env.role || ''; // <--- Your Server Boosters Role Here <---
export const boostersChannel = process.env.channel || '' // <--- Your Server Boosters Channel Here <---