import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  //Filter
  filterKey: string = 'name';
  phrase: string = '';

  //Sorter
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
    this.userService.remove(user);
    this.router.navigate(["/"])
  }

}
