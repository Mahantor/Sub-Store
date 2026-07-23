const express = require('express');
const serverless = require('serverless-http');

// مسیر فایل اصلی برنامه backend
const app = require('../../backend/src/app');

// اکسپورت کردن تابع برای Netlify
exports.handler = serverless(app);
