import Decorator from '../Decorator';
import { RunCallback } from '../types';
export default class CooldownDecorator extends Decorator {
    lock: boolean;
    nodeType: string;
    setConfig({ cooldown }: {
        cooldown?: number | undefined;
    }): void;
    decorate(run: RunCallback): import("../types").Status;
}
//# sourceMappingURL=CooldownDecorator.d.ts.map