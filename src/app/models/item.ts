export class Item {
    constructor(id, name, price, quantity, description, imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public id: number;
    public name: string;
    public price: number;
    public quantity: number;
    public description: string;
    public imageUrl: string;
}
