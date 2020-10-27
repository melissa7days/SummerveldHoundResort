import { Component, OnInit } from '@angular/core';
import { Doggo } from 'src/app/Models/doggo';
import { DoggoProfileService } from 'src/app/Services/doggo-profile/doggo-profile.service';

@Component({
  selector: 'app-doggo-profile',
  templateUrl: './doggo-profile.component.html',
  styleUrls: ['./doggo-profile.component.css']
})
export class DoggoProfileComponent implements OnInit {
  doggo: any;
  
  constructor(private doggoService: DoggoProfileService) { }

  ngOnInit(): void {
    this.doggoService.getNewUserInfo().subscribe(info => {
      this.doggo = info;
    })
    console.log(this.doggo);
  }

}
