import { EntityMetadata } from '../utils/typeormProxy';
declare type Route = 'adminUser/index' | 'adminUser/changelist' | 'adminUser/listAction' | 'adminUser/change' | 'adminUser/changeAction' | 'adminUser/add' | 'adminUser/delete' | 'adminUser/login' | 'adminUser/logout';
declare type RouteArgs = string[];
export declare function adminUrl(route: Route, ...args: RouteArgs): string;
export declare function displayName(entity: object, metadata: EntityMetadata): string;
export declare function prettyPrint(name: string): string;
export {};
