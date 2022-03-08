"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
/**
 *
 * @param dateString date as a string to be converted to type Date
 * @returns new Date with year, month( zero indexed) and day based on dateString
 */
const dateStringToDate = (dateString) => {
    const dateArray = dateString
        .split('/')
        .map((value) => parseInt(value));
    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
};
exports.dateStringToDate = dateStringToDate;
