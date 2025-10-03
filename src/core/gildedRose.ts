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

export class InnItem {
	protected constructor(
		private name: string,
		private sellIn: number,
		private quality: number
	) {}

	static createFrom(item: Item) {
		return new InnItem(item.name, item.sellIn, item.quality);
	}

	updateQuality() {
		switch (this.name) {
			case 'Aged Brie':
				this.updateAgedBrieItemQuality();
				break;
			case 'Backstage passes to a TAFKAL80ETC concert':
				this.updateBackstagePassItemQuality();
				break;
			case 'Sulfuras, Hand of Ragnaros':
				break;
			default:
				this.updateStandardItemQuality();
				break;
		}
	}

	private updateAgedBrieItemQuality() {
		if (this.quality < 50) {
			this.quality = this.quality + 1;
		}
		this.sellIn = this.sellIn - 1;
		if (this.sellIn < 0) {
			if (this.quality < 50) {
				this.quality = this.quality + 1;
			}
		}
	}

	private updateBackstagePassItemQuality() {
		if (this.quality < 50) {
			this.quality = this.quality + 1;
			if (this.sellIn < 11) {
				if (this.quality < 50) {
					this.quality = this.quality + 1;
				}
			}
			if (this.sellIn < 6) {
				if (this.quality < 50) {
					this.quality = this.quality + 1;
				}
			}
		}
		this.sellIn = this.sellIn - 1;
		if (this.sellIn < 0) {
			this.quality = this.quality - this.quality;
		}
	}

	private updateStandardItemQuality() {
		if (this.quality > 0) {
			this.quality = this.quality - 1;
		}
		this.sellIn = this.sellIn - 1;
		if (this.sellIn < 0) {
			if (this.quality > 0) {
				this.quality = this.quality - 1;
			}
		}
	}

	toString() {
		return `InnItem {
    "name": "${this.name}",
    "quality": ${this.quality},
    "sellIn": ${this.sellIn},
  }`;
	}
}

export class GildedRose {
	constructor(public items: InnItem[]) {}

	updateQuality() {
		this.items.forEach((item) => {
			item.updateQuality();
		});

		return this.items;
	}
}
