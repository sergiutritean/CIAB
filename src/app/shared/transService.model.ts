export class TransServiceModel{
  public type: string;
  public uidService: string;
  public status: string;
  public fromUser: string;
  public toUser: string;
  public pictureFromUser: string;
  public pictureToUser: string;
  public price: string;
  public timestamp: any;

  constructor( type: string,
               uidService: string,
               status: string,
               fromUser: string,
               toUser: string,
               pictureFromUser: string,
               pictureToUser: string,
               price: string,
               timestamp: any){
    this.type = type;
    this.uidService = uidService;
    this.status = status;
    this.fromUser = fromUser;
    this.toUser = toUser;
    this.pictureFromUser = pictureFromUser;
    this.pictureToUser = pictureToUser;
    this.price = price;
    this.timestamp = timestamp;
  }
}
