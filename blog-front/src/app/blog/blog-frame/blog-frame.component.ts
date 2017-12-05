import { Component, OnChanges, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';
import { Subscription } from 'rxjs/Subscription';

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
    console.log('con');
  }

  ngOnInit() {
    console.log('init');

     this.sideNvFlg.toggleStatus.subscribe(value => console.log('frame', value));
  }

  ngOnChanges(e) {
    console.log('asdf');

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  // toggleSideBar(event: any){
  //   console.log('ok');
  //   this.sideNv.toggle();
  // }

}
