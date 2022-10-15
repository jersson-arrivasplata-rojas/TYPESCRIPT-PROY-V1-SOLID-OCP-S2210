
class DiscountGold implements IDiscount  {

    public apply(price:number){
      return price * 0.2;
    }
  }