"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => row.split(','));
let manUwins = 0;
for (let match of matches) {
    if ((match[1] === 'Liverpool' && match[5] === 'H') ||
        (match[2] === 'Liverpool' && match[5] === 'A')) {
        manUwins++;
    }
}
console.log(manUwins);
