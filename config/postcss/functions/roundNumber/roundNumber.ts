/**
 * Округляет число до указанного количества десятичных знаков.
 *
 * @param {number} number - число, которое нужно округлить
 * @param {number} decimals - количество десятичных знаков, до которых нужно округлить, по умолчанию 0
 * @return {number} округленное число
 */
function roundNumber(number: number, decimals: number = 0): number {
	let n: number = 1;

	if (decimals > 0) {
		for (let i = 1; i <= decimals; i++)
			n = n * 10;
	}
	return Math.round(number * n) / n;
}

export default roundNumber;
