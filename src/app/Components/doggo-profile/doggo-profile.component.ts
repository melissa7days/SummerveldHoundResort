import { Component, OnInit } from '@angular/core';
import { Doggo } from 'src/app/Models/doggo';
import { DoggoProfileService } from 'src/app/Services/doggo-profile/doggo-profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doggo-profile',
  templateUrl: './doggo-profile.component.html',
  styleUrls: ['./doggo-profile.component.css']
})
export class DoggoProfileComponent implements OnInit {
  doggo: Doggo;
  
  constructor(private doggoService: DoggoProfileService,  private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  getd(){
    const doggoId = this.route.snapshot.paramMap.get('doggoId');
    this.doggoService.getDoggoById(doggoId).subscribe(info => {
      this.doggo = info;
    })
    console.log(this.doggo);
  }


}
