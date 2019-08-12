// eslint-disable-next-line spaced-comment
/// <reference types="react-scripts" />

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
