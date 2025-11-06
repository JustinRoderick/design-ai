import { initTRPC, TRPCError } from "@trpc/server";
import type { Context } from "./context";
import { chatRouter } from "./routers/chat";
import { userRouter } from "./routers/user";

export const t = initTRPC.context<Context>().create();

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Authentication required",
      cause: "No session",
    });
  }
  return next({
    ctx: {
      ...ctx,
      session: ctx.session,
    },
  });
});

export const appRouter = router({
  user: userRouter,
  chat: chatRouter,
});
export type AppRouter = typeof appRouter;
