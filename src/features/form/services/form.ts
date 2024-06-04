import { UrlAPiPersonal, UrlApiBusiness, UserProfiles } from '../constants';
import Form from '../types/Form';

export function sendForm(data: Form) {
  console.log(data);
  const uri =
    data.userProfile === UserProfiles.PERSONAL
      ? UrlAPiPersonal
      : UrlApiBusiness;

  return fetch(uri, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res.data);
}
