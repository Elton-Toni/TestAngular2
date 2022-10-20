import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { User } from '../../classes/user';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
})
export class UserdetailComponent implements OnInit {
  baseUrl = 'https://jsonplaceholder.typicode.com/users';
  public user: User = new User();

  constructor(
    private repSrv: RepositoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // 1)
    // this.user.id = +this.route.snapshot.paramMap.get('id');

    // 2)
    // this.route.paramMap
    //   .pipe(
    //     map((params) => params.get('id')),
    //     tap((id) => (this.user.id = +id))
    //   )
    //   .subscribe();

    // 3)
    route.params.forEach((params: Params) => {
      this.user.id = +params['id'];
    });

    console.log(this.user.id);
  }

  ngOnInit() {
    if (this.user.id !== 0) {
      this.repSrv
        .getWithLinkBaseById<User>(this.baseUrl, this.user.id)
        .subscribe(
          (data: User) => {
            this.user = data;
            // console.log(this.user);
          },
          (err: any) => console.error(err)
        );
    }
  }

  onSubmit() {
    // console.log(this.user);

    if (this.user.id === 0) {
      this.repSrv
        .postWithLinkBase(this.baseUrl, this.user)
        .subscribe((data) => {
          this.user = data;
          this.router.navigate(['/userlist']);
        });
    } else {
      this.repSrv
        .putWithLinkBase(this.baseUrl, this.user.id, this.user)
        .subscribe((data) => {
          this.user = data;
          this.router.navigate(['/userlist']);
        });
    }
  }
}
