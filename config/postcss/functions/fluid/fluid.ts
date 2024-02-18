import rem from '../rem';
import roundNumber from '../roundNumber';

/**
 * Генерирует отзывчивое значение с использованием заданных минимального и максимального значения, точек остановки и единицы измерения.
 *
 * Пример использования в стилях:
 * font-size: fluid(16, 24, 320, 1920, 'vw');
 *
 * @param {number} minSize - минимальное значение в пикселях
 * @param {number} maxSize - максимальное значение в пикселях
 * @param {number} [minBreakpoint] - минимальная ширина точки остановки в пикселях
 * @param {number} [maxBreakpoint] - максимальная ширина точки остановки в пикселях
 * @param {string} [unit] - единица измерения для расчета значения
 * @return {string} функция CSS clamp для отзывчивого значения
 */
function fluid(minSize: number, maxSize: number, minBreakpoint: number = 320, maxBreakpoint: number = 1920, unit: string = 'vw'): string {
	const slope: number = (maxSize - minSize) / (maxBreakpoint - minBreakpoint);
	const slopeToUnit: number = roundNumber(slope * 100, 2);
	const interceptRem: number = roundNumber(rem(minSize - slope * minBreakpoint), 2);
	const minSizeRem: number = roundNumber(rem(minSize), 2);
	const maxSizeRem: number = roundNumber(rem(maxSize), 2);

	return `clamp(${minSizeRem}rem, ${slopeToUnit}${unit} + ${interceptRem}rem, ${maxSizeRem}rem)`;
}

export default fluid;
