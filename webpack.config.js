const path = require('path');
module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    port: 9000
  }
};
