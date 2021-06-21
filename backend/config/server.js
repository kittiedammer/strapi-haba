module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '00f350a0baf0b438dc30c44f88432892'),
    },
  },
});
