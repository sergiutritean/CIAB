export class User {

  public name: string;
  public uid: string;
  public email: string;
  public accountType: string;
  public phone: string;
  public location: string;
  public rating: number;
  public desc: string;
  public username: string;
  public barter: boolean;

  constructor (name: string,
               uid: string,
               email: string,
               accountType: string,
               phone: string,
               location: string,
               rating: number,
               desc: string,
               username: string,
               barter: boolean) {

    this.name = name;
    this.uid = uid;
    this.email = email;
    this.accountType = accountType;
    this.phone = phone;
    this.location = location;
    this.rating = rating;
    this.desc = desc;
    this.username = username;
    this.barter = barter;
  }
}
