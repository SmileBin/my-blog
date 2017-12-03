import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';

@Component({
  selector: 'blog-frame',
  templateUrl: './blog-frame.component.html',
  styleUrls: ['./blog-frame.component.scss']
})
export class BlogFrameComponent implements OnInit, OnChanges {

  @ViewChild('sidenav') sideNv;
  isOpen = false;
  asideVisible: boolean;

  constructor(private sideNvFlg: SidenavFlagService) { 
    this.sideNvFlg.sidebarVisibilityChange.subscribe(value => {
      console.log('Changed!');
    });
  }

  ngOnChanges(e){
    console.log('asdf');

  }

  ngOnInit() {
    // this.sideNvFlg.navClicked.subscribe(value => {
    //   console.log(value);
    //   console.log(123); 
    //   this.sideNv.toggle();
    // });
    
  }

  // toggleSideBar(event: any){
  //   console.log('ok');
  //   this.sideNv.toggle();
  // }

}
