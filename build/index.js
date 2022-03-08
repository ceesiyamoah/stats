"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUwins = 0;
for (let match of matchReader.matches) {
    if ((match[1] === 'Liverpool' && match[5] === MatchResult_1.MatchResult.HomeWin) ||
        (match[2] === 'Liverpool' && match[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUwins++;
    }
}
console.log(manUwins);
