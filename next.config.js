module.exports = {
    //...
    async rewrites() {
      return [
        {
          source: '/api/subscribe',
          destination: '/api/subscribe',
        },
      ];
    },
  };                                                                                                                                                