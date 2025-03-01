/**
 * Преобразует пиксели в единицы em.
 *
 * Пример использования в стилях:
 * font-size: em(px, current)
 *
 * @param {number} px - количество пикселей для преобразования
 * @param {number} current - текущий размер шрифта в пикселях (по умолчанию 16)
 * @return {string} результат в единицах em
 */
function em(px: number, current: number = 16): string {
	return `${px / current}em`;
}

export default em;
