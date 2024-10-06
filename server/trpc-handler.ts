import { appRouter } from "../trpc/server";
// TODO: stop using universal-middleware and directly integrate server middlewares instead. (Bati generates boilerplates that use universal-middleware https://github.com/magne4000/universal-middleware to make Bati's internal logic easier. This is temporary and will be removed soon.)
import type { Get, UniversalHandler } from "@universal-middleware/core";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const trpcHandler = ((endpoint) => (request, context, runtime) => {
  return fetchRequestHandler({
    endpoint,
    req: request,
    router: appRouter,
    createContext({ req, resHeaders }) {
      return {
        ...context,
        ...runtime,
        req,
        resHeaders,
      };
    },
  });
}) satisfies Get<[endpoint: string], UniversalHandler>;
