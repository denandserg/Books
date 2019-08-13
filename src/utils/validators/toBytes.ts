export enum FileSizeMeasure {
  B,
  KB,
  MB,
  GB
}

export default function toBytes(
  size: number,
  sizeMeasure: FileSizeMeasure
): number {
  return size * 1024 ** sizeMeasure;
}
