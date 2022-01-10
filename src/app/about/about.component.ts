import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader'
import {LeaderService} from '../services/leader.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  leaders: Leader[];
  leader: any;


  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
    this.leaderservice.getLeaders().subscribe((leaders) => this.leaders = leaders);
  }

}
