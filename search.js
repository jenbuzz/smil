'use strict';

const emojilib = require('emojilib');
const fuzzysearch = require('fuzzysearch');

module.exports = input => {
    const searchResults = [];

    Object.keys(emojilib.lib).forEach(name => {
        if (typeof input !== 'undefined' & input !== '') {
            const result = fuzzysearch(input, name);
            if (result) {
                searchResults.push(emojilib.lib[name].char);
            }
        } else {
            searchResults.push(emojilib.lib[name].char);
        }
    });

    return searchResults;
};
