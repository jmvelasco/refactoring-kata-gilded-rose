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
			if (item.name == 'Sulfuras, Hand of Ragnaros') {
				continue;
			}
			this.updateQualityItem(item, i);
		}
		return this.items;
	}

	private updateQualityItem(item: Item, i: number) {
		const isAgedBrie = item.name == 'Aged Brie';
		if (isAgedBrie) {
			this.updateAgedBrieQualityItem(i, item);
		} else {
			if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
				if (this.canDecreaseItemQuality(i)) {
					this.decreaseItemQuality(i);
				}
			} else {
				if (this.canIncreaseQuality(i)) {
					this.increaseItemQuality(i);
					this.itemInTheBackstage(i);
				}
			}
			this.decreaseItemSellIndays(i);
			if (item.sellIn < 0) {
				if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
					if (this.canDecreaseItemQuality(i)) {
						this.decreaseItemQuality(i);
					}
				} else {
					item.quality = item.quality - item.quality;
				}
			}
		}
	}

	private updateAgedBrieQualityItem(i: number, item: Item) {
		if (this.canIncreaseQuality(i)) {
			this.increaseItemQuality(i);
			this.itemInTheBackstage(i);
		}
		this.decreaseItemSellIndays(i);
		if (item.sellIn < 0) {
			if (this.canIncreaseQuality(i)) {
				this.increaseItemQuality(i);
			}
		}
	}

	private canDecreaseItemQuality(i: number) {
		return this.items[i].quality > 0;
	}

	private itemInTheBackstage(i: number) {
		if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
			if (this.items[i].sellIn < 11) {
				if (this.canIncreaseQuality(i)) {
					this.increaseItemQuality(i);
				}
			}
			if (this.items[i].sellIn < 6) {
				if (this.canIncreaseQuality(i)) {
					this.increaseItemQuality(i);
				}
			}
		}
	}

	private decreaseItemSellIndays(i: number) {
		this.items[i].sellIn = this.items[i].sellIn - 1;
	}

	private canIncreaseQuality(i: number) {
		return this.items[i].quality < 50;
	}

	private decreaseItemQuality(i: number) {
		this.items[i].quality = this.items[i].quality - 1;
	}

	private increaseItemQuality(i: number) {
		this.items[i].quality = this.items[i].quality + 1;
	}
}
