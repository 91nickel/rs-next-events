import { router } from "../trpc";
import { eventRouter } from "./event";
import { userRouter } from './user'
import { participationRouter } from './participation'

export const appRouter = router({
  event: eventRouter,
  user: userRouter,
  participation: participationRouter,
});

export type AppRouter = typeof appRouter;
