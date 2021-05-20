import { EntityMetadata } from '../utils/typeormProxy';
import * as urls from '../utils/urls';
import { startCase as _startCase } from 'lodash';

type Route =
  | 'adminUser/index'
  | 'adminUser/changelist'
  | 'adminUser/listAction'
  | 'adminUser/change'
  | 'adminUser/changeAction'
  | 'adminUser/add'
  | 'adminUser/delete'
  | 'adminUser/login'
  | 'adminUser/logout';
type RouteArgs = string[];

export function adminUrl(route: Route, ...args: RouteArgs) {
  switch (route) {
    case 'adminUser/login':
      return urls.loginUrl();
    case 'adminUser/index':
      return urls.indexUrl();
    case 'adminUser/changelist':
      return urls.changeListUrl(...(args as [any, any]));
    case 'adminUser/listAction':
      return urls.listActionUrl(...(args as [any, any]));
    case 'adminUser/change':
      return urls.changeUrl(...(args as [any, any, any]));
    case 'adminUser/changeAction':
      return urls.changeActionUrl(...(args as [any, any, any]));
    case 'adminUser/add':
      return urls.addUrl(...(args as [any, any]));
    case 'adminUser/delete':
      return urls.deleteUrl(...(args as [any, any, any]));
    case 'adminUser/logout':
      return urls.logoutUrl();
    default:
      const guard: never = route;
      throw new Error(`Route "${route}" doesn't exist`);
  }
}

export function displayName(entity: object, metadata: EntityMetadata) {
  // @ts-ignore
  if (entity.__proto__.hasOwnProperty('toString')) {
    return entity.toString();
  }
  const primaryColumns = metadata.primaryColumns.map(col => col.getEntityValue(entity));
  return primaryColumns.join(' - ');
}

export function prettyPrint(name: string) {
  return _startCase(name);
}
