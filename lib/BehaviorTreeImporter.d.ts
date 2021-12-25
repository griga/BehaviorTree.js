import Node from './Node';
import { ImportableJson } from './types';
export default class BehaviorTreeImporter {
    types: Record<string, any>;
    defineType(type: string, Klass: any): void;
    parse(json: ImportableJson): Node;
}
//# sourceMappingURL=BehaviorTreeImporter.d.ts.map