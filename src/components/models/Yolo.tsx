import React from 'react';
import {Frame} from '../Frame';
import {ModelLoad} from '../../@types/atoms';
import {useRecoilState} from 'recoil';
import {isModelLoadState} from '../../utils/recoilAtoms';

export const Yolo = () => {
  const [isModelLoad, setIsModelLoad] = useRecoilState(isModelLoadState);
  React.useEffect(() => {
    setIsModelLoad(ModelLoad.loading);
    setTimeout(() => {
      setIsModelLoad(ModelLoad.success);
    }, 1000);
  }, []);
  return (
    <Frame
      pageName="Yolo"
      isModelLoad={isModelLoad}
      cameraButton={() => {
        setIsModelLoad(ModelLoad.success);
      }}
    >
      This is Yolo
    </Frame>
  );
};
