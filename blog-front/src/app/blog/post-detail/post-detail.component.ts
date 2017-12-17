import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postId: string;

  constructor(private route: ActivatedRoute, private sideNvFlg: SidenavFlagService) {
    this.postId = route.snapshot.params['postId'];
  }

  ngOnInit() {
    console.log(this.postId);
  }

  sideNavToggle() {
    this.sideNvFlg.toggleSidebar();
  }

}
