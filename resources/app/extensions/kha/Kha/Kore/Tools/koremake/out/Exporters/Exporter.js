"use strict";
const fs = require('fs-extra');
class Exporter {
    constructor() {
    }
    writeFile(file) {
        this.out = fs.openSync(file, 'w');
    }
    closeFile() {
        fs.closeSync(this.out);
    }
    p(line = '', indent = 0) {
        let tabs = '';
        for (let i = 0; i < indent; ++i)
            tabs += '\t';
        let data = new Buffer(tabs + line + '\n');
        fs.writeSync(this.out, data, 0, data.length, null);
    }
}
exports.Exporter = Exporter;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ff8f66382ad001a1938d7dbceada9ec9a6ab9411/extensions\kha\Kha\Kore\Tools\koremake\out/Exporters\Exporter.js.map
