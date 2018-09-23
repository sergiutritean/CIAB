import { from } from 'rxjs/index';

export class Review {
  public rating: number;
  public imagePath: string[];
  public content: string;
  public fromUser: string;
  public dest: {
    isUser: boolean;
    id: string;
  };

  constructor(rating: number,
              imagePath: string[],
              content: string,
              fromUser: string,
              dest: {isUser: boolean, id: string}) {
    this.rating = rating;
    this.imagePath = imagePath;
    this.content = content;
    this.fromUser = fromUser;
    this.dest = dest;
  }

}
