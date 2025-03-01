/**
 * Округляет число до указанного количества десятичных знаков.
 *
 * @param {number} number - число, которое нужно округлить
 * @param {number} decimals - количество десятичных знаков, до которых нужно округлить, по умолчанию 0
 * @return {number} округленное число
 */
function roundNumber(number: number, decimals: number = 0): number {
	const factor = 10 ** decimals;
	return Math.round(number * factor) / factor;
}

export default roundNumber;
