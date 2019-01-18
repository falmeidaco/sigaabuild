const sass = require('node-sass');
const pug = require('pug');
const fs = require('fs');

var compiled_css, compiled_html, path = {
    script:'src/beta/script.js'
};

if (process.argv.length > 2 && process.argv[2] === 'prod') {
    path.script = 'src/script.js';
}

compiled_html = pug.renderFile('sgbuild/template.pug');
compiled_css = sass.renderSync({
    file: 'sgbuild/style.scss',
    outputStyle:'compressed'
}).css.toString();
fs.readFile('sgbuild/script.js', 'utf8', function(err, data) {
    if (!err) {
        var result = data.replace('${HTML}', compiled_html.trim()).replace('${CSS}', compiled_css.trim());
        fs.writeFile(path.script, result, 'utf8', function(err, result) {
            if (!err) {
                console.log('Write script.js file finished.')
            } else {
                console.log(err);
            }
        });
    } else {
        console.log(err);
    }
});