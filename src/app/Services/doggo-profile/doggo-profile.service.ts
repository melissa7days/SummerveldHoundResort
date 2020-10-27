import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Doggo } from 'src/app/Models/doggo';

@Injectable({
  providedIn: 'root'
})
export class DoggoProfileService {
  constructor() { }
  private newUser = new BehaviorSubject<Doggo>({
    doggoId: 0, 
    doggoName: '',        
    doggoProfilePic: '',
    doggoDescription: '', 
    doggoNickname: '',    
    doggoDateCreated: new Date(Date.now())
  });

  passData(doggo: Doggo){
    this.newUser.next(doggo);
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }
}
