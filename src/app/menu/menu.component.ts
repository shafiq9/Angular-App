import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  leaders: Leader[];
  selectedLeader: Leader;


  constructor(private dishService: DishService,
    private leaderService: LeaderService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe((dishes) => this.dishes = dishes);
    this.leaderService.getLeaders().subscribe((leaders) => this.leaders = leaders);
  }

  onSelect(leader: Leader) {
  this.selectedLeader = leader;
  }

}
