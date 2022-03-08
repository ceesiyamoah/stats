/**
 *
 * @param dateString date as a string to be converted to type Date
 * @returns new Date with year, month( zero indexed) and day based on dateString
 */
export const dateStringToDate = (dateString: string): Date => {
	const dateArray = dateString
		.split('/')
		.map((value: string): number => parseInt(value));

	return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
};
