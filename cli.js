#!/usr/bin/env node

'use strict';

const meow = require('meow');
const inquirer = require('inquirer');
const clipboardy = require('clipboardy');
const emoji = require('./emoji');
const search = require('./search');

const cli = meow(`
    Usage
        $ smil <input>

    Example
        $ smil rainbow
        $ smil rainb

    Running smil without input will enter search mode!
    Exit search mode with ctrl-c.
`);

const inputEmoji = cli.input.length > 0 ? cli.input[0] : null;

if (inputEmoji) {
    const returnEmoji = emoji(inputEmoji);

    if (returnEmoji) {
        writeToClipboard(returnEmoji);
    } else {
        console.log('Could not find that emoji 😢');
    }
} else {
    inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
    inquirer.prompt([{
        type: 'autocomplete',
        name: 'emoji',
        message: 'Search for an emoji:',
        source: function(answers, input) {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    resolve(search(input));
                }, 20);
            });
        }
    }]).then(function(result) {
        const returnEmoji = result.emoji;

        if (returnEmoji) {
            writeToClipboard(returnEmoji);
        }
    });
}

function writeToClipboard(returnEmoji) {
    clipboardy.write(returnEmoji)
        .then(() => {
            console.log(`Copied ${returnEmoji} to clipboard!`);
        })
        .catch(() => {
            console.log(returnEmoji);
        });
}
