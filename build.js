const sass = require('node-sass');
const fs = require('fs');

sass.render({
  file: 'style.scss',
}, function(err, result) { 
    fs.writeFile('style.css', result.css, (err) => {  
        if (err) throw err;
        console.log('Lyric saved!');
    });
});