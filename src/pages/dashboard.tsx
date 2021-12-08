import type { NextPage } from 'next';
import Dashboard from '../page-components/Dashboard/Dashboard';
import CheckLoggedIn from '../components/Helpers/Next-Auth/CheckLoggedIn';

const Home: NextPage = () => {
  return (
    <CheckLoggedIn>
      <Dashboard />
    </CheckLoggedIn>
  );
};

export default Home;
