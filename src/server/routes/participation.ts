import { CreateParticipationSchema, DeleteParticipationSchema } from '@/shared/api'
import { prisma } from '../db'
import { isAuth, procedure, router } from '../trpc'
import { z } from 'zod'

export const participationRouter = router({

  // findMany: procedure.query(async ({ ctx: { user } }) => {
  //   const events = await prisma.event.findMany({
  //     include: {
  //       participations: true,
  //     },
  //   });
  //
  //   return events.map(({ participations, ...event }) => ({
  //     ...event,
  //     isJoined: participations.some(({ userId }) => userId === user?.id),
  //   }));
  // }),

  // findUnique: procedure
  //   .input(
  //     z.object({
  //       id: z.number(),
  //     })
  //   )
  //   .use(isAuth)
  //   .query(({ input }) => {
  //     return prisma.event.findUnique({
  //       where: input,
  //       select: {
  //         title: true,
  //         description: true,
  //         date: true,
  //         participations: {
  //           select: {
  //             user: {
  //               select: {
  //                 name: true,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     });
  //   }),

  create: procedure
    .input(CreateParticipationSchema)
    .use(isAuth)
    .mutation(({input, ctx: {user}}) => {
      return prisma.participation.create({
        data: {
          userId: user.id,
          ...input,
        },
      })
    }),

  delete: procedure
    .input(DeleteParticipationSchema)
    .use(isAuth)
    .mutation(({input, ctx: {user}}) => {
      return prisma.participation.delete({
        where: {
          userId_eventId: {
            userId: user.id,
            ...input,
          }
        }
      })
    }),

})
