export class Item {
	name: string;
	sellIn: number;
	quality: number;

	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

export class GildedRose {
	items: Array<Item>;

	constructor(items = []) {
		this.items = items;
	}

	updateQuality() {
		for (let i = 0; i < this.items.length; i++) {
			const item = this.items[i];
			this.updateQualityFor(item);
		}
		return this.items;
	}

	private updateQualityFor(item: Item) {
		switch (item.name) {
			case 'Aged Brie':
				this.updateAgedBrieQualityItem(item);
				break;
			case 'Backstage passes to a TAFKAL80ETC concert':
				this.updateBackstagePassesQuality(item);
				break;
			case 'Sulfuras, Hand of Ragnaros':
				break;
			default:
				this.updateStandardItemQuality(item);
				break;
		}
	}

	private updateStandardItemQuality(item: Item) {
		if (item.quality > 0) {
			item.quality = item.quality - 1;
		}
		item.sellIn = item.sellIn - 1;
		if (item.sellIn < 0) {
			if (item.quality > 0) {
				item.quality = item.quality - 1;
			}
		}
	}

	private updateBackstagePassesQuality(item: Item) {
		if (item.quality < 50) {
			item.quality = item.quality + 1;
			if (item.sellIn < 11) {
				if (item.quality < 50) {
					item.quality = item.quality + 1;
				}
			}
			if (item.sellIn < 6) {
				if (item.quality < 50) {
					item.quality = item.quality + 1;
				}
			}
		}
		item.sellIn = item.sellIn - 1;
		if (item.sellIn < 0) {
			item.quality = item.quality - item.quality;
		}
	}

	private updateAgedBrieQualityItem(item: Item) {
		if (item.quality < 50) {
			item.quality = item.quality + 1;
		}
		item.sellIn = item.sellIn - 1;
		if (item.sellIn < 0) {
			if (item.quality < 50) {
				item.quality = item.quality + 1;
			}
		}
	}
}
