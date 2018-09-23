

export class Service {

  public barter: boolean;
  public title: string;
  public desc: string;
  public rating: number;
  public category: string;
  public imagePath: string[];
  public fromUser: string;
  public uid: string;

  constructor(barter: boolean,
              title: string,
              desc: string,
              rating: number,
              category: string,
              imagePath: string[],
              fromUser: string,
              uid: string) {

    this.barter = barter;
    this.title = title;
    this.desc = desc;
    this.rating = rating;
    this.category = category;
    this.imagePath = imagePath;
    this.fromUser = fromUser;
    this.uid = uid;
  }

}
