import { Skeleton } from '@chakra-ui/skeleton';
import { GroupProps } from '..';
import { trpc } from '../../../../server/utils/trpc';
import AdminSettings from './Admin';
import { StandardSettings } from './Standard';

export function SettingsBody({ groupId }: GroupProps) {
  const adminQuery = trpc.useQuery([
    'group.isGroupAdminFromSession',
    { groupId },
  ]);
  const isAdmin = adminQuery.data;

  return (
    <Skeleton isLoaded={adminQuery.isSuccess}>
      {isAdmin ? (
        <AdminSettings groupId={groupId} />
      ) : (
        <StandardSettings groupId={groupId} />
      )}
    </Skeleton>
  );
}
