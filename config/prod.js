module.exports = {
  googleID: process.env.GOOGLE_CLIENT_ID,
  googleSecret: process.env.GOOGLE_CLIENT_SECRET,
  database: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stipeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.DOMAIN
};