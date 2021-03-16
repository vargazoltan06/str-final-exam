import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  filterKey: string = 'name';
  phrase: string = '';

  columnKey: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  onSelect(key: string): void {
    this.columnKey = key
  }

  onDelete(user: User): void {
    if (window.confirm('Are you sure you want to delete this item ?')) {
      this.userService.remove(user),
        this.router.routeReuseStrategy.shouldReuseRoute = () => false; this.router.navigate([this.router.url]);
    }
  }

}
