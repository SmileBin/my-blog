import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';

import * as _ from 'lodash';

import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';
import { environment } from '../../../environments/environment.prod';
import { ScriptLoaderService } from '../../common/script-loader/script-loader.service';
import { PostDetailService } from './post-detail.service';

declare var naver: any;
declare var google: any;

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  postId: string;
  watchId: number;
  postInfo: any;
  paintFlag: boolean = false;

  mapOptions: any = {};
  mapEl: any;
  targetScript: any = {};
  myLocation: any;
  mapType: string;

  title: string;
  subTitle: string;


  filePath: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sideNvFlg: SidenavFlagService,
    private scriptSvc: ScriptLoaderService,
    private postDetailSvc: PostDetailService
  ) {
    this.postId = route.snapshot.params['postId'];
  }

  ngOnInit() {
    this.postDetailSvc.loadPost(this.postId).subscribe(result => {
      this.postInfo = result;
      if (_.isNil(this.postInfo)) {
        this.router.navigateByUrl('/blog');
      }

      this.paintFlag = true;

      if (this.postInfo.mapDiv) {
        this.mapType = this.postInfo.mapDiv;
        this.targetScript = {
          name: this.postInfo.mapDiv,
          src: this.mapType === 'naver' ? `${environment.naverMapScript}?clientId=${environment.clientId}&submodules=geocoder`
                                  : `${environment.googleMapScript}?key=${environment.clientKey}`,
          loaded: false
        };

        // load map
        const loaded$ = this.initMapLoading();
        loaded$.subscribe(data => { /* console.log(data); */ });
      }
    });
  }

  ngOnDestroy(): void {
    this.mapOptions = null;
    this.mapEl = null;
    navigator.geolocation.clearWatch(this.watchId);
  }

  goToNaver() {
    if (this.mapType === 'naver') {
      this.mapEl.panToBounds(new naver.maps.LatLngBounds(
        new naver.maps.LatLng(37.3595704, 127.105399),
        new naver.maps.LatLng(37.3595704, 127.105399)));
    } else {
      this.mapEl.panToBounds(new google.maps.LatLngBounds(
        new google.maps.LatLng(37.3595704, 127.105399),
        new google.maps.LatLng(37.3595704, 127.105399)));
    }
  }

  getPosition(): Observable<Position> {
    return Observable.create(observer => {
      if (window.navigator.geolocation) {
        this.watchId = navigator.geolocation.watchPosition(pos => {
          observer.next(pos);
          observer.complete();
        }, error => {
          console.error('Geolocation error');
          observer.error(null);
        });
      } else {
        console.error('Geolocation not supported');
        observer.error(null);
      }
    });
  }

  initMapLoading() {
    return Observable.forkJoin(
      this.getPosition(),
      this.scriptSvc.load(this.targetScript)
    ).switchMap(
      ([position, result]) => {
        console.log(position, result);
        const letitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        if (result.loaded) {
          if (this.mapType === 'naver') {
            const mapOptions =  {
              center: new naver.maps.LatLng(letitude, longitude),
              zoom: 10,
              zoomControl: true,
              zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT
              }
            };
            this.mapEl = new naver.maps.Map('map', mapOptions);
          } else {
            const mapOptions = {
              zoom: 15,
              zoomControl: true,
              center: new google.maps.LatLng(letitude, longitude),
              mapTypeControlOptions: {
                mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
              }
            };
            this.mapEl = new google.maps.Map(document.querySelector('#map'), mapOptions);
          }
        }
        return Observable.of(Object.assign({}, result, position));
      });
  }

  sideNavToggle() {
    this.sideNvFlg.toggleSidebar();
  }
}
