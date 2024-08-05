import { baseURL } from '../baseURL';

export async function postConvertTimeZone(payload: {
  fromTimeZone: string;
  dateTime: string;
  toTimeZone: string;
  dstAmbiguity: string;
}) {
  try {
    const response = await fetch(`${baseURL}/api/Conversion/ConvertTimeZone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch time');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
