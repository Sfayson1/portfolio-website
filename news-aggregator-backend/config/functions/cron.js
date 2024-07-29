
'use strict';

module.exports = {
  
  '* * * * *': {

    task: async () => {
      await strapi.config.tasks.updateFeed();
    },

    options: {
      tz: 'America/New_York',
    },
  },
};
