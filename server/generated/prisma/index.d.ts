
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Dance
 * 
 */
export type Dance = $Result.DefaultSelection<Prisma.$DancePayload>
/**
 * Model Dialect
 * 
 */
export type Dialect = $Result.DefaultSelection<Prisma.$DialectPayload>
/**
 * Model Land
 * 
 */
export type Land = $Result.DefaultSelection<Prisma.$LandPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Areas
 * const areas = await prisma.area.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Areas
   * const areas = await prisma.area.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dance`: Exposes CRUD operations for the **Dance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dances
    * const dances = await prisma.dance.findMany()
    * ```
    */
  get dance(): Prisma.DanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dialect`: Exposes CRUD operations for the **Dialect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dialects
    * const dialects = await prisma.dialect.findMany()
    * ```
    */
  get dialect(): Prisma.DialectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.land`: Exposes CRUD operations for the **Land** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lands
    * const lands = await prisma.land.findMany()
    * ```
    */
  get land(): Prisma.LandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Area: 'Area',
    Dance: 'Dance',
    Dialect: 'Dialect',
    Land: 'Land',
    Region: 'Region'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "area" | "dance" | "dialect" | "land" | "region"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Dance: {
        payload: Prisma.$DancePayload<ExtArgs>
        fields: Prisma.DanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload>
          }
          findFirst: {
            args: Prisma.DanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload>
          }
          findMany: {
            args: Prisma.DanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload>[]
          }
          create: {
            args: Prisma.DanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload>
          }
          createMany: {
            args: Prisma.DanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload>[]
          }
          delete: {
            args: Prisma.DanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload>
          }
          update: {
            args: Prisma.DanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload>
          }
          deleteMany: {
            args: Prisma.DanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload>[]
          }
          upsert: {
            args: Prisma.DanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DancePayload>
          }
          aggregate: {
            args: Prisma.DanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDance>
          }
          groupBy: {
            args: Prisma.DanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DanceCountArgs<ExtArgs>
            result: $Utils.Optional<DanceCountAggregateOutputType> | number
          }
        }
      }
      Dialect: {
        payload: Prisma.$DialectPayload<ExtArgs>
        fields: Prisma.DialectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DialectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DialectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload>
          }
          findFirst: {
            args: Prisma.DialectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DialectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload>
          }
          findMany: {
            args: Prisma.DialectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload>[]
          }
          create: {
            args: Prisma.DialectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload>
          }
          createMany: {
            args: Prisma.DialectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DialectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload>[]
          }
          delete: {
            args: Prisma.DialectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload>
          }
          update: {
            args: Prisma.DialectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload>
          }
          deleteMany: {
            args: Prisma.DialectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DialectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DialectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload>[]
          }
          upsert: {
            args: Prisma.DialectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DialectPayload>
          }
          aggregate: {
            args: Prisma.DialectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDialect>
          }
          groupBy: {
            args: Prisma.DialectGroupByArgs<ExtArgs>
            result: $Utils.Optional<DialectGroupByOutputType>[]
          }
          count: {
            args: Prisma.DialectCountArgs<ExtArgs>
            result: $Utils.Optional<DialectCountAggregateOutputType> | number
          }
        }
      }
      Land: {
        payload: Prisma.$LandPayload<ExtArgs>
        fields: Prisma.LandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          findFirst: {
            args: Prisma.LandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          findMany: {
            args: Prisma.LandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>[]
          }
          create: {
            args: Prisma.LandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          createMany: {
            args: Prisma.LandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>[]
          }
          delete: {
            args: Prisma.LandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          update: {
            args: Prisma.LandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          deleteMany: {
            args: Prisma.LandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>[]
          }
          upsert: {
            args: Prisma.LandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          aggregate: {
            args: Prisma.LandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLand>
          }
          groupBy: {
            args: Prisma.LandGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandCountArgs<ExtArgs>
            result: $Utils.Optional<LandCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    area?: AreaOmit
    dance?: DanceOmit
    dialect?: DialectOmit
    land?: LandOmit
    region?: RegionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    regions: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | AreaCountOutputTypeCountRegionsArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountRegionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
  }


  /**
   * Count Type DialectCountOutputType
   */

  export type DialectCountOutputType = {
    areas: number
  }

  export type DialectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | DialectCountOutputTypeCountAreasArgs
  }

  // Custom InputTypes
  /**
   * DialectCountOutputType without action
   */
  export type DialectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DialectCountOutputType
     */
    select?: DialectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DialectCountOutputType without action
   */
  export type DialectCountOutputTypeCountAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }


  /**
   * Count Type LandCountOutputType
   */

  export type LandCountOutputType = {
    dances: number
  }

  export type LandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dances?: boolean | LandCountOutputTypeCountDancesArgs
  }

  // Custom InputTypes
  /**
   * LandCountOutputType without action
   */
  export type LandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandCountOutputType
     */
    select?: LandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LandCountOutputType without action
   */
  export type LandCountOutputTypeCountDancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DanceWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    lands: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lands?: boolean | RegionCountOutputTypeCountLandsArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountLandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    id: number | null
    dialectId: number | null
  }

  export type AreaSumAggregateOutputType = {
    id: number | null
    dialectId: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: number | null
    name: string | null
    dialectId: number | null
  }

  export type AreaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    dialectId: number | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    name: number
    dialectId: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    id?: true
    dialectId?: true
  }

  export type AreaSumAggregateInputType = {
    id?: true
    dialectId?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    name?: true
    dialectId?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    name?: true
    dialectId?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    name?: true
    dialectId?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: number
    name: string
    dialectId: number
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dialectId?: boolean
    regions?: boolean | Area$regionsArgs<ExtArgs>
    dialect?: boolean | DialectDefaultArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dialectId?: boolean
    dialect?: boolean | DialectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dialectId?: boolean
    dialect?: boolean | DialectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    id?: boolean
    name?: boolean
    dialectId?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dialectId", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | Area$regionsArgs<ExtArgs>
    dialect?: boolean | DialectDefaultArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dialect?: boolean | DialectDefaultArgs<ExtArgs>
  }
  export type AreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dialect?: boolean | DialectDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      regions: Prisma.$RegionPayload<ExtArgs>[]
      dialect: Prisma.$DialectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      dialectId: number
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas and returns the data updated in the database.
     * @param {AreaUpdateManyAndReturnArgs} args - Arguments to update many Areas.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AreaUpdateManyAndReturnArgs>(args: SelectSubset<T, AreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    regions<T extends Area$regionsArgs<ExtArgs> = {}>(args?: Subset<T, Area$regionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dialect<T extends DialectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DialectDefaultArgs<ExtArgs>>): Prisma__DialectClient<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'Int'>
    readonly name: FieldRef<"Area", 'String'>
    readonly dialectId: FieldRef<"Area", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area updateManyAndReturn
   */
  export type AreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area.regions
   */
  export type Area$regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    cursor?: RegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Dance
   */

  export type AggregateDance = {
    _count: DanceCountAggregateOutputType | null
    _avg: DanceAvgAggregateOutputType | null
    _sum: DanceSumAggregateOutputType | null
    _min: DanceMinAggregateOutputType | null
    _max: DanceMaxAggregateOutputType | null
  }

  export type DanceAvgAggregateOutputType = {
    id: number | null
    landId: number | null
  }

  export type DanceSumAggregateOutputType = {
    id: number | null
    landId: number | null
  }

  export type DanceMinAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    landId: number | null
  }

  export type DanceMaxAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    landId: number | null
  }

  export type DanceCountAggregateOutputType = {
    id: number
    type: number
    name: number
    createdAt: number
    updatedAt: number
    landId: number
    _all: number
  }


  export type DanceAvgAggregateInputType = {
    id?: true
    landId?: true
  }

  export type DanceSumAggregateInputType = {
    id?: true
    landId?: true
  }

  export type DanceMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    landId?: true
  }

  export type DanceMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    landId?: true
  }

  export type DanceCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    landId?: true
    _all?: true
  }

  export type DanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dance to aggregate.
     */
    where?: DanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dances to fetch.
     */
    orderBy?: DanceOrderByWithRelationInput | DanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dances
    **/
    _count?: true | DanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DanceMaxAggregateInputType
  }

  export type GetDanceAggregateType<T extends DanceAggregateArgs> = {
        [P in keyof T & keyof AggregateDance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDance[P]>
      : GetScalarType<T[P], AggregateDance[P]>
  }




  export type DanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DanceWhereInput
    orderBy?: DanceOrderByWithAggregationInput | DanceOrderByWithAggregationInput[]
    by: DanceScalarFieldEnum[] | DanceScalarFieldEnum
    having?: DanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DanceCountAggregateInputType | true
    _avg?: DanceAvgAggregateInputType
    _sum?: DanceSumAggregateInputType
    _min?: DanceMinAggregateInputType
    _max?: DanceMaxAggregateInputType
  }

  export type DanceGroupByOutputType = {
    id: number
    type: string
    name: string
    createdAt: Date
    updatedAt: Date
    landId: number
    _count: DanceCountAggregateOutputType | null
    _avg: DanceAvgAggregateOutputType | null
    _sum: DanceSumAggregateOutputType | null
    _min: DanceMinAggregateOutputType | null
    _max: DanceMaxAggregateOutputType | null
  }

  type GetDanceGroupByPayload<T extends DanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DanceGroupByOutputType[P]>
            : GetScalarType<T[P], DanceGroupByOutputType[P]>
        }
      >
    >


  export type DanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landId?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dance"]>

  export type DanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landId?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dance"]>

  export type DanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landId?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dance"]>

  export type DanceSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landId?: boolean
  }

  export type DanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "createdAt" | "updatedAt" | "landId", ExtArgs["result"]["dance"]>
  export type DanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }
  export type DanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }
  export type DanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }

  export type $DancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dance"
    objects: {
      land: Prisma.$LandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      name: string
      createdAt: Date
      updatedAt: Date
      landId: number
    }, ExtArgs["result"]["dance"]>
    composites: {}
  }

  type DanceGetPayload<S extends boolean | null | undefined | DanceDefaultArgs> = $Result.GetResult<Prisma.$DancePayload, S>

  type DanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DanceCountAggregateInputType | true
    }

  export interface DanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dance'], meta: { name: 'Dance' } }
    /**
     * Find zero or one Dance that matches the filter.
     * @param {DanceFindUniqueArgs} args - Arguments to find a Dance
     * @example
     * // Get one Dance
     * const dance = await prisma.dance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DanceFindUniqueArgs>(args: SelectSubset<T, DanceFindUniqueArgs<ExtArgs>>): Prisma__DanceClient<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DanceFindUniqueOrThrowArgs} args - Arguments to find a Dance
     * @example
     * // Get one Dance
     * const dance = await prisma.dance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DanceFindUniqueOrThrowArgs>(args: SelectSubset<T, DanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DanceClient<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanceFindFirstArgs} args - Arguments to find a Dance
     * @example
     * // Get one Dance
     * const dance = await prisma.dance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DanceFindFirstArgs>(args?: SelectSubset<T, DanceFindFirstArgs<ExtArgs>>): Prisma__DanceClient<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanceFindFirstOrThrowArgs} args - Arguments to find a Dance
     * @example
     * // Get one Dance
     * const dance = await prisma.dance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DanceFindFirstOrThrowArgs>(args?: SelectSubset<T, DanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DanceClient<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dances
     * const dances = await prisma.dance.findMany()
     * 
     * // Get first 10 Dances
     * const dances = await prisma.dance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const danceWithIdOnly = await prisma.dance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DanceFindManyArgs>(args?: SelectSubset<T, DanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dance.
     * @param {DanceCreateArgs} args - Arguments to create a Dance.
     * @example
     * // Create one Dance
     * const Dance = await prisma.dance.create({
     *   data: {
     *     // ... data to create a Dance
     *   }
     * })
     * 
     */
    create<T extends DanceCreateArgs>(args: SelectSubset<T, DanceCreateArgs<ExtArgs>>): Prisma__DanceClient<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dances.
     * @param {DanceCreateManyArgs} args - Arguments to create many Dances.
     * @example
     * // Create many Dances
     * const dance = await prisma.dance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DanceCreateManyArgs>(args?: SelectSubset<T, DanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dances and returns the data saved in the database.
     * @param {DanceCreateManyAndReturnArgs} args - Arguments to create many Dances.
     * @example
     * // Create many Dances
     * const dance = await prisma.dance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dances and only return the `id`
     * const danceWithIdOnly = await prisma.dance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DanceCreateManyAndReturnArgs>(args?: SelectSubset<T, DanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dance.
     * @param {DanceDeleteArgs} args - Arguments to delete one Dance.
     * @example
     * // Delete one Dance
     * const Dance = await prisma.dance.delete({
     *   where: {
     *     // ... filter to delete one Dance
     *   }
     * })
     * 
     */
    delete<T extends DanceDeleteArgs>(args: SelectSubset<T, DanceDeleteArgs<ExtArgs>>): Prisma__DanceClient<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dance.
     * @param {DanceUpdateArgs} args - Arguments to update one Dance.
     * @example
     * // Update one Dance
     * const dance = await prisma.dance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DanceUpdateArgs>(args: SelectSubset<T, DanceUpdateArgs<ExtArgs>>): Prisma__DanceClient<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dances.
     * @param {DanceDeleteManyArgs} args - Arguments to filter Dances to delete.
     * @example
     * // Delete a few Dances
     * const { count } = await prisma.dance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DanceDeleteManyArgs>(args?: SelectSubset<T, DanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dances
     * const dance = await prisma.dance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DanceUpdateManyArgs>(args: SelectSubset<T, DanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dances and returns the data updated in the database.
     * @param {DanceUpdateManyAndReturnArgs} args - Arguments to update many Dances.
     * @example
     * // Update many Dances
     * const dance = await prisma.dance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dances and only return the `id`
     * const danceWithIdOnly = await prisma.dance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DanceUpdateManyAndReturnArgs>(args: SelectSubset<T, DanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dance.
     * @param {DanceUpsertArgs} args - Arguments to update or create a Dance.
     * @example
     * // Update or create a Dance
     * const dance = await prisma.dance.upsert({
     *   create: {
     *     // ... data to create a Dance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dance we want to update
     *   }
     * })
     */
    upsert<T extends DanceUpsertArgs>(args: SelectSubset<T, DanceUpsertArgs<ExtArgs>>): Prisma__DanceClient<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanceCountArgs} args - Arguments to filter Dances to count.
     * @example
     * // Count the number of Dances
     * const count = await prisma.dance.count({
     *   where: {
     *     // ... the filter for the Dances we want to count
     *   }
     * })
    **/
    count<T extends DanceCountArgs>(
      args?: Subset<T, DanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DanceAggregateArgs>(args: Subset<T, DanceAggregateArgs>): Prisma.PrismaPromise<GetDanceAggregateType<T>>

    /**
     * Group by Dance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DanceGroupByArgs['orderBy'] }
        : { orderBy?: DanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dance model
   */
  readonly fields: DanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    land<T extends LandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandDefaultArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dance model
   */
  interface DanceFieldRefs {
    readonly id: FieldRef<"Dance", 'Int'>
    readonly type: FieldRef<"Dance", 'String'>
    readonly name: FieldRef<"Dance", 'String'>
    readonly createdAt: FieldRef<"Dance", 'DateTime'>
    readonly updatedAt: FieldRef<"Dance", 'DateTime'>
    readonly landId: FieldRef<"Dance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dance findUnique
   */
  export type DanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
    /**
     * Filter, which Dance to fetch.
     */
    where: DanceWhereUniqueInput
  }

  /**
   * Dance findUniqueOrThrow
   */
  export type DanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
    /**
     * Filter, which Dance to fetch.
     */
    where: DanceWhereUniqueInput
  }

  /**
   * Dance findFirst
   */
  export type DanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
    /**
     * Filter, which Dance to fetch.
     */
    where?: DanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dances to fetch.
     */
    orderBy?: DanceOrderByWithRelationInput | DanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dances.
     */
    cursor?: DanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dances.
     */
    distinct?: DanceScalarFieldEnum | DanceScalarFieldEnum[]
  }

  /**
   * Dance findFirstOrThrow
   */
  export type DanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
    /**
     * Filter, which Dance to fetch.
     */
    where?: DanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dances to fetch.
     */
    orderBy?: DanceOrderByWithRelationInput | DanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dances.
     */
    cursor?: DanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dances.
     */
    distinct?: DanceScalarFieldEnum | DanceScalarFieldEnum[]
  }

  /**
   * Dance findMany
   */
  export type DanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
    /**
     * Filter, which Dances to fetch.
     */
    where?: DanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dances to fetch.
     */
    orderBy?: DanceOrderByWithRelationInput | DanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dances.
     */
    cursor?: DanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dances.
     */
    skip?: number
    distinct?: DanceScalarFieldEnum | DanceScalarFieldEnum[]
  }

  /**
   * Dance create
   */
  export type DanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Dance.
     */
    data: XOR<DanceCreateInput, DanceUncheckedCreateInput>
  }

  /**
   * Dance createMany
   */
  export type DanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dances.
     */
    data: DanceCreateManyInput | DanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dance createManyAndReturn
   */
  export type DanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * The data used to create many Dances.
     */
    data: DanceCreateManyInput | DanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dance update
   */
  export type DanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Dance.
     */
    data: XOR<DanceUpdateInput, DanceUncheckedUpdateInput>
    /**
     * Choose, which Dance to update.
     */
    where: DanceWhereUniqueInput
  }

  /**
   * Dance updateMany
   */
  export type DanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dances.
     */
    data: XOR<DanceUpdateManyMutationInput, DanceUncheckedUpdateManyInput>
    /**
     * Filter which Dances to update
     */
    where?: DanceWhereInput
    /**
     * Limit how many Dances to update.
     */
    limit?: number
  }

  /**
   * Dance updateManyAndReturn
   */
  export type DanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * The data used to update Dances.
     */
    data: XOR<DanceUpdateManyMutationInput, DanceUncheckedUpdateManyInput>
    /**
     * Filter which Dances to update
     */
    where?: DanceWhereInput
    /**
     * Limit how many Dances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dance upsert
   */
  export type DanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Dance to update in case it exists.
     */
    where: DanceWhereUniqueInput
    /**
     * In case the Dance found by the `where` argument doesn't exist, create a new Dance with this data.
     */
    create: XOR<DanceCreateInput, DanceUncheckedCreateInput>
    /**
     * In case the Dance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DanceUpdateInput, DanceUncheckedUpdateInput>
  }

  /**
   * Dance delete
   */
  export type DanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
    /**
     * Filter which Dance to delete.
     */
    where: DanceWhereUniqueInput
  }

  /**
   * Dance deleteMany
   */
  export type DanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dances to delete
     */
    where?: DanceWhereInput
    /**
     * Limit how many Dances to delete.
     */
    limit?: number
  }

  /**
   * Dance without action
   */
  export type DanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
  }


  /**
   * Model Dialect
   */

  export type AggregateDialect = {
    _count: DialectCountAggregateOutputType | null
    _avg: DialectAvgAggregateOutputType | null
    _sum: DialectSumAggregateOutputType | null
    _min: DialectMinAggregateOutputType | null
    _max: DialectMaxAggregateOutputType | null
  }

  export type DialectAvgAggregateOutputType = {
    id: number | null
  }

  export type DialectSumAggregateOutputType = {
    id: number | null
  }

  export type DialectMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DialectMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DialectCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DialectAvgAggregateInputType = {
    id?: true
  }

  export type DialectSumAggregateInputType = {
    id?: true
  }

  export type DialectMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DialectMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DialectCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DialectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dialect to aggregate.
     */
    where?: DialectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialects to fetch.
     */
    orderBy?: DialectOrderByWithRelationInput | DialectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DialectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dialects
    **/
    _count?: true | DialectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DialectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DialectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DialectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DialectMaxAggregateInputType
  }

  export type GetDialectAggregateType<T extends DialectAggregateArgs> = {
        [P in keyof T & keyof AggregateDialect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDialect[P]>
      : GetScalarType<T[P], AggregateDialect[P]>
  }




  export type DialectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DialectWhereInput
    orderBy?: DialectOrderByWithAggregationInput | DialectOrderByWithAggregationInput[]
    by: DialectScalarFieldEnum[] | DialectScalarFieldEnum
    having?: DialectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DialectCountAggregateInputType | true
    _avg?: DialectAvgAggregateInputType
    _sum?: DialectSumAggregateInputType
    _min?: DialectMinAggregateInputType
    _max?: DialectMaxAggregateInputType
  }

  export type DialectGroupByOutputType = {
    id: number
    name: string
    _count: DialectCountAggregateOutputType | null
    _avg: DialectAvgAggregateOutputType | null
    _sum: DialectSumAggregateOutputType | null
    _min: DialectMinAggregateOutputType | null
    _max: DialectMaxAggregateOutputType | null
  }

  type GetDialectGroupByPayload<T extends DialectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DialectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DialectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DialectGroupByOutputType[P]>
            : GetScalarType<T[P], DialectGroupByOutputType[P]>
        }
      >
    >


  export type DialectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    areas?: boolean | Dialect$areasArgs<ExtArgs>
    _count?: boolean | DialectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dialect"]>

  export type DialectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["dialect"]>

  export type DialectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["dialect"]>

  export type DialectSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DialectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["dialect"]>
  export type DialectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | Dialect$areasArgs<ExtArgs>
    _count?: boolean | DialectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DialectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DialectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DialectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dialect"
    objects: {
      areas: Prisma.$AreaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["dialect"]>
    composites: {}
  }

  type DialectGetPayload<S extends boolean | null | undefined | DialectDefaultArgs> = $Result.GetResult<Prisma.$DialectPayload, S>

  type DialectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DialectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DialectCountAggregateInputType | true
    }

  export interface DialectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dialect'], meta: { name: 'Dialect' } }
    /**
     * Find zero or one Dialect that matches the filter.
     * @param {DialectFindUniqueArgs} args - Arguments to find a Dialect
     * @example
     * // Get one Dialect
     * const dialect = await prisma.dialect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DialectFindUniqueArgs>(args: SelectSubset<T, DialectFindUniqueArgs<ExtArgs>>): Prisma__DialectClient<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dialect that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DialectFindUniqueOrThrowArgs} args - Arguments to find a Dialect
     * @example
     * // Get one Dialect
     * const dialect = await prisma.dialect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DialectFindUniqueOrThrowArgs>(args: SelectSubset<T, DialectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DialectClient<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dialect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialectFindFirstArgs} args - Arguments to find a Dialect
     * @example
     * // Get one Dialect
     * const dialect = await prisma.dialect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DialectFindFirstArgs>(args?: SelectSubset<T, DialectFindFirstArgs<ExtArgs>>): Prisma__DialectClient<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dialect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialectFindFirstOrThrowArgs} args - Arguments to find a Dialect
     * @example
     * // Get one Dialect
     * const dialect = await prisma.dialect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DialectFindFirstOrThrowArgs>(args?: SelectSubset<T, DialectFindFirstOrThrowArgs<ExtArgs>>): Prisma__DialectClient<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dialects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dialects
     * const dialects = await prisma.dialect.findMany()
     * 
     * // Get first 10 Dialects
     * const dialects = await prisma.dialect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dialectWithIdOnly = await prisma.dialect.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DialectFindManyArgs>(args?: SelectSubset<T, DialectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dialect.
     * @param {DialectCreateArgs} args - Arguments to create a Dialect.
     * @example
     * // Create one Dialect
     * const Dialect = await prisma.dialect.create({
     *   data: {
     *     // ... data to create a Dialect
     *   }
     * })
     * 
     */
    create<T extends DialectCreateArgs>(args: SelectSubset<T, DialectCreateArgs<ExtArgs>>): Prisma__DialectClient<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dialects.
     * @param {DialectCreateManyArgs} args - Arguments to create many Dialects.
     * @example
     * // Create many Dialects
     * const dialect = await prisma.dialect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DialectCreateManyArgs>(args?: SelectSubset<T, DialectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dialects and returns the data saved in the database.
     * @param {DialectCreateManyAndReturnArgs} args - Arguments to create many Dialects.
     * @example
     * // Create many Dialects
     * const dialect = await prisma.dialect.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dialects and only return the `id`
     * const dialectWithIdOnly = await prisma.dialect.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DialectCreateManyAndReturnArgs>(args?: SelectSubset<T, DialectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dialect.
     * @param {DialectDeleteArgs} args - Arguments to delete one Dialect.
     * @example
     * // Delete one Dialect
     * const Dialect = await prisma.dialect.delete({
     *   where: {
     *     // ... filter to delete one Dialect
     *   }
     * })
     * 
     */
    delete<T extends DialectDeleteArgs>(args: SelectSubset<T, DialectDeleteArgs<ExtArgs>>): Prisma__DialectClient<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dialect.
     * @param {DialectUpdateArgs} args - Arguments to update one Dialect.
     * @example
     * // Update one Dialect
     * const dialect = await prisma.dialect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DialectUpdateArgs>(args: SelectSubset<T, DialectUpdateArgs<ExtArgs>>): Prisma__DialectClient<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dialects.
     * @param {DialectDeleteManyArgs} args - Arguments to filter Dialects to delete.
     * @example
     * // Delete a few Dialects
     * const { count } = await prisma.dialect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DialectDeleteManyArgs>(args?: SelectSubset<T, DialectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dialects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dialects
     * const dialect = await prisma.dialect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DialectUpdateManyArgs>(args: SelectSubset<T, DialectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dialects and returns the data updated in the database.
     * @param {DialectUpdateManyAndReturnArgs} args - Arguments to update many Dialects.
     * @example
     * // Update many Dialects
     * const dialect = await prisma.dialect.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dialects and only return the `id`
     * const dialectWithIdOnly = await prisma.dialect.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DialectUpdateManyAndReturnArgs>(args: SelectSubset<T, DialectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dialect.
     * @param {DialectUpsertArgs} args - Arguments to update or create a Dialect.
     * @example
     * // Update or create a Dialect
     * const dialect = await prisma.dialect.upsert({
     *   create: {
     *     // ... data to create a Dialect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dialect we want to update
     *   }
     * })
     */
    upsert<T extends DialectUpsertArgs>(args: SelectSubset<T, DialectUpsertArgs<ExtArgs>>): Prisma__DialectClient<$Result.GetResult<Prisma.$DialectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dialects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialectCountArgs} args - Arguments to filter Dialects to count.
     * @example
     * // Count the number of Dialects
     * const count = await prisma.dialect.count({
     *   where: {
     *     // ... the filter for the Dialects we want to count
     *   }
     * })
    **/
    count<T extends DialectCountArgs>(
      args?: Subset<T, DialectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DialectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dialect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DialectAggregateArgs>(args: Subset<T, DialectAggregateArgs>): Prisma.PrismaPromise<GetDialectAggregateType<T>>

    /**
     * Group by Dialect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DialectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DialectGroupByArgs['orderBy'] }
        : { orderBy?: DialectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DialectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDialectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dialect model
   */
  readonly fields: DialectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dialect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DialectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    areas<T extends Dialect$areasArgs<ExtArgs> = {}>(args?: Subset<T, Dialect$areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dialect model
   */
  interface DialectFieldRefs {
    readonly id: FieldRef<"Dialect", 'Int'>
    readonly name: FieldRef<"Dialect", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dialect findUnique
   */
  export type DialectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DialectInclude<ExtArgs> | null
    /**
     * Filter, which Dialect to fetch.
     */
    where: DialectWhereUniqueInput
  }

  /**
   * Dialect findUniqueOrThrow
   */
  export type DialectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DialectInclude<ExtArgs> | null
    /**
     * Filter, which Dialect to fetch.
     */
    where: DialectWhereUniqueInput
  }

  /**
   * Dialect findFirst
   */
  export type DialectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DialectInclude<ExtArgs> | null
    /**
     * Filter, which Dialect to fetch.
     */
    where?: DialectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialects to fetch.
     */
    orderBy?: DialectOrderByWithRelationInput | DialectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dialects.
     */
    cursor?: DialectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dialects.
     */
    distinct?: DialectScalarFieldEnum | DialectScalarFieldEnum[]
  }

  /**
   * Dialect findFirstOrThrow
   */
  export type DialectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DialectInclude<ExtArgs> | null
    /**
     * Filter, which Dialect to fetch.
     */
    where?: DialectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialects to fetch.
     */
    orderBy?: DialectOrderByWithRelationInput | DialectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dialects.
     */
    cursor?: DialectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dialects.
     */
    distinct?: DialectScalarFieldEnum | DialectScalarFieldEnum[]
  }

  /**
   * Dialect findMany
   */
  export type DialectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DialectInclude<ExtArgs> | null
    /**
     * Filter, which Dialects to fetch.
     */
    where?: DialectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialects to fetch.
     */
    orderBy?: DialectOrderByWithRelationInput | DialectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dialects.
     */
    cursor?: DialectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialects.
     */
    skip?: number
    distinct?: DialectScalarFieldEnum | DialectScalarFieldEnum[]
  }

  /**
   * Dialect create
   */
  export type DialectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DialectInclude<ExtArgs> | null
    /**
     * The data needed to create a Dialect.
     */
    data: XOR<DialectCreateInput, DialectUncheckedCreateInput>
  }

  /**
   * Dialect createMany
   */
  export type DialectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dialects.
     */
    data: DialectCreateManyInput | DialectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dialect createManyAndReturn
   */
  export type DialectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * The data used to create many Dialects.
     */
    data: DialectCreateManyInput | DialectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dialect update
   */
  export type DialectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DialectInclude<ExtArgs> | null
    /**
     * The data needed to update a Dialect.
     */
    data: XOR<DialectUpdateInput, DialectUncheckedUpdateInput>
    /**
     * Choose, which Dialect to update.
     */
    where: DialectWhereUniqueInput
  }

  /**
   * Dialect updateMany
   */
  export type DialectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dialects.
     */
    data: XOR<DialectUpdateManyMutationInput, DialectUncheckedUpdateManyInput>
    /**
     * Filter which Dialects to update
     */
    where?: DialectWhereInput
    /**
     * Limit how many Dialects to update.
     */
    limit?: number
  }

  /**
   * Dialect updateManyAndReturn
   */
  export type DialectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * The data used to update Dialects.
     */
    data: XOR<DialectUpdateManyMutationInput, DialectUncheckedUpdateManyInput>
    /**
     * Filter which Dialects to update
     */
    where?: DialectWhereInput
    /**
     * Limit how many Dialects to update.
     */
    limit?: number
  }

  /**
   * Dialect upsert
   */
  export type DialectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DialectInclude<ExtArgs> | null
    /**
     * The filter to search for the Dialect to update in case it exists.
     */
    where: DialectWhereUniqueInput
    /**
     * In case the Dialect found by the `where` argument doesn't exist, create a new Dialect with this data.
     */
    create: XOR<DialectCreateInput, DialectUncheckedCreateInput>
    /**
     * In case the Dialect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DialectUpdateInput, DialectUncheckedUpdateInput>
  }

  /**
   * Dialect delete
   */
  export type DialectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DialectInclude<ExtArgs> | null
    /**
     * Filter which Dialect to delete.
     */
    where: DialectWhereUniqueInput
  }

  /**
   * Dialect deleteMany
   */
  export type DialectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dialects to delete
     */
    where?: DialectWhereInput
    /**
     * Limit how many Dialects to delete.
     */
    limit?: number
  }

  /**
   * Dialect.areas
   */
  export type Dialect$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Dialect without action
   */
  export type DialectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialect
     */
    select?: DialectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dialect
     */
    omit?: DialectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DialectInclude<ExtArgs> | null
  }


  /**
   * Model Land
   */

  export type AggregateLand = {
    _count: LandCountAggregateOutputType | null
    _avg: LandAvgAggregateOutputType | null
    _sum: LandSumAggregateOutputType | null
    _min: LandMinAggregateOutputType | null
    _max: LandMaxAggregateOutputType | null
  }

  export type LandAvgAggregateOutputType = {
    id: number | null
    regionId: number | null
  }

  export type LandSumAggregateOutputType = {
    id: number | null
    regionId: number | null
  }

  export type LandMinAggregateOutputType = {
    id: number | null
    name: string | null
    regionId: number | null
  }

  export type LandMaxAggregateOutputType = {
    id: number | null
    name: string | null
    regionId: number | null
  }

  export type LandCountAggregateOutputType = {
    id: number
    name: number
    regionId: number
    _all: number
  }


  export type LandAvgAggregateInputType = {
    id?: true
    regionId?: true
  }

  export type LandSumAggregateInputType = {
    id?: true
    regionId?: true
  }

  export type LandMinAggregateInputType = {
    id?: true
    name?: true
    regionId?: true
  }

  export type LandMaxAggregateInputType = {
    id?: true
    name?: true
    regionId?: true
  }

  export type LandCountAggregateInputType = {
    id?: true
    name?: true
    regionId?: true
    _all?: true
  }

  export type LandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Land to aggregate.
     */
    where?: LandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandOrderByWithRelationInput | LandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lands
    **/
    _count?: true | LandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandMaxAggregateInputType
  }

  export type GetLandAggregateType<T extends LandAggregateArgs> = {
        [P in keyof T & keyof AggregateLand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLand[P]>
      : GetScalarType<T[P], AggregateLand[P]>
  }




  export type LandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandWhereInput
    orderBy?: LandOrderByWithAggregationInput | LandOrderByWithAggregationInput[]
    by: LandScalarFieldEnum[] | LandScalarFieldEnum
    having?: LandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandCountAggregateInputType | true
    _avg?: LandAvgAggregateInputType
    _sum?: LandSumAggregateInputType
    _min?: LandMinAggregateInputType
    _max?: LandMaxAggregateInputType
  }

  export type LandGroupByOutputType = {
    id: number
    name: string
    regionId: number
    _count: LandCountAggregateOutputType | null
    _avg: LandAvgAggregateOutputType | null
    _sum: LandSumAggregateOutputType | null
    _min: LandMinAggregateOutputType | null
    _max: LandMaxAggregateOutputType | null
  }

  type GetLandGroupByPayload<T extends LandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandGroupByOutputType[P]>
            : GetScalarType<T[P], LandGroupByOutputType[P]>
        }
      >
    >


  export type LandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    regionId?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    dances?: boolean | Land$dancesArgs<ExtArgs>
    _count?: boolean | LandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["land"]>

  export type LandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    regionId?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["land"]>

  export type LandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    regionId?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["land"]>

  export type LandSelectScalar = {
    id?: boolean
    name?: boolean
    regionId?: boolean
  }

  export type LandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "regionId", ExtArgs["result"]["land"]>
  export type LandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    dances?: boolean | Land$dancesArgs<ExtArgs>
    _count?: boolean | LandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }
  export type LandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }

  export type $LandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Land"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
      dances: Prisma.$DancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      regionId: number
    }, ExtArgs["result"]["land"]>
    composites: {}
  }

  type LandGetPayload<S extends boolean | null | undefined | LandDefaultArgs> = $Result.GetResult<Prisma.$LandPayload, S>

  type LandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandCountAggregateInputType | true
    }

  export interface LandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Land'], meta: { name: 'Land' } }
    /**
     * Find zero or one Land that matches the filter.
     * @param {LandFindUniqueArgs} args - Arguments to find a Land
     * @example
     * // Get one Land
     * const land = await prisma.land.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandFindUniqueArgs>(args: SelectSubset<T, LandFindUniqueArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Land that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandFindUniqueOrThrowArgs} args - Arguments to find a Land
     * @example
     * // Get one Land
     * const land = await prisma.land.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandFindUniqueOrThrowArgs>(args: SelectSubset<T, LandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Land that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandFindFirstArgs} args - Arguments to find a Land
     * @example
     * // Get one Land
     * const land = await prisma.land.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandFindFirstArgs>(args?: SelectSubset<T, LandFindFirstArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Land that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandFindFirstOrThrowArgs} args - Arguments to find a Land
     * @example
     * // Get one Land
     * const land = await prisma.land.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandFindFirstOrThrowArgs>(args?: SelectSubset<T, LandFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lands
     * const lands = await prisma.land.findMany()
     * 
     * // Get first 10 Lands
     * const lands = await prisma.land.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landWithIdOnly = await prisma.land.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandFindManyArgs>(args?: SelectSubset<T, LandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Land.
     * @param {LandCreateArgs} args - Arguments to create a Land.
     * @example
     * // Create one Land
     * const Land = await prisma.land.create({
     *   data: {
     *     // ... data to create a Land
     *   }
     * })
     * 
     */
    create<T extends LandCreateArgs>(args: SelectSubset<T, LandCreateArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lands.
     * @param {LandCreateManyArgs} args - Arguments to create many Lands.
     * @example
     * // Create many Lands
     * const land = await prisma.land.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandCreateManyArgs>(args?: SelectSubset<T, LandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lands and returns the data saved in the database.
     * @param {LandCreateManyAndReturnArgs} args - Arguments to create many Lands.
     * @example
     * // Create many Lands
     * const land = await prisma.land.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lands and only return the `id`
     * const landWithIdOnly = await prisma.land.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandCreateManyAndReturnArgs>(args?: SelectSubset<T, LandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Land.
     * @param {LandDeleteArgs} args - Arguments to delete one Land.
     * @example
     * // Delete one Land
     * const Land = await prisma.land.delete({
     *   where: {
     *     // ... filter to delete one Land
     *   }
     * })
     * 
     */
    delete<T extends LandDeleteArgs>(args: SelectSubset<T, LandDeleteArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Land.
     * @param {LandUpdateArgs} args - Arguments to update one Land.
     * @example
     * // Update one Land
     * const land = await prisma.land.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandUpdateArgs>(args: SelectSubset<T, LandUpdateArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lands.
     * @param {LandDeleteManyArgs} args - Arguments to filter Lands to delete.
     * @example
     * // Delete a few Lands
     * const { count } = await prisma.land.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandDeleteManyArgs>(args?: SelectSubset<T, LandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lands
     * const land = await prisma.land.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandUpdateManyArgs>(args: SelectSubset<T, LandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lands and returns the data updated in the database.
     * @param {LandUpdateManyAndReturnArgs} args - Arguments to update many Lands.
     * @example
     * // Update many Lands
     * const land = await prisma.land.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lands and only return the `id`
     * const landWithIdOnly = await prisma.land.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LandUpdateManyAndReturnArgs>(args: SelectSubset<T, LandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Land.
     * @param {LandUpsertArgs} args - Arguments to update or create a Land.
     * @example
     * // Update or create a Land
     * const land = await prisma.land.upsert({
     *   create: {
     *     // ... data to create a Land
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Land we want to update
     *   }
     * })
     */
    upsert<T extends LandUpsertArgs>(args: SelectSubset<T, LandUpsertArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandCountArgs} args - Arguments to filter Lands to count.
     * @example
     * // Count the number of Lands
     * const count = await prisma.land.count({
     *   where: {
     *     // ... the filter for the Lands we want to count
     *   }
     * })
    **/
    count<T extends LandCountArgs>(
      args?: Subset<T, LandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Land.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandAggregateArgs>(args: Subset<T, LandAggregateArgs>): Prisma.PrismaPromise<GetLandAggregateType<T>>

    /**
     * Group by Land.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandGroupByArgs['orderBy'] }
        : { orderBy?: LandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Land model
   */
  readonly fields: LandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Land.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dances<T extends Land$dancesArgs<ExtArgs> = {}>(args?: Subset<T, Land$dancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Land model
   */
  interface LandFieldRefs {
    readonly id: FieldRef<"Land", 'Int'>
    readonly name: FieldRef<"Land", 'String'>
    readonly regionId: FieldRef<"Land", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Land findUnique
   */
  export type LandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter, which Land to fetch.
     */
    where: LandWhereUniqueInput
  }

  /**
   * Land findUniqueOrThrow
   */
  export type LandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter, which Land to fetch.
     */
    where: LandWhereUniqueInput
  }

  /**
   * Land findFirst
   */
  export type LandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter, which Land to fetch.
     */
    where?: LandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandOrderByWithRelationInput | LandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lands.
     */
    cursor?: LandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lands.
     */
    distinct?: LandScalarFieldEnum | LandScalarFieldEnum[]
  }

  /**
   * Land findFirstOrThrow
   */
  export type LandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter, which Land to fetch.
     */
    where?: LandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandOrderByWithRelationInput | LandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lands.
     */
    cursor?: LandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lands.
     */
    distinct?: LandScalarFieldEnum | LandScalarFieldEnum[]
  }

  /**
   * Land findMany
   */
  export type LandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where?: LandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandOrderByWithRelationInput | LandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lands.
     */
    cursor?: LandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    distinct?: LandScalarFieldEnum | LandScalarFieldEnum[]
  }

  /**
   * Land create
   */
  export type LandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * The data needed to create a Land.
     */
    data: XOR<LandCreateInput, LandUncheckedCreateInput>
  }

  /**
   * Land createMany
   */
  export type LandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lands.
     */
    data: LandCreateManyInput | LandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Land createManyAndReturn
   */
  export type LandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * The data used to create many Lands.
     */
    data: LandCreateManyInput | LandCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Land update
   */
  export type LandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * The data needed to update a Land.
     */
    data: XOR<LandUpdateInput, LandUncheckedUpdateInput>
    /**
     * Choose, which Land to update.
     */
    where: LandWhereUniqueInput
  }

  /**
   * Land updateMany
   */
  export type LandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lands.
     */
    data: XOR<LandUpdateManyMutationInput, LandUncheckedUpdateManyInput>
    /**
     * Filter which Lands to update
     */
    where?: LandWhereInput
    /**
     * Limit how many Lands to update.
     */
    limit?: number
  }

  /**
   * Land updateManyAndReturn
   */
  export type LandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * The data used to update Lands.
     */
    data: XOR<LandUpdateManyMutationInput, LandUncheckedUpdateManyInput>
    /**
     * Filter which Lands to update
     */
    where?: LandWhereInput
    /**
     * Limit how many Lands to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Land upsert
   */
  export type LandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * The filter to search for the Land to update in case it exists.
     */
    where: LandWhereUniqueInput
    /**
     * In case the Land found by the `where` argument doesn't exist, create a new Land with this data.
     */
    create: XOR<LandCreateInput, LandUncheckedCreateInput>
    /**
     * In case the Land was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandUpdateInput, LandUncheckedUpdateInput>
  }

  /**
   * Land delete
   */
  export type LandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter which Land to delete.
     */
    where: LandWhereUniqueInput
  }

  /**
   * Land deleteMany
   */
  export type LandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lands to delete
     */
    where?: LandWhereInput
    /**
     * Limit how many Lands to delete.
     */
    limit?: number
  }

  /**
   * Land.dances
   */
  export type Land$dancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dance
     */
    select?: DanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dance
     */
    omit?: DanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanceInclude<ExtArgs> | null
    where?: DanceWhereInput
    orderBy?: DanceOrderByWithRelationInput | DanceOrderByWithRelationInput[]
    cursor?: DanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DanceScalarFieldEnum | DanceScalarFieldEnum[]
  }

  /**
   * Land without action
   */
  export type LandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: number | null
    areaId: number | null
  }

  export type RegionSumAggregateOutputType = {
    id: number | null
    areaId: number | null
  }

  export type RegionMinAggregateOutputType = {
    id: number | null
    name: string | null
    areaId: number | null
  }

  export type RegionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    areaId: number | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    areaId: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
    areaId?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
    areaId?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
    areaId?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
    areaId?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    areaId?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: number
    name: string
    areaId: number
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    areaId?: boolean
    lands?: boolean | Region$landsArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
    areaId?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "areaId", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lands?: boolean | Region$landsArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }
  export type RegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      lands: Prisma.$LandPayload<ExtArgs>[]
      area: Prisma.$AreaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      areaId: number
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegionUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lands<T extends Region$landsArgs<ExtArgs> = {}>(args?: Subset<T, Region$landsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'Int'>
    readonly name: FieldRef<"Region", 'String'>
    readonly areaId: FieldRef<"Region", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region updateManyAndReturn
   */
  export type RegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.lands
   */
  export type Region$landsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Land
     */
    omit?: LandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    where?: LandWhereInput
    orderBy?: LandOrderByWithRelationInput | LandOrderByWithRelationInput[]
    cursor?: LandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LandScalarFieldEnum | LandScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dialectId: 'dialectId'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const DanceScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    landId: 'landId'
  };

  export type DanceScalarFieldEnum = (typeof DanceScalarFieldEnum)[keyof typeof DanceScalarFieldEnum]


  export const DialectScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DialectScalarFieldEnum = (typeof DialectScalarFieldEnum)[keyof typeof DialectScalarFieldEnum]


  export const LandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    regionId: 'regionId'
  };

  export type LandScalarFieldEnum = (typeof LandScalarFieldEnum)[keyof typeof LandScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    areaId: 'areaId'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: IntFilter<"Area"> | number
    name?: StringFilter<"Area"> | string
    dialectId?: IntFilter<"Area"> | number
    regions?: RegionListRelationFilter
    dialect?: XOR<DialectScalarRelationFilter, DialectWhereInput>
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dialectId?: SortOrder
    regions?: RegionOrderByRelationAggregateInput
    dialect?: DialectOrderByWithRelationInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    name?: StringFilter<"Area"> | string
    dialectId?: IntFilter<"Area"> | number
    regions?: RegionListRelationFilter
    dialect?: XOR<DialectScalarRelationFilter, DialectWhereInput>
  }, "id">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dialectId?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Area"> | number
    name?: StringWithAggregatesFilter<"Area"> | string
    dialectId?: IntWithAggregatesFilter<"Area"> | number
  }

  export type DanceWhereInput = {
    AND?: DanceWhereInput | DanceWhereInput[]
    OR?: DanceWhereInput[]
    NOT?: DanceWhereInput | DanceWhereInput[]
    id?: IntFilter<"Dance"> | number
    type?: StringFilter<"Dance"> | string
    name?: StringFilter<"Dance"> | string
    createdAt?: DateTimeFilter<"Dance"> | Date | string
    updatedAt?: DateTimeFilter<"Dance"> | Date | string
    landId?: IntFilter<"Dance"> | number
    land?: XOR<LandScalarRelationFilter, LandWhereInput>
  }

  export type DanceOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landId?: SortOrder
    land?: LandOrderByWithRelationInput
  }

  export type DanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DanceWhereInput | DanceWhereInput[]
    OR?: DanceWhereInput[]
    NOT?: DanceWhereInput | DanceWhereInput[]
    type?: StringFilter<"Dance"> | string
    name?: StringFilter<"Dance"> | string
    createdAt?: DateTimeFilter<"Dance"> | Date | string
    updatedAt?: DateTimeFilter<"Dance"> | Date | string
    landId?: IntFilter<"Dance"> | number
    land?: XOR<LandScalarRelationFilter, LandWhereInput>
  }, "id">

  export type DanceOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landId?: SortOrder
    _count?: DanceCountOrderByAggregateInput
    _avg?: DanceAvgOrderByAggregateInput
    _max?: DanceMaxOrderByAggregateInput
    _min?: DanceMinOrderByAggregateInput
    _sum?: DanceSumOrderByAggregateInput
  }

  export type DanceScalarWhereWithAggregatesInput = {
    AND?: DanceScalarWhereWithAggregatesInput | DanceScalarWhereWithAggregatesInput[]
    OR?: DanceScalarWhereWithAggregatesInput[]
    NOT?: DanceScalarWhereWithAggregatesInput | DanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dance"> | number
    type?: StringWithAggregatesFilter<"Dance"> | string
    name?: StringWithAggregatesFilter<"Dance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dance"> | Date | string
    landId?: IntWithAggregatesFilter<"Dance"> | number
  }

  export type DialectWhereInput = {
    AND?: DialectWhereInput | DialectWhereInput[]
    OR?: DialectWhereInput[]
    NOT?: DialectWhereInput | DialectWhereInput[]
    id?: IntFilter<"Dialect"> | number
    name?: StringFilter<"Dialect"> | string
    areas?: AreaListRelationFilter
  }

  export type DialectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    areas?: AreaOrderByRelationAggregateInput
  }

  export type DialectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DialectWhereInput | DialectWhereInput[]
    OR?: DialectWhereInput[]
    NOT?: DialectWhereInput | DialectWhereInput[]
    name?: StringFilter<"Dialect"> | string
    areas?: AreaListRelationFilter
  }, "id">

  export type DialectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DialectCountOrderByAggregateInput
    _avg?: DialectAvgOrderByAggregateInput
    _max?: DialectMaxOrderByAggregateInput
    _min?: DialectMinOrderByAggregateInput
    _sum?: DialectSumOrderByAggregateInput
  }

  export type DialectScalarWhereWithAggregatesInput = {
    AND?: DialectScalarWhereWithAggregatesInput | DialectScalarWhereWithAggregatesInput[]
    OR?: DialectScalarWhereWithAggregatesInput[]
    NOT?: DialectScalarWhereWithAggregatesInput | DialectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dialect"> | number
    name?: StringWithAggregatesFilter<"Dialect"> | string
  }

  export type LandWhereInput = {
    AND?: LandWhereInput | LandWhereInput[]
    OR?: LandWhereInput[]
    NOT?: LandWhereInput | LandWhereInput[]
    id?: IntFilter<"Land"> | number
    name?: StringFilter<"Land"> | string
    regionId?: IntFilter<"Land"> | number
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    dances?: DanceListRelationFilter
  }

  export type LandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
    region?: RegionOrderByWithRelationInput
    dances?: DanceOrderByRelationAggregateInput
  }

  export type LandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LandWhereInput | LandWhereInput[]
    OR?: LandWhereInput[]
    NOT?: LandWhereInput | LandWhereInput[]
    name?: StringFilter<"Land"> | string
    regionId?: IntFilter<"Land"> | number
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    dances?: DanceListRelationFilter
  }, "id">

  export type LandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
    _count?: LandCountOrderByAggregateInput
    _avg?: LandAvgOrderByAggregateInput
    _max?: LandMaxOrderByAggregateInput
    _min?: LandMinOrderByAggregateInput
    _sum?: LandSumOrderByAggregateInput
  }

  export type LandScalarWhereWithAggregatesInput = {
    AND?: LandScalarWhereWithAggregatesInput | LandScalarWhereWithAggregatesInput[]
    OR?: LandScalarWhereWithAggregatesInput[]
    NOT?: LandScalarWhereWithAggregatesInput | LandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Land"> | number
    name?: StringWithAggregatesFilter<"Land"> | string
    regionId?: IntWithAggregatesFilter<"Land"> | number
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: IntFilter<"Region"> | number
    name?: StringFilter<"Region"> | string
    areaId?: IntFilter<"Region"> | number
    lands?: LandListRelationFilter
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    areaId?: SortOrder
    lands?: LandOrderByRelationAggregateInput
    area?: AreaOrderByWithRelationInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    areaId?: IntFilter<"Region"> | number
    lands?: LandListRelationFilter
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    areaId?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Region"> | number
    name?: StringWithAggregatesFilter<"Region"> | string
    areaId?: IntWithAggregatesFilter<"Region"> | number
  }

  export type AreaCreateInput = {
    name: string
    regions?: RegionCreateNestedManyWithoutAreaInput
    dialect: DialectCreateNestedOneWithoutAreasInput
  }

  export type AreaUncheckedCreateInput = {
    id?: number
    name: string
    dialectId: number
    regions?: RegionUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    regions?: RegionUpdateManyWithoutAreaNestedInput
    dialect?: DialectUpdateOneRequiredWithoutAreasNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dialectId?: IntFieldUpdateOperationsInput | number
    regions?: RegionUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: number
    name: string
    dialectId: number
  }

  export type AreaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dialectId?: IntFieldUpdateOperationsInput | number
  }

  export type DanceCreateInput = {
    type: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    land: LandCreateNestedOneWithoutDancesInput
  }

  export type DanceUncheckedCreateInput = {
    id?: number
    type: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    landId: number
  }

  export type DanceUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    land?: LandUpdateOneRequiredWithoutDancesNestedInput
  }

  export type DanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landId?: IntFieldUpdateOperationsInput | number
  }

  export type DanceCreateManyInput = {
    id?: number
    type: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    landId: number
  }

  export type DanceUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landId?: IntFieldUpdateOperationsInput | number
  }

  export type DialectCreateInput = {
    name: string
    areas?: AreaCreateNestedManyWithoutDialectInput
  }

  export type DialectUncheckedCreateInput = {
    id?: number
    name: string
    areas?: AreaUncheckedCreateNestedManyWithoutDialectInput
  }

  export type DialectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUpdateManyWithoutDialectNestedInput
  }

  export type DialectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUncheckedUpdateManyWithoutDialectNestedInput
  }

  export type DialectCreateManyInput = {
    id?: number
    name: string
  }

  export type DialectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DialectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LandCreateInput = {
    name: string
    region: RegionCreateNestedOneWithoutLandsInput
    dances?: DanceCreateNestedManyWithoutLandInput
  }

  export type LandUncheckedCreateInput = {
    id?: number
    name: string
    regionId: number
    dances?: DanceUncheckedCreateNestedManyWithoutLandInput
  }

  export type LandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: RegionUpdateOneRequiredWithoutLandsNestedInput
    dances?: DanceUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
    dances?: DanceUncheckedUpdateManyWithoutLandNestedInput
  }

  export type LandCreateManyInput = {
    id?: number
    name: string
    regionId: number
  }

  export type LandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
  }

  export type RegionCreateInput = {
    name: string
    lands?: LandCreateNestedManyWithoutRegionInput
    area: AreaCreateNestedOneWithoutRegionsInput
  }

  export type RegionUncheckedCreateInput = {
    id?: number
    name: string
    areaId: number
    lands?: LandUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lands?: LandUpdateManyWithoutRegionNestedInput
    area?: AreaUpdateOneRequiredWithoutRegionsNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
    lands?: LandUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: number
    name: string
    areaId: number
  }

  export type RegionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RegionListRelationFilter = {
    every?: RegionWhereInput
    some?: RegionWhereInput
    none?: RegionWhereInput
  }

  export type DialectScalarRelationFilter = {
    is?: DialectWhereInput
    isNot?: DialectWhereInput
  }

  export type RegionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dialectId?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    id?: SortOrder
    dialectId?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dialectId?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dialectId?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    id?: SortOrder
    dialectId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LandScalarRelationFilter = {
    is?: LandWhereInput
    isNot?: LandWhereInput
  }

  export type DanceCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landId?: SortOrder
  }

  export type DanceAvgOrderByAggregateInput = {
    id?: SortOrder
    landId?: SortOrder
  }

  export type DanceMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landId?: SortOrder
  }

  export type DanceMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landId?: SortOrder
  }

  export type DanceSumOrderByAggregateInput = {
    id?: SortOrder
    landId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AreaListRelationFilter = {
    every?: AreaWhereInput
    some?: AreaWhereInput
    none?: AreaWhereInput
  }

  export type AreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DialectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DialectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DialectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DialectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DialectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type DanceListRelationFilter = {
    every?: DanceWhereInput
    some?: DanceWhereInput
    none?: DanceWhereInput
  }

  export type DanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
  }

  export type LandAvgOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
  }

  export type LandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
  }

  export type LandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
  }

  export type LandSumOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
  }

  export type LandListRelationFilter = {
    every?: LandWhereInput
    some?: LandWhereInput
    none?: LandWhereInput
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type LandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    areaId?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    areaId?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    areaId?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
  }

  export type RegionCreateNestedManyWithoutAreaInput = {
    create?: XOR<RegionCreateWithoutAreaInput, RegionUncheckedCreateWithoutAreaInput> | RegionCreateWithoutAreaInput[] | RegionUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutAreaInput | RegionCreateOrConnectWithoutAreaInput[]
    createMany?: RegionCreateManyAreaInputEnvelope
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
  }

  export type DialectCreateNestedOneWithoutAreasInput = {
    create?: XOR<DialectCreateWithoutAreasInput, DialectUncheckedCreateWithoutAreasInput>
    connectOrCreate?: DialectCreateOrConnectWithoutAreasInput
    connect?: DialectWhereUniqueInput
  }

  export type RegionUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<RegionCreateWithoutAreaInput, RegionUncheckedCreateWithoutAreaInput> | RegionCreateWithoutAreaInput[] | RegionUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutAreaInput | RegionCreateOrConnectWithoutAreaInput[]
    createMany?: RegionCreateManyAreaInputEnvelope
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RegionUpdateManyWithoutAreaNestedInput = {
    create?: XOR<RegionCreateWithoutAreaInput, RegionUncheckedCreateWithoutAreaInput> | RegionCreateWithoutAreaInput[] | RegionUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutAreaInput | RegionCreateOrConnectWithoutAreaInput[]
    upsert?: RegionUpsertWithWhereUniqueWithoutAreaInput | RegionUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: RegionCreateManyAreaInputEnvelope
    set?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    disconnect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    delete?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    update?: RegionUpdateWithWhereUniqueWithoutAreaInput | RegionUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: RegionUpdateManyWithWhereWithoutAreaInput | RegionUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: RegionScalarWhereInput | RegionScalarWhereInput[]
  }

  export type DialectUpdateOneRequiredWithoutAreasNestedInput = {
    create?: XOR<DialectCreateWithoutAreasInput, DialectUncheckedCreateWithoutAreasInput>
    connectOrCreate?: DialectCreateOrConnectWithoutAreasInput
    upsert?: DialectUpsertWithoutAreasInput
    connect?: DialectWhereUniqueInput
    update?: XOR<XOR<DialectUpdateToOneWithWhereWithoutAreasInput, DialectUpdateWithoutAreasInput>, DialectUncheckedUpdateWithoutAreasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegionUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<RegionCreateWithoutAreaInput, RegionUncheckedCreateWithoutAreaInput> | RegionCreateWithoutAreaInput[] | RegionUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutAreaInput | RegionCreateOrConnectWithoutAreaInput[]
    upsert?: RegionUpsertWithWhereUniqueWithoutAreaInput | RegionUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: RegionCreateManyAreaInputEnvelope
    set?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    disconnect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    delete?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    update?: RegionUpdateWithWhereUniqueWithoutAreaInput | RegionUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: RegionUpdateManyWithWhereWithoutAreaInput | RegionUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: RegionScalarWhereInput | RegionScalarWhereInput[]
  }

  export type LandCreateNestedOneWithoutDancesInput = {
    create?: XOR<LandCreateWithoutDancesInput, LandUncheckedCreateWithoutDancesInput>
    connectOrCreate?: LandCreateOrConnectWithoutDancesInput
    connect?: LandWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LandUpdateOneRequiredWithoutDancesNestedInput = {
    create?: XOR<LandCreateWithoutDancesInput, LandUncheckedCreateWithoutDancesInput>
    connectOrCreate?: LandCreateOrConnectWithoutDancesInput
    upsert?: LandUpsertWithoutDancesInput
    connect?: LandWhereUniqueInput
    update?: XOR<XOR<LandUpdateToOneWithWhereWithoutDancesInput, LandUpdateWithoutDancesInput>, LandUncheckedUpdateWithoutDancesInput>
  }

  export type AreaCreateNestedManyWithoutDialectInput = {
    create?: XOR<AreaCreateWithoutDialectInput, AreaUncheckedCreateWithoutDialectInput> | AreaCreateWithoutDialectInput[] | AreaUncheckedCreateWithoutDialectInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutDialectInput | AreaCreateOrConnectWithoutDialectInput[]
    createMany?: AreaCreateManyDialectInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutDialectInput = {
    create?: XOR<AreaCreateWithoutDialectInput, AreaUncheckedCreateWithoutDialectInput> | AreaCreateWithoutDialectInput[] | AreaUncheckedCreateWithoutDialectInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutDialectInput | AreaCreateOrConnectWithoutDialectInput[]
    createMany?: AreaCreateManyDialectInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type AreaUpdateManyWithoutDialectNestedInput = {
    create?: XOR<AreaCreateWithoutDialectInput, AreaUncheckedCreateWithoutDialectInput> | AreaCreateWithoutDialectInput[] | AreaUncheckedCreateWithoutDialectInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutDialectInput | AreaCreateOrConnectWithoutDialectInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutDialectInput | AreaUpsertWithWhereUniqueWithoutDialectInput[]
    createMany?: AreaCreateManyDialectInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutDialectInput | AreaUpdateWithWhereUniqueWithoutDialectInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutDialectInput | AreaUpdateManyWithWhereWithoutDialectInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type AreaUncheckedUpdateManyWithoutDialectNestedInput = {
    create?: XOR<AreaCreateWithoutDialectInput, AreaUncheckedCreateWithoutDialectInput> | AreaCreateWithoutDialectInput[] | AreaUncheckedCreateWithoutDialectInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutDialectInput | AreaCreateOrConnectWithoutDialectInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutDialectInput | AreaUpsertWithWhereUniqueWithoutDialectInput[]
    createMany?: AreaCreateManyDialectInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutDialectInput | AreaUpdateWithWhereUniqueWithoutDialectInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutDialectInput | AreaUpdateManyWithWhereWithoutDialectInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type RegionCreateNestedOneWithoutLandsInput = {
    create?: XOR<RegionCreateWithoutLandsInput, RegionUncheckedCreateWithoutLandsInput>
    connectOrCreate?: RegionCreateOrConnectWithoutLandsInput
    connect?: RegionWhereUniqueInput
  }

  export type DanceCreateNestedManyWithoutLandInput = {
    create?: XOR<DanceCreateWithoutLandInput, DanceUncheckedCreateWithoutLandInput> | DanceCreateWithoutLandInput[] | DanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: DanceCreateOrConnectWithoutLandInput | DanceCreateOrConnectWithoutLandInput[]
    createMany?: DanceCreateManyLandInputEnvelope
    connect?: DanceWhereUniqueInput | DanceWhereUniqueInput[]
  }

  export type DanceUncheckedCreateNestedManyWithoutLandInput = {
    create?: XOR<DanceCreateWithoutLandInput, DanceUncheckedCreateWithoutLandInput> | DanceCreateWithoutLandInput[] | DanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: DanceCreateOrConnectWithoutLandInput | DanceCreateOrConnectWithoutLandInput[]
    createMany?: DanceCreateManyLandInputEnvelope
    connect?: DanceWhereUniqueInput | DanceWhereUniqueInput[]
  }

  export type RegionUpdateOneRequiredWithoutLandsNestedInput = {
    create?: XOR<RegionCreateWithoutLandsInput, RegionUncheckedCreateWithoutLandsInput>
    connectOrCreate?: RegionCreateOrConnectWithoutLandsInput
    upsert?: RegionUpsertWithoutLandsInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutLandsInput, RegionUpdateWithoutLandsInput>, RegionUncheckedUpdateWithoutLandsInput>
  }

  export type DanceUpdateManyWithoutLandNestedInput = {
    create?: XOR<DanceCreateWithoutLandInput, DanceUncheckedCreateWithoutLandInput> | DanceCreateWithoutLandInput[] | DanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: DanceCreateOrConnectWithoutLandInput | DanceCreateOrConnectWithoutLandInput[]
    upsert?: DanceUpsertWithWhereUniqueWithoutLandInput | DanceUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: DanceCreateManyLandInputEnvelope
    set?: DanceWhereUniqueInput | DanceWhereUniqueInput[]
    disconnect?: DanceWhereUniqueInput | DanceWhereUniqueInput[]
    delete?: DanceWhereUniqueInput | DanceWhereUniqueInput[]
    connect?: DanceWhereUniqueInput | DanceWhereUniqueInput[]
    update?: DanceUpdateWithWhereUniqueWithoutLandInput | DanceUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: DanceUpdateManyWithWhereWithoutLandInput | DanceUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: DanceScalarWhereInput | DanceScalarWhereInput[]
  }

  export type DanceUncheckedUpdateManyWithoutLandNestedInput = {
    create?: XOR<DanceCreateWithoutLandInput, DanceUncheckedCreateWithoutLandInput> | DanceCreateWithoutLandInput[] | DanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: DanceCreateOrConnectWithoutLandInput | DanceCreateOrConnectWithoutLandInput[]
    upsert?: DanceUpsertWithWhereUniqueWithoutLandInput | DanceUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: DanceCreateManyLandInputEnvelope
    set?: DanceWhereUniqueInput | DanceWhereUniqueInput[]
    disconnect?: DanceWhereUniqueInput | DanceWhereUniqueInput[]
    delete?: DanceWhereUniqueInput | DanceWhereUniqueInput[]
    connect?: DanceWhereUniqueInput | DanceWhereUniqueInput[]
    update?: DanceUpdateWithWhereUniqueWithoutLandInput | DanceUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: DanceUpdateManyWithWhereWithoutLandInput | DanceUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: DanceScalarWhereInput | DanceScalarWhereInput[]
  }

  export type LandCreateNestedManyWithoutRegionInput = {
    create?: XOR<LandCreateWithoutRegionInput, LandUncheckedCreateWithoutRegionInput> | LandCreateWithoutRegionInput[] | LandUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: LandCreateOrConnectWithoutRegionInput | LandCreateOrConnectWithoutRegionInput[]
    createMany?: LandCreateManyRegionInputEnvelope
    connect?: LandWhereUniqueInput | LandWhereUniqueInput[]
  }

  export type AreaCreateNestedOneWithoutRegionsInput = {
    create?: XOR<AreaCreateWithoutRegionsInput, AreaUncheckedCreateWithoutRegionsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutRegionsInput
    connect?: AreaWhereUniqueInput
  }

  export type LandUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<LandCreateWithoutRegionInput, LandUncheckedCreateWithoutRegionInput> | LandCreateWithoutRegionInput[] | LandUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: LandCreateOrConnectWithoutRegionInput | LandCreateOrConnectWithoutRegionInput[]
    createMany?: LandCreateManyRegionInputEnvelope
    connect?: LandWhereUniqueInput | LandWhereUniqueInput[]
  }

  export type LandUpdateManyWithoutRegionNestedInput = {
    create?: XOR<LandCreateWithoutRegionInput, LandUncheckedCreateWithoutRegionInput> | LandCreateWithoutRegionInput[] | LandUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: LandCreateOrConnectWithoutRegionInput | LandCreateOrConnectWithoutRegionInput[]
    upsert?: LandUpsertWithWhereUniqueWithoutRegionInput | LandUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: LandCreateManyRegionInputEnvelope
    set?: LandWhereUniqueInput | LandWhereUniqueInput[]
    disconnect?: LandWhereUniqueInput | LandWhereUniqueInput[]
    delete?: LandWhereUniqueInput | LandWhereUniqueInput[]
    connect?: LandWhereUniqueInput | LandWhereUniqueInput[]
    update?: LandUpdateWithWhereUniqueWithoutRegionInput | LandUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: LandUpdateManyWithWhereWithoutRegionInput | LandUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: LandScalarWhereInput | LandScalarWhereInput[]
  }

  export type AreaUpdateOneRequiredWithoutRegionsNestedInput = {
    create?: XOR<AreaCreateWithoutRegionsInput, AreaUncheckedCreateWithoutRegionsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutRegionsInput
    upsert?: AreaUpsertWithoutRegionsInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutRegionsInput, AreaUpdateWithoutRegionsInput>, AreaUncheckedUpdateWithoutRegionsInput>
  }

  export type LandUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<LandCreateWithoutRegionInput, LandUncheckedCreateWithoutRegionInput> | LandCreateWithoutRegionInput[] | LandUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: LandCreateOrConnectWithoutRegionInput | LandCreateOrConnectWithoutRegionInput[]
    upsert?: LandUpsertWithWhereUniqueWithoutRegionInput | LandUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: LandCreateManyRegionInputEnvelope
    set?: LandWhereUniqueInput | LandWhereUniqueInput[]
    disconnect?: LandWhereUniqueInput | LandWhereUniqueInput[]
    delete?: LandWhereUniqueInput | LandWhereUniqueInput[]
    connect?: LandWhereUniqueInput | LandWhereUniqueInput[]
    update?: LandUpdateWithWhereUniqueWithoutRegionInput | LandUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: LandUpdateManyWithWhereWithoutRegionInput | LandUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: LandScalarWhereInput | LandScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RegionCreateWithoutAreaInput = {
    name: string
    lands?: LandCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutAreaInput = {
    id?: number
    name: string
    lands?: LandUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutAreaInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutAreaInput, RegionUncheckedCreateWithoutAreaInput>
  }

  export type RegionCreateManyAreaInputEnvelope = {
    data: RegionCreateManyAreaInput | RegionCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type DialectCreateWithoutAreasInput = {
    name: string
  }

  export type DialectUncheckedCreateWithoutAreasInput = {
    id?: number
    name: string
  }

  export type DialectCreateOrConnectWithoutAreasInput = {
    where: DialectWhereUniqueInput
    create: XOR<DialectCreateWithoutAreasInput, DialectUncheckedCreateWithoutAreasInput>
  }

  export type RegionUpsertWithWhereUniqueWithoutAreaInput = {
    where: RegionWhereUniqueInput
    update: XOR<RegionUpdateWithoutAreaInput, RegionUncheckedUpdateWithoutAreaInput>
    create: XOR<RegionCreateWithoutAreaInput, RegionUncheckedCreateWithoutAreaInput>
  }

  export type RegionUpdateWithWhereUniqueWithoutAreaInput = {
    where: RegionWhereUniqueInput
    data: XOR<RegionUpdateWithoutAreaInput, RegionUncheckedUpdateWithoutAreaInput>
  }

  export type RegionUpdateManyWithWhereWithoutAreaInput = {
    where: RegionScalarWhereInput
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyWithoutAreaInput>
  }

  export type RegionScalarWhereInput = {
    AND?: RegionScalarWhereInput | RegionScalarWhereInput[]
    OR?: RegionScalarWhereInput[]
    NOT?: RegionScalarWhereInput | RegionScalarWhereInput[]
    id?: IntFilter<"Region"> | number
    name?: StringFilter<"Region"> | string
    areaId?: IntFilter<"Region"> | number
  }

  export type DialectUpsertWithoutAreasInput = {
    update: XOR<DialectUpdateWithoutAreasInput, DialectUncheckedUpdateWithoutAreasInput>
    create: XOR<DialectCreateWithoutAreasInput, DialectUncheckedCreateWithoutAreasInput>
    where?: DialectWhereInput
  }

  export type DialectUpdateToOneWithWhereWithoutAreasInput = {
    where?: DialectWhereInput
    data: XOR<DialectUpdateWithoutAreasInput, DialectUncheckedUpdateWithoutAreasInput>
  }

  export type DialectUpdateWithoutAreasInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DialectUncheckedUpdateWithoutAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LandCreateWithoutDancesInput = {
    name: string
    region: RegionCreateNestedOneWithoutLandsInput
  }

  export type LandUncheckedCreateWithoutDancesInput = {
    id?: number
    name: string
    regionId: number
  }

  export type LandCreateOrConnectWithoutDancesInput = {
    where: LandWhereUniqueInput
    create: XOR<LandCreateWithoutDancesInput, LandUncheckedCreateWithoutDancesInput>
  }

  export type LandUpsertWithoutDancesInput = {
    update: XOR<LandUpdateWithoutDancesInput, LandUncheckedUpdateWithoutDancesInput>
    create: XOR<LandCreateWithoutDancesInput, LandUncheckedCreateWithoutDancesInput>
    where?: LandWhereInput
  }

  export type LandUpdateToOneWithWhereWithoutDancesInput = {
    where?: LandWhereInput
    data: XOR<LandUpdateWithoutDancesInput, LandUncheckedUpdateWithoutDancesInput>
  }

  export type LandUpdateWithoutDancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: RegionUpdateOneRequiredWithoutLandsNestedInput
  }

  export type LandUncheckedUpdateWithoutDancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaCreateWithoutDialectInput = {
    name: string
    regions?: RegionCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutDialectInput = {
    id?: number
    name: string
    regions?: RegionUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutDialectInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutDialectInput, AreaUncheckedCreateWithoutDialectInput>
  }

  export type AreaCreateManyDialectInputEnvelope = {
    data: AreaCreateManyDialectInput | AreaCreateManyDialectInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithWhereUniqueWithoutDialectInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutDialectInput, AreaUncheckedUpdateWithoutDialectInput>
    create: XOR<AreaCreateWithoutDialectInput, AreaUncheckedCreateWithoutDialectInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutDialectInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutDialectInput, AreaUncheckedUpdateWithoutDialectInput>
  }

  export type AreaUpdateManyWithWhereWithoutDialectInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutDialectInput>
  }

  export type AreaScalarWhereInput = {
    AND?: AreaScalarWhereInput | AreaScalarWhereInput[]
    OR?: AreaScalarWhereInput[]
    NOT?: AreaScalarWhereInput | AreaScalarWhereInput[]
    id?: IntFilter<"Area"> | number
    name?: StringFilter<"Area"> | string
    dialectId?: IntFilter<"Area"> | number
  }

  export type RegionCreateWithoutLandsInput = {
    name: string
    area: AreaCreateNestedOneWithoutRegionsInput
  }

  export type RegionUncheckedCreateWithoutLandsInput = {
    id?: number
    name: string
    areaId: number
  }

  export type RegionCreateOrConnectWithoutLandsInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutLandsInput, RegionUncheckedCreateWithoutLandsInput>
  }

  export type DanceCreateWithoutLandInput = {
    type: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DanceUncheckedCreateWithoutLandInput = {
    id?: number
    type: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DanceCreateOrConnectWithoutLandInput = {
    where: DanceWhereUniqueInput
    create: XOR<DanceCreateWithoutLandInput, DanceUncheckedCreateWithoutLandInput>
  }

  export type DanceCreateManyLandInputEnvelope = {
    data: DanceCreateManyLandInput | DanceCreateManyLandInput[]
    skipDuplicates?: boolean
  }

  export type RegionUpsertWithoutLandsInput = {
    update: XOR<RegionUpdateWithoutLandsInput, RegionUncheckedUpdateWithoutLandsInput>
    create: XOR<RegionCreateWithoutLandsInput, RegionUncheckedCreateWithoutLandsInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutLandsInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutLandsInput, RegionUncheckedUpdateWithoutLandsInput>
  }

  export type RegionUpdateWithoutLandsInput = {
    name?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutRegionsNestedInput
  }

  export type RegionUncheckedUpdateWithoutLandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type DanceUpsertWithWhereUniqueWithoutLandInput = {
    where: DanceWhereUniqueInput
    update: XOR<DanceUpdateWithoutLandInput, DanceUncheckedUpdateWithoutLandInput>
    create: XOR<DanceCreateWithoutLandInput, DanceUncheckedCreateWithoutLandInput>
  }

  export type DanceUpdateWithWhereUniqueWithoutLandInput = {
    where: DanceWhereUniqueInput
    data: XOR<DanceUpdateWithoutLandInput, DanceUncheckedUpdateWithoutLandInput>
  }

  export type DanceUpdateManyWithWhereWithoutLandInput = {
    where: DanceScalarWhereInput
    data: XOR<DanceUpdateManyMutationInput, DanceUncheckedUpdateManyWithoutLandInput>
  }

  export type DanceScalarWhereInput = {
    AND?: DanceScalarWhereInput | DanceScalarWhereInput[]
    OR?: DanceScalarWhereInput[]
    NOT?: DanceScalarWhereInput | DanceScalarWhereInput[]
    id?: IntFilter<"Dance"> | number
    type?: StringFilter<"Dance"> | string
    name?: StringFilter<"Dance"> | string
    createdAt?: DateTimeFilter<"Dance"> | Date | string
    updatedAt?: DateTimeFilter<"Dance"> | Date | string
    landId?: IntFilter<"Dance"> | number
  }

  export type LandCreateWithoutRegionInput = {
    name: string
    dances?: DanceCreateNestedManyWithoutLandInput
  }

  export type LandUncheckedCreateWithoutRegionInput = {
    id?: number
    name: string
    dances?: DanceUncheckedCreateNestedManyWithoutLandInput
  }

  export type LandCreateOrConnectWithoutRegionInput = {
    where: LandWhereUniqueInput
    create: XOR<LandCreateWithoutRegionInput, LandUncheckedCreateWithoutRegionInput>
  }

  export type LandCreateManyRegionInputEnvelope = {
    data: LandCreateManyRegionInput | LandCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type AreaCreateWithoutRegionsInput = {
    name: string
    dialect: DialectCreateNestedOneWithoutAreasInput
  }

  export type AreaUncheckedCreateWithoutRegionsInput = {
    id?: number
    name: string
    dialectId: number
  }

  export type AreaCreateOrConnectWithoutRegionsInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutRegionsInput, AreaUncheckedCreateWithoutRegionsInput>
  }

  export type LandUpsertWithWhereUniqueWithoutRegionInput = {
    where: LandWhereUniqueInput
    update: XOR<LandUpdateWithoutRegionInput, LandUncheckedUpdateWithoutRegionInput>
    create: XOR<LandCreateWithoutRegionInput, LandUncheckedCreateWithoutRegionInput>
  }

  export type LandUpdateWithWhereUniqueWithoutRegionInput = {
    where: LandWhereUniqueInput
    data: XOR<LandUpdateWithoutRegionInput, LandUncheckedUpdateWithoutRegionInput>
  }

  export type LandUpdateManyWithWhereWithoutRegionInput = {
    where: LandScalarWhereInput
    data: XOR<LandUpdateManyMutationInput, LandUncheckedUpdateManyWithoutRegionInput>
  }

  export type LandScalarWhereInput = {
    AND?: LandScalarWhereInput | LandScalarWhereInput[]
    OR?: LandScalarWhereInput[]
    NOT?: LandScalarWhereInput | LandScalarWhereInput[]
    id?: IntFilter<"Land"> | number
    name?: StringFilter<"Land"> | string
    regionId?: IntFilter<"Land"> | number
  }

  export type AreaUpsertWithoutRegionsInput = {
    update: XOR<AreaUpdateWithoutRegionsInput, AreaUncheckedUpdateWithoutRegionsInput>
    create: XOR<AreaCreateWithoutRegionsInput, AreaUncheckedCreateWithoutRegionsInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutRegionsInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutRegionsInput, AreaUncheckedUpdateWithoutRegionsInput>
  }

  export type AreaUpdateWithoutRegionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    dialect?: DialectUpdateOneRequiredWithoutAreasNestedInput
  }

  export type AreaUncheckedUpdateWithoutRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dialectId?: IntFieldUpdateOperationsInput | number
  }

  export type RegionCreateManyAreaInput = {
    id?: number
    name: string
  }

  export type RegionUpdateWithoutAreaInput = {
    name?: StringFieldUpdateOperationsInput | string
    lands?: LandUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lands?: LandUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateManyWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AreaCreateManyDialectInput = {
    id?: number
    name: string
  }

  export type AreaUpdateWithoutDialectInput = {
    name?: StringFieldUpdateOperationsInput | string
    regions?: RegionUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutDialectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    regions?: RegionUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutDialectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DanceCreateManyLandInput = {
    id?: number
    type: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DanceUpdateWithoutLandInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DanceUncheckedUpdateWithoutLandInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DanceUncheckedUpdateManyWithoutLandInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandCreateManyRegionInput = {
    id?: number
    name: string
  }

  export type LandUpdateWithoutRegionInput = {
    name?: StringFieldUpdateOperationsInput | string
    dances?: DanceUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dances?: DanceUncheckedUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateManyWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}