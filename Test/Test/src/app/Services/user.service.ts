import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public userId=123456789;
  public userName="Ester";

  may(user:User): boolean
  {
    return user.name==this.userName && user.id==this.userId;
  }

}
