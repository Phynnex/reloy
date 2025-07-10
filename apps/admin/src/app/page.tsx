import { client, gql } from '@reloy/api';

export default async function Home() {
  const { data } = await client.query({
    query: gql`
      query {
        hello
      }
    `,
  });

  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-light-blue">
      <h1 className="text-2xl font-bold text-primary">{data.hello}</h1>
    </main>
  );
}
