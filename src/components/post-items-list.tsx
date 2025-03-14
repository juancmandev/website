import PostItem from '@/components/post-item';
import type { CollectionEntry } from 'astro:content';

type Props = {
  items: any;
  lang: string;
};

export default function PostItemList(props: Props) {
  return (
    <ul>
      {props.items.map(
        (item: CollectionEntry<'blog' | 'videos'>) =>
          item && (
            <li key={item.id}>
              <PostItem
                type={item.collection}
                lang={props.lang}
                id={item.id}
                date={item.data.date!}
                title={item.data.title!}
              />
            </li>
          )
      )}
    </ul>
  );
}
