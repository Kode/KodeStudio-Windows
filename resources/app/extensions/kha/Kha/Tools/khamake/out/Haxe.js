"use strict";
const child_process = require('child_process');
const fs = require('fs');
const path = require('path');
const log = require('./log');
const exec_1 = require('./exec');
function executeHaxe(from, haxeDirectory, options) {
    return new Promise((resolve, reject) => {
        let exe = 'haxe';
        let env = process.env;
        if (fs.existsSync(haxeDirectory) && fs.statSync(haxeDirectory).isDirectory()) {
            let localexe = path.resolve(haxeDirectory, 'haxe' + exec_1.sys());
            if (!fs.existsSync(localexe))
                localexe = path.resolve(haxeDirectory, 'haxe');
            if (fs.existsSync(localexe))
                exe = localexe;
            const stddir = path.resolve(haxeDirectory, 'std');
            if (fs.existsSync(stddir) && fs.statSync(stddir).isDirectory()) {
                env.HAXE_STD_PATH = stddir;
            }
        }
        let haxe = child_process.spawn(exe, options, { env: env, cwd: path.normalize(from) });
        haxe.stdout.on('data', (data) => {
            log.info(data.toString());
        });
        haxe.stderr.on('data', (data) => {
            log.error(data.toString());
        });
        haxe.on('close', (code) => {
            if (code === 0)
                resolve();
            else
                reject('Haxe compiler error.');
        });
    });
}
exports.executeHaxe = executeHaxe;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ff8f66382ad001a1938d7dbceada9ec9a6ab9411/extensions\kha\Kha\Tools\khamake\out/Haxe.js.map
