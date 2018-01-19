module.exports = {
  development: {
    client: 'pg',
    connection:
      "postgres:///memoryv3"
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
