import { Type } from '@nestjs/common';
import {
  BaseParameterObject,
  ReferenceObject,
  SchemaObject
} from '../interfaces/open-api-spec.interface';
import { SchemaObjectMetadata } from '../interfaces/schema-object-metadata.interface';
import { ModelPropertiesAccessor } from './model-properties-accessor';
import { ParamWithTypeMetadata } from './parameter-metadata-accessor';
import { SwaggerTypesMapper } from './swagger-types-mapper';
export declare class SchemaObjectFactory {
  private readonly modelPropertiesAccessor;
  private readonly swaggerTypesMapper;
  constructor(
    modelPropertiesAccessor: ModelPropertiesAccessor,
    swaggerTypesMapper: SwaggerTypesMapper
  );
  createFromModel(
    parameters: ParamWithTypeMetadata[],
    schemas: SchemaObject[],
    schemaRefsStack?: string[]
  ): Array<ParamWithTypeMetadata | BaseParameterObject>;
  createQueryOrParamSchema(
    param: ParamWithTypeMetadata,
    schemas: SchemaObject[],
    schemaRefsStack: string[]
  ):
    | ParamWithTypeMetadata
    | Partial<ParamWithTypeMetadata & BaseParameterObject>
    | {
        type: any;
        name?: string | number | object;
        in?: 'query' | 'header' | 'path' | 'cookie' | 'body' | 'placeholder';
        isArray?: boolean;
        required: true;
        enum?: unknown[];
        enumName?: string;
      };
  exploreModelSchema(
    type: Type<unknown> | Function,
    schemas: SchemaObject[],
    schemaRefsStack?: string[]
  ): string;
  mergePropertyWithMetadata(
    key: string,
    prototype: Type<unknown>,
    schemas: SchemaObject[],
    schemaRefsStack?: string[],
    metadata?: SchemaObjectMetadata
  ): SchemaObjectMetadata | ReferenceObject;
  createEnumParam(
    param: ParamWithTypeMetadata & BaseParameterObject,
    schemas: SchemaObject[],
    schemaRefsStack: string[]
  ): Partial<ParamWithTypeMetadata & BaseParameterObject>;
  createEnumSchemaType(
    key: string,
    metadata: SchemaObjectMetadata,
    schemas: SchemaObject[],
    schemaRefsStack: string[]
  ):
    | Partial<{
        $ref: string;
        items?: SchemaObject | ReferenceObject;
        name: string;
        type: string;
        isArray?: boolean;
        required?: boolean;
        enumName?: string;
        externalDocs?: import('../interfaces/open-api-spec.interface').ExternalDocumentationObject;
        nullable?: boolean;
        discriminator?: import('../interfaces/open-api-spec.interface').DiscriminatorObject;
        readOnly?: boolean;
        writeOnly?: boolean;
        xml?: import('../interfaces/open-api-spec.interface').XmlObject;
        example?: any;
        examples?: any[];
        deprecated?: boolean;
        allOf?: (SchemaObject | ReferenceObject)[];
        oneOf?: (SchemaObject | ReferenceObject)[];
        anyOf?: (SchemaObject | ReferenceObject)[];
        not?: SchemaObject | ReferenceObject;
        properties?: Record<string, SchemaObject | ReferenceObject>;
        additionalProperties?: boolean | SchemaObject | ReferenceObject;
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
        enum?: any[];
      }>
    | {
        name: string;
        type?:
          | string
          | Function
          | Record<string, any>
          | Type<unknown>
          | [Function];
        isArray?: boolean;
        required?: boolean;
        enumName?: string;
        externalDocs?: import('../interfaces/open-api-spec.interface').ExternalDocumentationObject;
        nullable?: boolean;
        discriminator?: import('../interfaces/open-api-spec.interface').DiscriminatorObject;
        readOnly?: boolean;
        writeOnly?: boolean;
        xml?: import('../interfaces/open-api-spec.interface').XmlObject;
        example?: any;
        examples?: any[];
        deprecated?: boolean;
        allOf?: (SchemaObject | ReferenceObject)[];
        oneOf?: (SchemaObject | ReferenceObject)[];
        anyOf?: (SchemaObject | ReferenceObject)[];
        not?: SchemaObject | ReferenceObject;
        items?: SchemaObject | ReferenceObject;
        properties?: Record<string, SchemaObject | ReferenceObject>;
        additionalProperties?: boolean | SchemaObject | ReferenceObject;
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
        enum?: any[];
      };
  createNotBuiltInTypeReference(
    key: string,
    metadata: SchemaObjectMetadata,
    schemas: SchemaObject[],
    schemaRefsStack: string[]
  ): SchemaObjectMetadata;
  transformToArraySchemaProperty(
    metadata: SchemaObjectMetadata,
    key: string,
    type: string | Record<string, any>
  ): SchemaObjectMetadata;
  mapArrayCtorParam(param: ParamWithTypeMetadata): any;
  createFromObjectLiteral(
    key: string,
    literalObj: Record<string, any>,
    schemas: SchemaObject[],
    schemaRefsStack?: string[]
  ): {
    name: string;
    type: string;
    properties: {};
  };
  private isArrayCtor;
  private isPrimitiveType;
  private isLazyTypeFunc;
  private getTypeName;
  private isObjectLiteral;
}
