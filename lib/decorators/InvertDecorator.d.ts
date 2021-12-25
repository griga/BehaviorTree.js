import { RUNNING } from '../constants';
import Decorator from '../Decorator';
import { RunCallback } from '../types';
export default class InvertDecorator extends Decorator {
    nodeType: string;
    decorate(run: RunCallback): boolean | typeof RUNNING;
}
//# sourceMappingURL=InvertDecorator.d.ts.map