import { Divider, Heading } from '@chakra-ui/layout';
import { GroupProps } from '..';

export function StandardSettings({ groupId }: GroupProps) {
  return (
    <>
      <Heading fontSize={'md'}>Settings</Heading>
      <Divider />
      <LeaveGroup groupId={groupId} />
    </>
  );
}

function LeaveGroup({ groupId }: GroupProps) {
  return <div>Leave Group</div>;
}
