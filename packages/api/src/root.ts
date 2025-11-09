import { chatRouter } from "./routers/chat";
import { userRouter } from "./routers/user";
import { t } from "./index";

export const router = t.router;

export const appRouter = router({
  user: userRouter,
  chat: chatRouter,
});
export type AppRouter = typeof appRouter;
