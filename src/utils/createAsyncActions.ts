import createAction from './createAction';

export interface AsyncActionTypes {
  START: string;
  SUCCESS: string;
  ERROR: string;
}

export default function createAsyncActions<
  StartPayload = undefined,
  SuccessPayload = undefined,
  ErrorPayload = undefined,
  Meta = undefined
>({ START, SUCCESS, ERROR }: AsyncActionTypes) {
  return {
    start: createAction<StartPayload, Meta>(START),
    success: createAction<SuccessPayload, Meta>(SUCCESS),
    error: createAction<ErrorPayload, Meta>(ERROR)
  };
}
