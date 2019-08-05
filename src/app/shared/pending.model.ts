export class PendingModel {
  public type: string; // request/offer
  public uidService: string;
  public price: any; //price / uidService if barter
  public fromUser: string;
  public toUser: string;
  public timestamp: any;
  public shownToB: boolean; //aratat posibilului prestator
  public shownToP: boolean; // aratat posibilului beneficiar
  public pictureFromUser: string;
  public pictureToUser: string;
  public actions: any;

  constructor ( type: string,
                uidService: string,
                price: any,
                fromUser: string,
                toUser: string,
                timestamp: any,
                shownToB: boolean,
                shownToP: boolean,
                pictureFromUser: string,
                pictureToUser: string,
                actions: any) {
    this.type = type;
    this.uidService = uidService;
    this.price = price;
    this.fromUser = fromUser;
    this.toUser = toUser;
    this.timestamp = timestamp;
    this.shownToB = shownToB;
    this.shownToP = shownToP;
    this.pictureFromUser = pictureFromUser;
    this.pictureToUser = pictureToUser;
    this.actions = actions;
  }
}
