module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f38dd10f6e272ac37a199dcda7f22787'),
  },
});
