import { Component, OnInit } from '@angular/core';
import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.scss']
})
export class WhoamiComponent implements OnInit {

  constructor(private sideNvFlg: SidenavFlagService) { }

  ngOnInit() {
  }

  sideNavToggle() {
    this.sideNvFlg.toggleSidebar();
  }

}
