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
    <main className="flex min-h-screen items-center justify-center p-8 bg-gray5">
      <h1 className="text-2xl font-bold text-heading">{data.hello}</h1>
    </main>
  );
}
