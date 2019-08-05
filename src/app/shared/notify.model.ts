export class NotifyModel {
  public timestamp: any;
  public type: string;
  public isValidation: boolean;
  public isShown: boolean;

  constructor(timestamp: any,
              type: string,
              isValidation: boolean,
              isShown: boolean){
    this.timestamp = timestamp;
    this.type = type;
    this.isValidation = isValidation;
    this.isShown = isShown;
  }
}
