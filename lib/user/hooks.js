import useSWR from 'swr';

export default function useCurrentUser() {
  const { data , mutate } = useSWR('/api/user');
  return { data, mutate };
  // return useSWR('/api/user');
}

// export function useUser(id) {
//   return useSWR(`/api/users/${id}`);
// }
