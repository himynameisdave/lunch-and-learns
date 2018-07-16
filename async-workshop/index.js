#!/usr/bin/env node

const examples = [
    null,
    '01-promises.js',
    '02-async-await.js',
    '03-async-chain.js',
    '04-handle-errors.js',
    '05-concurrent.js',
]
const example = parseInt(process.argv[2]);
if (!example) {
    process.exit(1);
};

require(`./examples/${examples[example]}`);
