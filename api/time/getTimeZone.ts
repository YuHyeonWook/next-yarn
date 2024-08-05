import { baseURL } from '../baseURL';

export async function getCurrentZone() {
  try {
    const response = await fetch(`${baseURL}/api/TimeZone/AvailableTimeZones`, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch time');
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
