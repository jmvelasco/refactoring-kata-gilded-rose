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
			if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
				this.updateBackstagePassesQuality(i, item);
			} else {
				if (this.items[i].quality > 0) {
					this.items[i].quality = this.items[i].quality - 1;
				}
				this.items[i].sellIn = this.items[i].sellIn - 1;
				if (item.sellIn < 0) {
					if (this.items[i].quality > 0) {
						this.items[i].quality = this.items[i].quality - 1;
					}
				}
			}
		}
	}

	private updateBackstagePassesQuality(i: number, item: Item) {
		if (this.items[i].quality < 50) {
			this.items[i].quality = this.items[i].quality + 1;
			this.itemInTheBackstage(i);
		}
		this.items[i].sellIn = this.items[i].sellIn - 1;
		if (item.sellIn < 0) {
			item.quality = item.quality - item.quality;
		}
	}

	private updateAgedBrieQualityItem(i: number, item: Item) {
		if (this.items[i].quality < 50) {
			this.items[i].quality = this.items[i].quality + 1;
			this.itemInTheBackstage(i);
		}
		this.items[i].sellIn = this.items[i].sellIn - 1;
		if (item.sellIn < 0) {
			if (this.items[i].quality < 50) {
				this.items[i].quality = this.items[i].quality + 1;
			}
		}
	}

	private itemInTheBackstage(i: number) {
		if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
			if (this.items[i].sellIn < 11) {
				if (this.items[i].quality < 50) {
					this.items[i].quality = this.items[i].quality + 1;
				}
			}
			if (this.items[i].sellIn < 6) {
				if (this.items[i].quality < 50) {
					this.items[i].quality = this.items[i].quality + 1;
				}
			}
		}
	}
}
