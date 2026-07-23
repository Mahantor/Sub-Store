const { handler } = require('../../backend/dist/index'); // یا مسیر صحیح فایل اصلی

exports.handler = async (event, context) => {
  try {
    // فراخوانی تابع اصلی
    const result = await handler(event, context);
    return result;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
