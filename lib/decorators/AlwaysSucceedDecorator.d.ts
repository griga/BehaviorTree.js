import { RUNNING } from '../constants';
import Decorator from '../Decorator';
import { RunCallback } from '../types';
export default class AlwaysSucceedDecorator extends Decorator {
    nodeType: string;
    decorate(run: RunCallback): true | typeof RUNNING;
}
//# sourceMappingURL=AlwaysSucceedDecorator.d.ts.map