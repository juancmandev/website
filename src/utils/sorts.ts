export function sortContentByDate(array: any[]) {
  array.sort(
    (a: any, b: any) =>
      Date.parse(b.data.date.toString()) - Date.parse(a.data.date.toString())
  );
}
