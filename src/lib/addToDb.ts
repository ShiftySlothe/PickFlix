import prisma from './prisma';
import { top250Movies } from '../../data/top250movies';
import { top250TV } from '../../data/top250TV';

export async function add250Movies() {
  const data = top250Movies.map((m) => {
    const { id: imDbID, ...otherProps } = m;
    return { imDbID, ...otherProps };
  });

  await prisma.movie.createMany({ data });
}

export async function add250TV() {
  const data = top250TV.map((m) => {
    const { id: imDbID, ...otherProps } = m;
    return { imDbID, ...otherProps };
  });

  await prisma.tVShow.createMany({ data });
}
