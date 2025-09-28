import { Item, GildedRose } from '../core/gildedRose';

describe('The Gilded Rose', () => {
	it('updates quality for a new item', () => {
		const gildedRose = new GildedRose(
			generationCombinationOfItems(
				['new item', 'Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros'],
				range(-1, 11),
				range(0, 51)
			)
		);

		const items = gildedRose.updateQuality();

		expect(items).toMatchSnapshot();
	});
});

function generationCombinationOfItems(names: string[], sellInDays: number[], qualities: number[]) {
	return names.flatMap((name) => {
		return sellInDays.flatMap((sellInDay) => {
			return qualities.flatMap((qualities) => {
				return new Item(name, sellInDay, qualities);
			});
		});
	});
}

function range(min: number, max: number) {
	const length = max - min + 1;
	return Array.from({ length }, (_, i: number) => min + i);
}
