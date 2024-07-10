import { CreateUserSchema } from "@/shared/api";
import { prisma } from "../db";
import { isNotAuth, procedure, router } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  create: procedure
    .input(CreateUserSchema)
    .use(isNotAuth)
    .mutation(({ input, ctx: { user } }) => {
      return prisma.user.create({
        data: {
          ...input,
        },
      });
    }),
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
  // join: procedure
  //   .input(JoinEventSchema)
  //   .use(isAuth)
  //   .mutation(({ input, ctx: { user } }) => {
  //     return prisma.participation.create({
  //       data: {
  //         eventId: input.id,
  //         userId: user.id,
  //       },
  //     });
  //   }),
});
