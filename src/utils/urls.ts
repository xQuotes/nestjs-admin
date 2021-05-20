import { EntityMetadata } from './typeormProxy';
import AdminSection from '../adminCore/adminSection';
import { parseName } from './formatting';
import { getPrimaryKeyValue } from './entity';

export function indexUrl() {
  return `/adminUser`;
}

export function loginUrl() {
  return `/adminUser/login`;
}

export function logoutUrl() {
  return `/adminUser/logout`;
}

export function changeListUrl(section: AdminSection, metadata: EntityMetadata) {
  return `/adminUser/${parseName(section.name)}/${parseName(metadata.name)}`;
}

export function listActionUrl(section: AdminSection, metadata: EntityMetadata) {
  return `/adminUser/${parseName(section.name)}/${parseName(metadata.name)}/action`;
}

export function changeUrl(section: AdminSection, metadata: EntityMetadata, entity: object) {
  const primaryKey = urlEncodePrimaryKey(getPrimaryKeyValue(metadata, entity));
  return `/adminUser/${parseName(section.name)}/${parseName(metadata.name)}/${primaryKey}/change`;
}

export function changeActionUrl(section: AdminSection, metadata: EntityMetadata, entity: object) {
  const primaryKey = urlEncodePrimaryKey(getPrimaryKeyValue(metadata, entity));
  return `/adminUser/${parseName(section.name)}/${parseName(metadata.name)}/${primaryKey}/action`;
}

export function deleteUrl(section: AdminSection, metadata: EntityMetadata, entity: object) {
  const primaryKey = urlEncodePrimaryKey(getPrimaryKeyValue(metadata, entity));
  return `/adminUser/${parseName(section.name)}/${parseName(metadata.name)}/${primaryKey}/delete`;
}

export function addUrl(section: AdminSection, metadata: EntityMetadata) {
  return `/adminUser/${parseName(section.name)}/${parseName(metadata.name)}/add`;
}

function urlEncodePrimaryKey(primaryKey: string | number | object) {
  return encodeURIComponent(JSON.stringify(primaryKey));
}
