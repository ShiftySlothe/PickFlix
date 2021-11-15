import React from 'react';
import { trpc } from '../../server/utils/trpc';

export default function TrpcTest() {
  const query = trpc.useQuery(['user.getLikedGenresFromSession']);
  const data = query.data;
  return <div>Query test area</div>;
}
