import { createSSGHelpers } from '@trpc/react/ssg';
import { GetStaticPropsContext } from 'next';
import { appRouter } from '../server/routers/_app';
import { createContext } from '../server/context';

function About() {
  return <div>About</div>;
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{ filter: string }>,
) => {
  const ssg = createSSGHelpers({
    router: appRouter,
    ctx: await createContext(),
  });

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 1,
  };
};

export default About;
