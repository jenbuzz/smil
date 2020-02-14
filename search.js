'use strict';

const emojilib = require('emojilib');
const fuzzysearch = require('fuzzysearch');

module.exports = input => {
    const searchResults = [];

    Object.keys(emojilib.lib).forEach(name => {
        if (typeof input !== 'undefined' && input !== '') {
            if (fuzzysearch(input, name)) {
                searchResults.push(emojilib.lib[name].char);
            } else {
                emojilib.lib[name].keywords.forEach(keyword => {
                    if (fuzzysearch(input, keyword)) {
                        searchResults.push(emojilib.lib[name].char);
                    }
                });
            }
        } else {
            searchResults.push(emojilib.lib[name].char);
        }
    });

    return searchResults;
};
