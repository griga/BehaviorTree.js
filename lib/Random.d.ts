import BranchNode from './BranchNode';
import { Blackboard, RunConfig } from './types';
export default class Random extends BranchNode {
    nodeType: string;
    run(blackboard?: Blackboard, { indexes, introspector, rerun, registryLookUp }?: RunConfig): any;
}
//# sourceMappingURL=Random.d.ts.map