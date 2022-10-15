
class DiscountBlackFriday implements IDiscount {

  public apply(price: number) {
    return price * 0.3;
  }
}