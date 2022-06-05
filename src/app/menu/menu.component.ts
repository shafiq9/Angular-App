import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand} from '../animations/app.animation';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  leaders: Leader[];
  selectedLeader: Leader;
  errMess: string;


  constructor(private dishService: DishService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe((dishes) => this.dishes = dishes,
    errmess => this.errMess = <any>errmess);
    this.leaderService.getLeaders().subscribe((leaders) => this.leaders = leaders);
  }

  onSelect(leader: Leader) {
  this.selectedLeader = leader;
  }

}
