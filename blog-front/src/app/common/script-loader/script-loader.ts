import { environment } from '../../../environments/environment';

interface Scripts {
  name: string;
  src: string;
}

export const scriptStore: Scripts[] = [
  {name: 'naver-map-addr', src: environment.naverMapScript}
];
