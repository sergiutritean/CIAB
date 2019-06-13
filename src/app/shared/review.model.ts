export class ReviewModel {
  public rating: number;
  public imagePath: string[];
  public content: string;
  public fromUser: string;
  public idService: string;
  public title: string;
  public reviewUID: string;

  constructor(title: string,
              content: string,
              rating: number,
              imagePath: string[],
              fromUser: string,
              idService: string,
              reviewUID: string) {

    this.title = title;
    this.rating = rating;
    this.imagePath = imagePath;
    this.content = content;
    this.fromUser = fromUser;
    this.idService = idService;
    this.reviewUID = reviewUID;
  }

}
