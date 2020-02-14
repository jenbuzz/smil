'use strict';

const search = require('./search');

test('get rainbow emoji using search', () => {
    const searchResults = search('rainbow');

    expect(searchResults).toHaveLength(2);
    expect(searchResults[0]).toEqual('🌈');
});

test('get thumbsup emoji using search on keywords', () => {
    const searchResults = search('thumbs');

    expect(searchResults).toHaveLength(2);
    expect(searchResults[0]).toEqual('👍');
});

test('get all emojis using search', () => {
    const searchResults = search('');

    expect(Array.isArray(searchResults)).toBe(true);
});
