## API Report File for "@typeofweb/utils"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @beta (undocumented)
export type AnyAsyncFunction = (...args: readonly any[]) => Promise<any>;

// @beta (undocumented)
export type AnyFunction = (...args: readonly any[]) => any;

// @beta (undocumented)
export type AnyObject = Record<keyof any, unknown>;

// @beta (undocumented)
export interface Callback<T> {
    // (undocumented)
    (arg: T): void;
}

// @beta (undocumented)
export type DeepPartial<T> = {
    readonly [P in keyof T]?: T[P] extends AnyObject ? DeepPartial<T[P]> : T[P];
};

// @beta (undocumented)
export type DeepWritable<T> = {
    -readonly [K in keyof T]: T[K] extends Record<string, unknown> ? DeepWritable<T[K]> : T[K];
};

// @beta (undocumented)
export type If<T, Condition, Y, N = never> = T extends Condition ? Y : N;

// @beta (undocumented)
export type Json = JsonPrimitive | JsonObject | JsonArray;

// @beta (undocumented)
export interface JsonArray extends ReadonlyArray<Json> {
}

// @beta (undocumented)
export interface JsonObject {
    // (undocumented)
    readonly [Key: string]: Json;
    // (undocumented)
    readonly [Key: number]: Json;
}

// @beta (undocumented)
export type JsonPrimitive = number | string | boolean | null;

// @beta (undocumented)
export type KeysOfType<T extends AnyObject, SelectedType> = {
    readonly [key in keyof T]: SelectedType extends T[key] ? key : never;
}[keyof T];

// @beta (undocumented)
export type MaybeAsync<T> = T | Promise<T>;

// @beta (undocumented)
export type Nominal<T, K extends string> = T & {
    readonly __tag: K;
};

// @beta @deprecated (undocumented)
export type Optional<T extends AnyObject> = PickOptional<T>;

// @beta (undocumented)
export type PickOptional<T extends AnyObject> = Partial<Pick<T, KeysOfType<T, undefined>>>;

// @beta (undocumented)
export type PickRequired<T extends AnyObject> = Omit<T, KeysOfType<T, undefined>>;

// @beta (undocumented)
export type PlainObject = {
    readonly [name: string]: any;
};

// @beta (undocumented)
export type Pretty<X> = X extends AnyObject ? {
    readonly [K in keyof X]: X[K];
} : X;

// @beta (undocumented)
export type Primitives = string | number | boolean;

// @beta @deprecated (undocumented)
type Required_2<T extends AnyObject> = PickRequired<T>;

export { Required_2 as Required }

// @beta (undocumented)
export type TupleOf<T, Length extends number, Acc extends readonly unknown[] = readonly []> = Acc['length'] extends Length ? Acc : TupleOf<T, Length, readonly [T, ...Acc]>;

// @beta (undocumented)
export type UndefinedToOptional<T> = T extends PlainObject ? {} extends T ? {} : T extends Date | readonly unknown[] ? T : Pretty<PickRequired<T> & PickOptional<T>> : T;


// (No @packageDocumentation comment for this package)

```