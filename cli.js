#!/usr/bin/env node

'use strict';

const meow = require('meow');
const clipboardy = require('clipboardy');
const emoji = require('./emoji');

const cli = meow(`
    Usage
        $ smil <input>

    Example
        $ smil rainbow
        $ smil rainb
`);

const inputEmoji = cli.input.length > 0 ? cli.input[0] : null;

if (inputEmoji) {
    const returnEmoji = emoji(inputEmoji);

    if (returnEmoji) {
        clipboardy.write(returnEmoji)
            .then(() => {
                console.log(`Copied ${returnEmoji} to clipboard!`);
            })
            .catch(() => {
                console.log(returnEmoji);
            });
    } else {
        console.log('Could not find that emoji 😢');
    }
}
