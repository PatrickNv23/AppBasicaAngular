import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any
  constructor(public usersService: UserServiceService) {

  }

  ngOnInit() {
    this.usersService.getAll().subscribe(data => {
      this.users = data;
    })
  }
}
