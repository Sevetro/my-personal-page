import { useSignal } from "@preact/signals";
import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";

export default define.page(function Home(ctx) {
  const count = useSignal(3);

  Deno.cwd;

  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="bg-(--bg-dark)
     min-h-screen     text-(--text-soft)">
      <Head>
        <title>Fresh counter</title>
      </Head>
      <div>
        hello
      </div>
    </div>
  );
});
