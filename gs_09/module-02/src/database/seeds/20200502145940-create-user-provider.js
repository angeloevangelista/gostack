const bcrypt = require('bcrypt');

const password = '123456';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'user',
          email: 'user@user.com',
          password_hash: await bcrypt.hash(password, 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'provider',
          email: 'provider@provider.com',
          password_hash: await bcrypt.hash(password, 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
