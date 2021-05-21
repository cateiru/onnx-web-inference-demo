import {TopPage} from '../components/TopPage';
import {Yolo} from '../components/models/Yolo';

export interface Page {
  name: string;
  path: string;
  page: JSX.Element;
}

export const topPage: Page = {
  name: 'Home',
  path: '/',
  page: <TopPage />,
};

export const pages: Page[] = [
  {
    name: 'Yolo',
    path: '/yolo',
    page: <Yolo />,
  },
];
