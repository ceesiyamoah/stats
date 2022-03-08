import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
let manUwins = 0;
for (let match of matchReader.matches) {
	if (
		(match[1] === 'Liverpool' && match[5] === MatchResult.HomeWin) ||
		(match[2] === 'Liverpool' && match[5] === MatchResult.AwayWin)
	) {
		manUwins++;
	}
}

console.log(manUwins);
