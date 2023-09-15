import { Response, CharacterTypes, CharacterDetailTypes } from '@/types';

const BASE_URL =
  'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters';

type FetchType = <T>(url: string) => Promise<Response<T>>;

const fetchData: FetchType = async (url) => {
  const response = await (await fetch(url)).json();
  return response.data;
};

export const fetchCharacters = (limit = 20) =>
  fetchData<CharacterTypes[]>(`${BASE_URL}?limit=${limit}`);

export const fetchCharacterDetail = (id: string | undefined) =>
  fetchData<CharacterDetailTypes[]>(`${BASE_URL}/${id}`);
