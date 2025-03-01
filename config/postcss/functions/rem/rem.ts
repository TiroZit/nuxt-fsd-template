/**
 * Функция для преобразования пикселей в единицы rem.
 *
 * @param {number} px - Количество пикселей для преобразования
 * @return {number} Результат преобразования в единицы rem
 */
function rem(px: number): number {
	return px / 16;
}

export default rem;
