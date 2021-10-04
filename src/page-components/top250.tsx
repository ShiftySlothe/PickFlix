import { trpc } from '../server/utils/trpc';

const Top250 = () => {
  const { data: movies } = trpc.useQuery(['movies.getTopMovies']);
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Top 250 Movies</h1>
      {movies.top250.map((m) => (
        <div key={m.id}>
          <h1>{m.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Top250;
