import { IconButton } from '@chakra-ui/button'
import { CheckIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/tooltip'
import React from 'react'

export default function Accept() {
    return (
        <Tooltip label="Accept" placement="top">
        <IconButton
          aria-label="Accept request"
          icon={<CheckIcon />}
          size={'sm'}
          ml={1}
        />
    )
}
