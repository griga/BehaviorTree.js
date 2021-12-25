import Node from './Node';
import { Blackboard, RunCallback, DecoratorConfig, RunConfig, DecoratorBlueprint } from './types';
export default class Decorator extends Node {
    config: DecoratorConfig;
    nodeType: string;
    constructor({ config, ...props }?: DecoratorBlueprint);
    decorate(run: RunCallback, blackboard: Blackboard, config: DecoratorConfig): import("./types").Status;
    run(blackboard: Blackboard, { introspector, rerun, registryLookUp, ...config }?: RunConfig): import("./types").Status;
    setConfig(config: DecoratorConfig): void;
}
//# sourceMappingURL=Decorator.d.ts.map