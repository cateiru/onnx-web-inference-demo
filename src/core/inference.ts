import {InferenceSession} from 'onnxruntime-web';

export default class Inference {
  private modelPath: string;
  private session: InferenceSession | null;

  constructor(modelPath: string) {
    this.modelPath = modelPath;
    this.session = null;
  }

  async loadModel() {
    this.session = await InferenceSession.create(this.modelPath);
  }

  async run(
    inputs: InferenceSession.OnnxValueMapType
  ): Promise<InferenceSession.OnnxValueMapType> {
    if (this.session) {
      return await this.session.run(inputs);
    }
    throw new Error(
      'Cannot perform inference because the model is not loaded, please run loadModel()'
    );
  }
}
