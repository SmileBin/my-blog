import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class SidenavFlagService {
    isSidebarVisible = false;

    private sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

    // constructor() {
    //     this.sidebarVisibilityChange.subscribe((value) => {
    //         this.isSidebarVisible = value;
    //     });
    // }

    toggleSidebarVisibilty() {
        console.log('transferring');
        this.sidebarVisibilityChange.next(true);
    }

    getSideStatus(): Observable<any> {
        return this.sidebarVisibilityChange.asObservable();
    }
}