import {atom} from 'recoil';

import {ModelLoad} from '../@types/atoms';

export const isModelLoadState = atom<ModelLoad>({
  key: 'isModelLoad',
  default: ModelLoad.noLoad,
});
