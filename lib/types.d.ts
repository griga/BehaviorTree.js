import { Introspector } from '.';
import { RUNNING } from './constants';
import Node from './Node';
export declare type Status = typeof RUNNING | boolean;
export declare type Blackboard = Record<string, any>;
export declare type DecoratorConfig = Record<string, any>;
export declare type EndCallback = (...args: any[]) => void;
export declare type RunCallback = (...args: any[]) => Status;
export declare type StartCallback = (...args: any[]) => void;
export declare type RegistryLookUp = (node: NodeOrRegistration) => Node;
export interface IntrospectionResult {
    name?: string;
    result: Status;
    children?: IntrospectionResult[];
}
export declare type NodeOrRegistration = Node | string;
export declare type NodeOrFunction = Node | RunCallback;
export interface MinimalBlueprint {
    name?: string;
    end?: EndCallback;
    introspector?: Introspector;
    run?: RunCallback;
    start?: StartCallback;
    nodes?: NodeOrRegistration[];
    node?: NodeOrRegistration;
}
export interface Blueprint {
    name?: string;
    end: EndCallback;
    introspector?: Introspector;
    run: RunCallback;
    start: StartCallback;
    nodes?: NodeOrRegistration[];
    node?: NodeOrRegistration;
}
export interface DecoratorBlueprint extends MinimalBlueprint {
    config?: DecoratorConfig;
}
export interface RunConfig {
    introspector?: Introspector;
    registryLookUp?: RegistryLookUp;
    rerun?: boolean;
    indexes?: number[];
}
export interface StepParameter {
    introspector?: Introspector;
}
export interface ImportableJson {
    type: string;
    name?: string;
    node?: ImportableJson;
    nodes?: ImportableJson[];
}
//# sourceMappingURL=types.d.ts.map