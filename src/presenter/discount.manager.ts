
class DiscountManager {

    public apply(price: number, discount: IDiscount) {
        return discount.apply(price);
    }
}
