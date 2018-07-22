'use strict';

const emojilib = require('emojilib');
const fuzzysearch = require('fuzzysearch');

module.exports = input => {
    if (emojilib.lib[input] && emojilib.lib[input].char) {
        return emojilib.lib[input].char;
    }

    const searchResults = [];
    Object.keys(emojilib.lib).forEach(name => {
        const result = fuzzysearch(input, name);
        if (result) {
            searchResults.push(name);
        }
    });

    if (searchResults.length > 0) {
        return emojilib.lib[searchResults[0]].char;
    }
};
