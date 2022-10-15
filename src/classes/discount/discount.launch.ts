
class DiscountLaunch implements IDiscount {

    public apply(price:number){
      return price * 0.4;
    }
  }