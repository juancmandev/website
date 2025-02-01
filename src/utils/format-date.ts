const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export default function formatDate(date: Date | string, lang: string) {
  const newDate = new Date(date);
  const month = months[newDate.getMonth()];
  const mes = meses[newDate.getMonth()];
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return lang !== 'es'
    ? `${month} ${day}, ${year}`
    : `${day} de ${mes} del ${year}`;
}
