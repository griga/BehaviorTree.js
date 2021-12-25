import { Blackboard, Blueprint, MinimalBlueprint, RunConfig, Status } from './types';
export default class Node {
    _name?: string;
    blueprint: Blueprint;
    nodeType: string;
    constructor({ run, start, end, ...props }: MinimalBlueprint);
    run(blackboard: Blackboard, { introspector, rerun, registryLookUp, ...config }?: RunConfig): Status;
    get name(): string | undefined;
    set name(name: string | undefined);
}
//# sourceMappingURL=Node.d.ts.map