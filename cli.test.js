'use strict';

const spawnSync = require('child_process').spawnSync;

test('get rainbow emoji using exact match', () => {
    const result = spawnSync(
        './cli.js',
        ['rainbow'],
        {encoding: 'utf-8'}
    ).stdout.replace(/(\r\n|\n|\r)/gm, '');

    expect(result).toEqual('🌈');
});

test('get rainbow emoji using fuzzy search', () => {
    const result = spawnSync(
        './cli.js',
        ['rainb'],
        {encoding: 'utf-8'}
    ).stdout.replace(/(\r\n|\n|\r)/gm, '');

    expect(result).toEqual('🌈');
});
