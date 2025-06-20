const mongoose = require('mongoose');
const User = require('../src/models/User');
const logger = require('../src/utils/logger');
require('dotenv').config();

async function setupDatabase() {
  try {
   
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    
    await User.createIndexes();
    console.log('✅ Database indexes created');

    
    const fs = require('fs');
    if (!fs.existsSync('logs')) {
      fs.mkdirSync('logs');
      console.log('✅ Logs directory created');
    }

    console.log('🎉 Database setup completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();