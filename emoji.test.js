'use strict';

const emoji = require('./emoji');

test('get rainbow emoji using exact match', () => {
    expect(emoji('rainbow')).toEqual('🌈');
});

test('get rainbow emoji using fuzzy search', () => {
    expect(emoji('rainb')).toEqual('🌈');
});
