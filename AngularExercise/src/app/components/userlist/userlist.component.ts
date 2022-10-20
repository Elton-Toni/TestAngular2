import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { RepositoryService } from '../../services/repository.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class UserlistComponent implements OnInit {
  baseUrl = 'https://jsonplaceholder.typicode.com/users';
  users: User[];

  constructor(
    private repSrv: RepositoryService,
    private modalconfig: NgbModalConfig,
    private modalService: NgbModal,
    private router: Router
  ) {
    // customize default values of modals used by this component tree
    this.modalconfig.backdrop = 'static';
    this.modalconfig.keyboard = false;
  }

  ngOnInit() {
    this.repSrv.getWithLinkBase<User[]>(this.baseUrl).subscribe((data) => {
      this.users = data;
      // console.log(this.users[0]);
    });
  }
  open(content) {
    this.modalService.open(content);
  }

  deleteUser(id: number) {
    // setTimeout(() => {
      this.repSrv.deleteWithLinkBase(this.baseUrl, id).subscribe(() => {
        // window.location.reload();

        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // // this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url]);

        // window.scrollTo(0, 0);
      });
    // }, 1000);
  }
}
