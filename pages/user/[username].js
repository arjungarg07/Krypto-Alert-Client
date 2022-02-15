import { User } from "../../page-components/User";
import fetch from "isomorphic-fetch";
import Head from "next/head";
import useCurrentUser from "../../lib/user/hooks";
import router, { useRouter } from "next/router";

const baseUrl = 'https://kryptoalert.herokuapp.com';
const localUrl = 'http://localhost:8000';

export default function UserPage({ user = {} }) {
  const { data, mutate } = useCurrentUser();
  const router = useRouter();
  
  if(Object.keys(user).length === 0) {
    router.push("/login");
  }
  return (
    <>
      <Head>
        <title>
          {(user)?.userDetails?.name} (@{(user)?.userDetails?.username})
        </title>
      </Head>
      <User user={user} />
    </>
  );
}

export async function getServerSideProps(context) {
  const username = context.params.username;
  try {
    const response = await fetch(
      `${baseUrl}/api/v1/user/${username}`,
      {
        headers: {
          cookie: context.req.headers.cookie,
        }
      }
    );
    const result = await response.json();
    if(result && result.status === 1){
      return {
        props: {
          user: result.data,
        },
      };
    } else {
      return {
        props: {
          user: {},
        },
      };
    }
  } catch (err) {
    console.log(err);
  }
}
