const fs = require('fs-extra');

fs.copySync('templates', 'build/templates');
fs.copySync('views', 'build/views');

console.log('Assets copied successfully!');
