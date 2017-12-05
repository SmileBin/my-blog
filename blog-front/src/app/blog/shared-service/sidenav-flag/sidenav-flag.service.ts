import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidenavFlagService {
    sidebarOpen = false;

    private sidebarStatusChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.sidebarOpen);

    toggleStatus = this.sidebarStatusChange.asObservable();

    toggleSidebar() {
        console.log('toggling in service');
        this.sidebarOpen = !this.sidebarOpen;
        this.sidebarStatusChange.next(this.sidebarOpen);
    }

}
