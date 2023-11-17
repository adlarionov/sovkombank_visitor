export default function getTime(): string {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const withSlashes = [day, month, year].join(".");

  return withSlashes;
}

export function getDays(): number[] {
  const date = new Date();

  const day = date.getDate();

  return [day, day + 1];
}
