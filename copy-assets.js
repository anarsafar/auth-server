const fs = require('fs-extra');

fs.copySync('templates', 'build/templates');
fs.copySync('views', 'build/views');
fs.copySync('public', 'build/public');

console.log('Assets copied successfully!');
