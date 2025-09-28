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
			if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
				continue;
			}
			if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
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
			if (this.items[i].sellIn < 0) {
				if (this.items[i].name != 'Aged Brie') {
					if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
						if (this.canDecreaseItemQuality(i)) {
							this.decreaseItemQuality(i);
						}
					} else {
						this.items[i].quality = this.items[i].quality - this.items[i].quality;
					}
				} else {
					if (this.canIncreaseQuality(i)) {
						this.increaseItemQuality(i);
					}
				}
			}
		}
		return this.items;
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
