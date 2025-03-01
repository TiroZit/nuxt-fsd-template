import rem from '../rem';
import roundNumber from '../roundNumber';

/**
 * Генерирует отзывчивое значение с использованием заданных минимального и максимального значения, точек остановки и единицы измерения.
 *
 * Пример использования в стилях:
 * font-size: fluid(24, 16, 320, 1920, 'vw');
 *
 * @param {number} maxSize - максимальное значение в пикселях
 * @param {number} minSize - минимальное значение в пикселях
 * @param {number} [minBreakpoint] - минимальная ширина точки остановки в пикселях
 * @param {number} [maxBreakpoint] - максимальная ширина точки остановки в пикселях
 * @param {string} [unit] - единица измерения для расчета значения
 * @return {string} функция CSS clamp для отзывчивого значения
 */
function fluid(maxSize: number, minSize: number, minBreakpoint: number = 375, maxBreakpoint: number = 1920, unit: string = 'vw'): string {
	const slope: number = (maxSize - minSize) / (maxBreakpoint - minBreakpoint);
	const slopeToUnit: number = roundNumber(slope * 100, 7);
	const interceptRem: number = roundNumber(rem(minSize - slope * minBreakpoint), 7);
	const minSizeRem: number = roundNumber(rem(minSize), 5);
	const maxSizeRem: number = roundNumber(rem(maxSize), 5);

	return `clamp(${minSizeRem}rem, ${slopeToUnit}${unit} + ${interceptRem}rem, ${maxSizeRem}rem)`;
}

export default fluid;
