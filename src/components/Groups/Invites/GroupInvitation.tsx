import { UserGroup, UserGroupRequests } from '.prisma/client';
import { Avatar } from '@chakra-ui/avatar';
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import Accept from './Accept';
import Decline from './Decline';
export interface GroupInvitationProps {
  invite: UserGroupRequests & {
    sender: {
      name: string | null;
      userName: string | null;
    };
    userGroup: UserGroup;
  };
}

export function GroupInvitation({ invite }: GroupInvitationProps) {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      border="2px"
      borderColor="grey"
      borderRadius="2px"
      boxShadow={'lg'}
      mb={1}
      p={2}
    >
      <Tooltip label={invite.userGroup.name} placement="top">
        <Avatar name={invite.userGroup.name} />
      </Tooltip>
      <Tooltip label="From" placement="top">
        <Text fontSize="sm" ml={1} isTruncated>
          {invite.sender.userName}
        </Text>
      </Tooltip>
      <Tooltip label="More info" placement="top">
        <IconButton
          aria-label="More info"
          icon={<HamburgerIcon />}
          size={'sm'}
          ml={1}
        />
      </Tooltip>
      <Accept invite={invite} />
      <Decline invite={invite} />
    </Flex>
  );
}
