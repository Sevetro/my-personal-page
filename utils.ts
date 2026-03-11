import { createDefine } from "fresh";

import { Lang } from "./i18n/i18n.ts";

// This specifies the type of "ctx.state" which is used to share
// data among middlewares, layouts and routes.
export interface State {
  lang: Lang;
}

export const define = createDefine<State>();
