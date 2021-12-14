import type { NextPage } from 'next';
import Centered from '../page-components/CenteredTest/CenteredTest';
import { trpc } from '../server/utils/trpc';

const Test: NextPage = () => {
  const movies = trpc.useQuery(['movies.get20MostPopular', { page: 1 }]);
  const { data } = movies;
  return (
    <Centered>
      {data?.map((m, i) => (
        <div key={i}>{m.title}</div>
      ))}
    </Centered>
  );
};

export default Test;
