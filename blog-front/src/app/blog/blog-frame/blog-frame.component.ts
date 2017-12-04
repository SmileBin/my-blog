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
    this.subscription = this.sideNvFlg.getSideStatus().subscribe(value => {
      console.log(value);
      console.log(123);
      this.sideNv.toggle();
    });
  }
  ngOnInit(){

  }

  ngOnChanges(e) {
    console.log('asdf');

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // toggleSideBar(event: any){
  //   console.log('ok');
  //   this.sideNv.toggle();
  // }

}
