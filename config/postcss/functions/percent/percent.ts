/**
 * Рассчитывает процентное представление значения относительно другого значения.
 *
 * Пример использования в стилях:
 * font-size: percent(px, from)
 *
 * @param {number} px - значение, которое нужно представить в процентах
 * @param {number} from - общее значение для расчета процента
 * @return {string} процентное представление значения
 */
function percent(px: number, from: number): string {
	const result: string = `${(px / from) * 100}%`;
	return result;
}

export default percent;
