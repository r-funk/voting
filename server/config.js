var config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/rfunk-voting',
  port: process.env.PORT || 8887,
};

module.exports = config;
