/**
 * Функция для преобразования пикселей в единицы rem.
 *
 * @param {number} px - Количество пикселей для преобразования
 * @return {number} Результат преобразования в единицы rem
 */
function rem(px: number): number {
	const result: number = (px / 16) * 1;
	return result;
}

export default rem;
