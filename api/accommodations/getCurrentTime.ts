import { baseURL } from './baseURL';

export async function getCurrentZone(timezone: string) {
  try {
    const response = await fetch(
      `${baseURL}/api/Time/current/zone?timeZone=${timezone}`,
      {
        method: 'GET'
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch time');
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getCurrentCoordinate(
  latitude: number,
  longitude: number
) {
  try {
    const response = await fetch(
      `${baseURL}/api/Time/current/coordinate?latitude=${latitude}&longitude
=${longitude}`,
      {
        method: 'GET'
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch time');
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
