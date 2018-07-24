'use strict';

const emojilib = require('emojilib');
const search = require('./search');

module.exports = input => {
    if (emojilib.lib[input] && emojilib.lib[input].char) {
        return emojilib.lib[input].char;
    }

    const searchResults = search(input);

    if (searchResults.length > 0) {
        return searchResults[0];
    }
};
