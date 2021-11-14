export type DataCheck = {
  noQuery: boolean;
  found: boolean;
};

export const noQuery: DataCheck = {
  noQuery: true,
  found: false,
};

export const dataFound: DataCheck = {
  noQuery: false,
  found: true,
};

export const noData: DataCheck = {
  noQuery: false,
  found: false,
};

import { Context } from '../context';
import { TRPCError } from '@trpc/server';

export const checkLoggedIn = (ctx: Context) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Must be logged in',
    });
  }
};

export const checkIsGroupAdmin =async (ctx, groupId) => {
  const isGroupAdmin = await ctx.prisma.userGroup.findFirst({
    where: {
      id: groupId,
      groupOwnerId: ctx?.session?.user?.id,
    }
  })
  
  if(!isGroupAdmin) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Must be admin to send invite.'
    })
  }
}