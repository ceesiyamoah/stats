import fs from 'fs';

const matches = fs
	.readFileSync('football.csv', {
		encoding: 'utf-8',
	})
	.split('\n')
	.map((row: string): string[] => row.split(','));

let manUwins = 0;
for (let match of matches) {
	if (
		(match[1] === 'Liverpool' && match[5] === 'H') ||
		(match[2] === 'Liverpool' && match[5] === 'A')
	) {
		manUwins++;
	}
}

console.log(manUwins);