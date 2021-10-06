import type { NextPage } from 'next';
import { useEffect } from 'react';
import Dashboard from '../page-components/Dashboard/Dashboard';
import { trpc } from '../server/utils/trpc';

const Home: NextPage = () => {
  return <Dashboard />;
};

export default Home;
