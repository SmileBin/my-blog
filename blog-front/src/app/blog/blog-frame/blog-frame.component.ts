import { Component, OnChanges, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'blog-frame',
  templateUrl: './blog-frame.component.html',
  styleUrls: ['./blog-frame.component.scss']
})
export class BlogFrameComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('sidenav') sideNv;
  isOpen = false;
  asideVisible: boolean;
  subscription: Subscription;

  constructor(private sideNvFlg: SidenavFlagService) {
  }

  ngOnInit() {

    this.sideNvFlg.toggleStatus.subscribe(value => {
      if (value) {
        this.sideNv.open();
      } else {
        this.sideNv.close();
      }
    });
  }

  ngOnChanges(e) {
    // console.log('asdf');

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  goToGithub() {
    window.open(environment.currentBlogAddr);
  }

}
