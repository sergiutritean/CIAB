export class ServiceModel {

  public barter: boolean;
  public title: string;
  public desc: string;
  public rating: number;
  public category: string;
  public imagePath: string[];
  public fromUser: string;
  public toUser: string;
  public uid: string;
  public isOffer: string;
  public status: string;
  public price: number;

  constructor(barter: boolean,
              title: string,
              desc: string,
              rating: number,
              category: string,
              imagePath: string[],
              fromUser: string,
              toUser: string,
              uid: string,
              isOffer: string,
              status: string,
              price: number) {

    this.barter = barter;
    this.title = title;
    this.desc = desc;
    this.rating = rating;
    this.category = category;
    this.imagePath = imagePath;
    this.fromUser = fromUser;
    this.toUser = toUser;
    this.uid = uid;
    this.isOffer = isOffer;
    this.status = status;
    this.price = price;
  }

}
