'use strict';

const search = require('./search');

test('get rainbow emoji using search', () => {
    const searchResults = search('rainbow');

    expect(searchResults).toHaveLength(2);
    expect(searchResults[0]).toEqual('🌈');
});