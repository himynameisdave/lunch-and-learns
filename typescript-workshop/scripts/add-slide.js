#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


(async function () {
    const FILES = {
        slidesIndex: path.resolve(process.cwd(), 'presentation', 'slides', 'index.js'),
    };
    // 1. Read the existing ./slides/index.js file
    const indexContents = await new Promise((resolve, reject) => {
        fs.readFile(FILES.slidesIndex, 'utf8', (error, contents) => {
            if (error) return reject(error);
            resolve(contents);
        });
    })

    // 2. Figure out the new index (if an index is not provided)
    const nextIndex = indexContents.split('\n')
        .filter(line => line !== '')
        .reduce((acc, line) => {
            if (line.startsWith('import')) {
                const rawNumbers = /_\d{2}/g.exec(line);
                const rawLastNum = rawNumbers[rawNumbers.length - 1];
                const parsed = parseInt(rawLastNum.substr(1));
                return parsed;
            }
            return acc;
        }, 0);
    // 3. Write new file
    const newFileName =
    fs.writeFile()
// 4. Re-write existing ./slides/index.js file
})();
