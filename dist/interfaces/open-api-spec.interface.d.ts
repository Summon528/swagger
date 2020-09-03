export interface OpenAPIObject {
  openapi: string;
  info: InfoObject;
  servers?: ServerObject[];
  paths: PathsObject;
  components?: ComponentsObject;
  security?: SecurityRequirementObject[];
  tags?: TagObject[];
  externalDocs?: ExternalDocumentationObject;
}
export interface InfoObject {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: ContactObject;
  license?: LicenseObject;
  version: string;
}
export interface ContactObject {
  name?: string;
  url?: string;
  email?: string;
}
export interface LicenseObject {
  name: string;
  url?: string;
}
export interface ServerObject {
  url: string;
  description?: string;
  variables?: Record<string, ServerVariableObject>;
}
export interface ServerVariableObject {
  enum?: string[] | boolean[] | number[];
  default: string | boolean | number;
  description?: string;
}
export interface ComponentsObject {
  schemas?: Record<string, SchemaObject | ReferenceObject>;
  responses?: Record<string, ResponseObject | ReferenceObject>;
  parameters?: Record<string, ParameterObject | ReferenceObject>;
  examples?: Record<string, ExampleObject | ReferenceObject>;
  requestBodies?: Record<string, RequestBodyObject | ReferenceObject>;
  headers?: Record<string, HeaderObject | ReferenceObject>;
  securitySchemes?: Record<string, SecuritySchemeObject | ReferenceObject>;
  links?: Record<string, LinkObject | ReferenceObject>;
  callbacks?: Record<string, CallbackObject | ReferenceObject>;
}
export declare type PathsObject = Record<string, PathItemObject>;
export interface PathItemObject {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: OperationObject;
  put?: OperationObject;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  patch?: OperationObject;
  trace?: OperationObject;
  servers?: ServerObject[];
  parameters?: (ParameterObject | ReferenceObject)[];
}
export interface OperationObject {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
  operationId?: string;
  parameters?: (ParameterObject | ReferenceObject)[];
  requestBody?: RequestBodyObject | ReferenceObject;
  responses: ResponsesObject;
  callbacks?: CallbacksObject;
  deprecated?: boolean;
  security?: SecurityRequirementObject[];
  servers?: ServerObject[];
}
export interface ExternalDocumentationObject {
  description?: string;
  url: string;
}
export declare type ParameterLocation = 'query' | 'header' | 'path' | 'cookie';
export declare type ParameterStyle =
  | 'matrix'
  | 'label'
  | 'form'
  | 'simple'
  | 'spaceDelimited'
  | 'pipeDelimited'
  | 'deepObject';
export interface BaseParameterObject {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: ParameterStyle;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: SchemaObject | ReferenceObject;
  examples?: Record<string, ExampleObject | ReferenceObject>;
  example?: any;
  content?: ContentObject;
}
export interface ParameterObject extends BaseParameterObject {
  name: string;
  in: ParameterLocation;
}
export interface RequestBodyObject {
  description?: string;
  content: ContentObject;
  required?: boolean;
}
export declare type ContentObject = Record<string, MediaTypeObject>;
export interface MediaTypeObject {
  schema?: SchemaObject | ReferenceObject;
  examples?: ExamplesObject;
  example?: any;
  encoding?: EncodingObject;
}
export declare type EncodingObject = Record<string, EncodingPropertyObject>;
export interface EncodingPropertyObject {
  contentType?: string;
  headers?: Record<string, HeaderObject | ReferenceObject>;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
}
export interface ResponsesObject
  extends Record<string, ResponseObject | ReferenceObject | undefined> {
  default?: ResponseObject | ReferenceObject;
}
export interface ResponseObject {
  description: string;
  headers?: HeadersObject;
  content?: ContentObject;
  links?: LinksObject;
}
export declare type CallbacksObject = Record<
  string,
  CallbackObject | ReferenceObject
>;
export declare type CallbackObject = Record<string, PathItemObject>;
export declare type HeadersObject = Record<
  string,
  HeaderObject | ReferenceObject
>;
export interface ExampleObject {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
}
export declare type LinksObject = Record<string, LinkObject | ReferenceObject>;
export interface LinkObject {
  operationRef?: string;
  operationId?: string;
  parameters?: LinkParametersObject;
  requestBody?: any | string;
  description?: string;
  server?: ServerObject;
}
export declare type LinkParametersObject = Record<string, any>;
export declare type HeaderObject = BaseParameterObject;
export interface TagObject {
  name: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
}
export declare type ExamplesObject = Record<
  string,
  ExampleObject | ReferenceObject
>;
export interface ReferenceObject {
  $ref: string;
}
export interface SchemaObject {
  nullable?: boolean;
  discriminator?: DiscriminatorObject;
  readOnly?: boolean;
  writeOnly?: boolean;
  xml?: XmlObject;
  externalDocs?: ExternalDocumentationObject;
  example?: any;
  examples?: any[];
  deprecated?: boolean;
  type?: string;
  allOf?: (SchemaObject | ReferenceObject)[];
  oneOf?: (SchemaObject | ReferenceObject)[];
  anyOf?: (SchemaObject | ReferenceObject)[];
  not?: SchemaObject | ReferenceObject;
  items?: SchemaObject | ReferenceObject;
  properties?: Record<string, SchemaObject | ReferenceObject>;
  additionalProperties?: SchemaObject | ReferenceObject | boolean;
  description?: string;
  format?: string;
  default?: any;
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  enum?: any[];
}
export declare type SchemasObject = Record<string, SchemaObject>;
export interface DiscriminatorObject {
  propertyName: string;
  mapping?: Record<string, string>;
}
export interface XmlObject {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}
export declare type SecuritySchemeType =
  | 'apiKey'
  | 'http'
  | 'oauth2'
  | 'openIdConnect';
export interface SecuritySchemeObject {
  type: SecuritySchemeType;
  description?: string;
  name?: string;
  in?: string;
  scheme?: string;
  bearerFormat?: string;
  flows?: OAuthFlowsObject;
  openIdConnectUrl?: string;
}
export interface OAuthFlowsObject {
  implicit?: OAuthFlowObject;
  password?: OAuthFlowObject;
  clientCredentials?: OAuthFlowObject;
  authorizationCode?: OAuthFlowObject;
}
export interface OAuthFlowObject {
  authorizationUrl?: string;
  tokenUrl?: string;
  refreshUrl?: string;
  scopes: ScopesObject;
}
export declare type ScopesObject = Record<string, any>;
export declare type SecurityRequirementObject = Record<string, string[]>;
