import dotenv from "dotenv";

dotenv.config();

const config = {
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
};

export default config;
