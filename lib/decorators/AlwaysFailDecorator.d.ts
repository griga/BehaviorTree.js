import { RUNNING } from '../constants';
import Decorator from '../Decorator';
import { RunCallback } from '../types';
export default class AlwaysFailDecorator extends Decorator {
    nodeType: string;
    decorate(run: RunCallback): false | typeof RUNNING;
}
//# sourceMappingURL=AlwaysFailDecorator.d.ts.map