type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type DeepRequireReadonly<T> = {
  [K in keyof T]: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

type UpperCaseKeys<T> = {
  [K in keyof T & string as Uppercase<K>]: T[K] extends object
    ? DeepRequireReadonly<T[K]>
    : T[K];
};

type PickAnalog<T, P extends keyof T> = {
  [K in P]: T[K];
};
