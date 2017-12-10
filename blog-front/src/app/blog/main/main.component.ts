import { MainService } from './main.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('posts') postList;
  @ViewChild('categories') categoryList;
  
  postData: any;

  constructor(private mainService: MainService, private sideNvFlg: SidenavFlagService) { }

  ngOnInit() {
    this.mainService.getPostsList().subscribe(
      result => this.postData = result['posts']
    );

    this.sideNvFlg.toggleStatus.subscribe(value => console.log('main', value));
  }

  sideNavToggle() {
    this.sideNvFlg.toggleSidebar();
  }

  goToTab(tab){
    console.log('Active Tab', tab);

  }
}
