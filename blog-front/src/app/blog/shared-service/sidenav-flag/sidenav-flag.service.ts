import { isObjectBindingPattern } from 'tsutils';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidenavFlagService {
    isSidebarVisible: boolean;

    sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

    constructor() {
        this.sidebarVisibilityChange.subscribe((value) => {
            this.isSidebarVisible = value
        });
    }

    toggleSidebarVisibilty() {
        console.log('transferring');
        this.sidebarVisibilityChange.next(!this.isSidebarVisible);
    }
}