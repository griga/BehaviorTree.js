import Node from './Node';
import { Blackboard, NodeOrFunction, NodeOrRegistration, Status, StepParameter } from './types';
export declare type NodeRegistry = Record<string, Node>;
export declare function getRegistry(): NodeRegistry;
export declare function registryLookUp(node: string | Node): Node;
export default class BehaviorTree {
    tree: NodeOrRegistration;
    blackboard: Blackboard;
    lastResult: Status | null;
    constructor({ tree, blackboard }: {
        tree: NodeOrRegistration;
        blackboard: Blackboard;
    });
    step({ introspector }?: StepParameter): void;
    static register(name: string, node: NodeOrFunction): void;
    static cleanRegistry(): void;
}
//# sourceMappingURL=BehaviorTree.d.ts.map