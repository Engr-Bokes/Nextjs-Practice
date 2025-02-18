import postgres from 'postgres';

// Create a PostgreSQL client
const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: {
    rejectUnauthorized: false, // Required for Neon's SSL connection
  },
});

export default sql;