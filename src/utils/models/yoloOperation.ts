import ndarray from 'ndarray';
import ops from 'ndarray-ops';
import {Tensor} from 'onnxruntime-web';

export interface OutputsYolo {
  startX: number;
  startY: number;
  width: number;
  height: number;
  classProb: string;
  className: string;
}

export default class Yolo {
  private modelPath: string;
  constructor() {
    this.modelPath = '/models/tiny-yolov3-11.onnx';
  }

  /**
   * Used from onnxjs-demo (https://github.com/microsoft/onnxjs-demo/blob/master/src/components/models/Yolo.vue)
   */
  inputTensor(ctx: CanvasRenderingContext2D): Tensor {
    const imageData = ctx.getImageData(
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    );
    const {data, width, height} = imageData;
    // data processing
    const dataTensor = ndarray(new Float32Array(data), [width, height, 4]);
    const dataProcessedTensor = ndarray(new Float32Array(width * height * 3), [
      1,
      3,
      width,
      height,
    ]);
    ops.assign(
      dataProcessedTensor.pick(0, 0, null, null),
      dataTensor.pick(null, null, 0)
    );
    ops.assign(
      dataProcessedTensor.pick(0, 1, null, null),
      dataTensor.pick(null, null, 1)
    );
    ops.assign(
      dataProcessedTensor.pick(0, 2, null, null),
      dataTensor.pick(null, null, 2)
    );
    const tensor = new Tensor(new Float32Array(width * height * 3), [
      1,
      3,
      width,
      height,
    ]);

    (tensor.data as Float32Array).set(dataProcessedTensor.data);
    return tensor;
  }

  /**
   * Used from onnxjs-demo (https://github.com/microsoft/onnxjs-demo/blob/master/src/components/models/Yolo.vue)
   */
  async outputTensor(tensor: Tensor): OutputsYolo[] {
    const outputs: OutputsYolo[] = [];

    try {
      const originalOutput = new Tensor(
        tensor.data as Float32Array,
        [1, 125, 13, 13]
      );
      const outputTensor = yoloTransforms.transpose(
        originalOutput,
        [0, 2, 3, 1]
      );
      // postprocessing
      const boxes = await yolo.postprocess(outputTensor, 20);
      boxes.forEach(box => {
        const {top, left, bottom, right, classProb, className} = box;
      });
    } catch (e) {
      alert('Model is not valid!');
    }

    return outputs;
  }
}
