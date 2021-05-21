import React from 'react';
import {Tensor} from 'onnxruntime-web';

export default abstract class BaseOperation {
  abstract inputTensor(ctx: CanvasRenderingContext2D): Tensor;
  abstract outputTensor<T>(
    tensor: Tensor,
    refs: React.MutableRefObject<T>
  ): void;
}
