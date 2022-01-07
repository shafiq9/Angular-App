import { Component, OnInit } from '@angular/core';
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
  selectedDish: Dish;
  selectedLeader: Leader;


  constructor(private dishService: DishService,
    private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getDishes().then((dishes) => this.dishes = dishes);
    this.leaderService.getLeaders().then((leaders) => this.leaders = leaders);
    // this.leaders = this.leaderService.getLeaders();
  }

  onSelect(dish: Dish, leader: Leader) {
  this.selectedDish = dish;
  this.selectedLeader = leader;
  }

}
