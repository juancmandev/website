import ReactMarkdown from "react-markdown";
import type { MicroblogsResponse, TagsResponse } from "@/utils/pocketbase";
import formatDate from "@/utils/format-date";

type Props = MicroblogsResponse<unknown> & {
  expand: {
    tags: TagsResponse[];
  };
};

export default function MicroblogItem(props: Props) {
  return (
    <article className="rounded-sm border px-4 py-2">
      <header className="mb-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-light">
            {formatDate(new Date(props.published))}{" "}
          </span>
          <span className="text-sm font-thin">
            {new Date(props.published).toLocaleTimeString()}
          </span>
        </div>
        <div className="mt-1">
          {props.expand &&
            props.expand.tags &&
            props.expand.tags.map(
              (tag) =>
                tag && (
                  <span className="text-sm" key={tag.id}>
                    #{tag.name}{" "}
                  </span>
                ),
            )}
        </div>
      </header>
      <main>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </main>
    </article>
  );
}
