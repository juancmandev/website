import formatDate from '@/utils/format-date';
import { Button } from '@/components/ui/button';

type Props = {
  id: string;
  date: Date | string;
  title: string;
  type: 'blog' | 'portfolio' | 'videos';
  lang: string;
};

export default function PostItem(props: Props) {
  return (
    <Button
      asChild
      size={null}
      variant='link'
      className='group hover:no-underline focus:no-underline text-foreground visited:text-purple-600 px-4 whitespace-normal py-2 flex flex-col items-start italic border border-secondary hover:border-foreground focus:border-foreground transition-colors rounded-md'
    >
      <a
        className='no-underline'
        href={
          props.lang === 'en'
            ? `/${props.type}/${props.id}`
            : `/es/${props.type}/${[props.id]}`
        }
      >
        <span className='text-foreground text-sm font-light no-underline'>
          {formatDate(props.date, props.lang)}
        </span>
        <span className='text-lg font-semibold group-hover:underline group-focus:underline'>
          {props.title}
        </span>
      </a>
    </Button>
  );
}
