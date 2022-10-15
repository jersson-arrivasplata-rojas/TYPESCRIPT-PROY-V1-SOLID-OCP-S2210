

class Discount implements IDiscount{

  apply(price: number): number {
    return price * 0.5;
  }

}