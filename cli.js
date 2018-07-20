#!/usr/bin/env node

'use strict';

const meow = require('meow');
const emojilib = require('emojilib');
const clipboardy = require('clipboardy');
const fuzzysearch = require('fuzzysearch');

const cli = meow(`
    Usage
        $ smil <input>

    Example
        $ smil rainbow
        $ smil rainb
`);

const inputEmoji = cli.input.length > 0 ? cli.input[0] : null;

if (inputEmoji) {
    if (emojilib.lib[inputEmoji] && emojilib.lib[inputEmoji].char) {
        const emoji = emojilib.lib[inputEmoji].char;

        clipboardy.write(emoji)
            .then(() => {
                console.log(`Copied ${emoji} to clipboard!`);
            })
            .catch(() => {
                console.log(emoji);
            });

        return;
    }
    
    const searchResults = [];
    Object.keys(emojilib.lib).forEach(name => {
        const result = fuzzysearch(inputEmoji, name);
        if (result) {
            searchResults.push(name);
        }
    });

    if (searchResults.length > 0) {
        const emoji = emojilib.lib[searchResults[0]].char;

        clipboardy.write(emoji)
            .then(() => {
                console.log(`Copied ${emoji} to clipboard!`);
            })
            .catch(() => {
                console.log(emoji);
            });

        return;
    }

    console.log('Could not find that emoji 😢');
    return
}
