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
		protected name: string,
		protected sellIn: number,
		protected quality: number
	) {}

	static createFrom(item: Item) {
		return InnItem.createFromNew(item);
	}

	static createFromNew(item: Item) {
		switch (this.name) {
			case 'Aged Brie':
				return new AgedBrie('Aged Brie', item.sellIn, item.quality);
			case 'Backstage passes to a TAFKAL80ETC concert':
				return new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', item.sellIn, item.quality);
			case 'Sulfuras, Hand of Ragnaros':
				return new Sulfuras('Sulfuras, Hand of Ragnaros', item.sellIn, item.quality);
				break;
			default:
				return new InnItem(item.name, item.sellIn, item.quality);
		}
	}

	updateQuality() {
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

class AgedBrie extends InnItem {
	updateQuality() {
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
}
class BackstagePasses extends InnItem {
	updateQuality() {
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
}

class Sulfuras extends InnItem {
	updateQuality() {}
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
