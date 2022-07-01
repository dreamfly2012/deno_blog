import { HandlerContext, PageProps } from "$fresh/server.ts";
export const handler = async (_req: Request, ctx: HandlerContext): Response => {
  const body = await Deno.readTextFile(`./posts/${ctx.params.id}.md`);
  return ctx.render({ body });
};

export default function BlogPostPage(props: PageProps) {
  const { body } = props.data;
  // ...
    return body
}
