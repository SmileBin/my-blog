import { WebsocketService } from '../../common/websocket/websocket.service';
import { MainService } from './main.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap/tabset/tabset';
import { Subject } from 'rxjs/Subject';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('tabs') tabGroup: NgbTabset;
  selectFirst = true;
  selectSecond = false;

  postData: any;

  wsData: any;

  constructor(
    private mainService: MainService,
    private sideNvFlg: SidenavFlagService,
    private wsService: WebsocketService
  ) { }

  ngOnInit() {
    this.mainService.getPostsList().subscribe(
      result => this.postData = result['posts']
    );

    this.sideNvFlg.toggleStatus.subscribe(value => console.log('main', value));

    // this.wsService.connect('ws://localhost:4000/').subscribe(result => console.log(result));
    // this.wsData = this.wsService
    // .connect('ws://localhost:4080/')
    // .map((response: MessageEvent)  => {
    //   let data = JSON.parse(response.data);
    //   return {
    //     author: data.author,
    //     message: data.message
    //   };
    // });
    // this.wsData
  }

  sideNavToggle() {
    this.sideNvFlg.toggleSidebar();
  }

  goToTab(tab) {
    this.tabGroup.select(tab);
    if (tab === 'posts') {
      this.selectFirst = true;
      this.selectSecond = false;
    } else {
      this.selectFirst = false;
      this.selectSecond = true;
    }
  }
}
