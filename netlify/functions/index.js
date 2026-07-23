// برای زمانی که برنامه اصلی به صورت فایل ایستا ارائه می‌شود
exports.handler = async (event) => {
  // مسیر به پوشه build شده برنامه
  const fs = require('fs');
  const path = require('path');
  
  // اگر فایل index.html وجود دارد، آن را برگردان
  const indexPath = path.join(__dirname, '../../backend/src/index.html');
  
  try {
    const content = fs.readFileSync(indexPath, 'utf8');
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: content,
    };
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Sub-Store Backend is running!" }),
    };
  }
};
