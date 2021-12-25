import Node from './Node';
import { Blackboard, MinimalBlueprint, NodeOrRegistration, RunConfig, Status } from './types';
export default class BranchNode extends Node {
    numNodes: number;
    wasRunning: boolean;
    nodes: NodeOrRegistration[];
    OPT_OUT_CASE: Status;
    START_CASE: Status;
    nodeType: string;
    constructor(blueprint: MinimalBlueprint);
    run(blackboard?: Blackboard, { indexes, introspector, rerun, registryLookUp }?: RunConfig): any;
}
//# sourceMappingURL=BranchNode.d.ts.map