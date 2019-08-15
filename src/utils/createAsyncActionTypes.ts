export default function createAsyncActionTypes(baseType: string) {
  return {
    START: `${baseType}.START`,
    SUCCESS: `${baseType}.SUCCESS`,
    ERROR: `${baseType}.ERROR`
  };
}
