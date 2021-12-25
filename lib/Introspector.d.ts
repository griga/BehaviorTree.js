import BehaviorTree from './BehaviorTree';
import Node from './Node';
import { Blackboard, IntrospectionResult, Status } from './types';
export default class Introspector {
    currentResult: IntrospectionResult[];
    results: IntrospectionResult[];
    tree?: BehaviorTree;
    constructor();
    start(tree: BehaviorTree): void;
    end(): void;
    push(node: Node, result: Status, blackboard: Blackboard): void;
    wrapLast(numResults: number, node: Node, result: Status, blackboard: Blackboard): void;
    _toResult(node: Node, result: Status, _blackboard: Blackboard): IntrospectionResult;
    reset(): void;
    get lastResult(): IntrospectionResult | null;
}
//# sourceMappingURL=Introspector.d.ts.map