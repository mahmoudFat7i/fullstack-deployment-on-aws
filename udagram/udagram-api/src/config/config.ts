import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dbport: process.env.POSTGRES_DB_PORT,
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  ep_app: process.env.EB_APP,
  ep_env: process.env.EB_ENV,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
