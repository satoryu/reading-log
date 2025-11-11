export const isISO = (dateString: string): boolean => {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z$/.test(dateString)
}
