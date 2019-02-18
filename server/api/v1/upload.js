'use strict';

const path = require('path');
const fs = require('fs.promised');
//methods
// 递归创建目录 同步方法
const mkdir = (dirname) => {

    let list = [];
    let parent;

    list.push(dirname);
    while (
        (parent = path.dirname(list[list.length - 1])) !== list[list.length - 1] &&
        parent
    ) {
        list.push(parent);
    }

    list.reverse().forEach(p => {
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    });
}


module.exports = (config)=>{
    return async (ctx, next) => {
        const date = new Date();
        const tmpdir = `${config.path}/assets/img/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        const filePaths = [];
        const files = ctx.request.files || ctx.files.body || {};
    
        mkdir(tmpdir);
    
        for (let key in files) {
            if (files.hasOwnProperty(key)) {
                const file = files[key];
    
                const filePath = path.join(
                    tmpdir,
                    file.name
                        .replace(/^.*(\.[a-z0-9A-Z]{1,})$/, Math.ceil(Math.random() * 1e7) + '$1'));
    
                const reader = fs.createReadStream(file.path);
                const writer = fs.createWriteStream(filePath);
                reader.pipe(writer);
                filePaths.push(filePath);
            }
        }
    
        //ctx.response.redirect(filePaths[0].replace(__dirname, ''));
        ctx.type = 'json';
        ctx.body = JSON.stringify({
            path: filePaths[0].replace(__dirname, '')
        });
    }
};