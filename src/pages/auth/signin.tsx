import { trpc } from '../../server/utils/trpc';
import NextError from 'next/error';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  const providerQuery = trpc.useQuery(['auth.getProviders']);

  // Handle loading/errors
  if (providerQuery.error) {
    return (
      <NextError
        title={providerQuery.error.message}
        statusCode={providerQuery.error.data?.httpStatus ?? 500}
      />
    );
  }
  if (providerQuery.status !== 'success') {
    return <>Loading...</>;
  }
  const providers = providerQuery.data;
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}
