import { format, parseISO } from "date-fns"


export function formatDate(dateStr) {

  const parsedDate = parseISO(dateStr);
  return format(parsedDate, "MMMM do yyyy")
} 

export async function getWeatherIcon(iconName) {
  try {
    const module = await import(`./assets/${iconName}.png`)
    if (module.default) {
      return module.default;
    }
    else {
      throw new Error(`Could not find icon "${iconName}"`)
    }
  } catch (error) {
    console.log(error);
  }
  
}