import Decorator from '../Decorator';
import { RunCallback } from '../types';
export default class LoopDecorator extends Decorator {
    nodeType: string;
    setConfig({ loop }: {
        loop?: number | undefined;
    }): void;
    decorate(run: RunCallback): boolean | typeof import("../constants").RUNNING;
}
//# sourceMappingURL=LoopDecorator.d.ts.map