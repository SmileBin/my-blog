import { MainService } from './main.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  postList: any;

  constructor(private mainService : MainService, private sideNvFlg: SidenavFlagService) { }

  ngOnInit() { 
    this.mainService.getPostsList().subscribe(
      result => this.postList = result['posts']
    );
  }

  sideNavToggle(){
    console.log('toggling!');
    this.sideNvFlg.toggleSidebarVisibilty();
  }
}
