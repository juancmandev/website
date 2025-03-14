import formatDate from '@/utils/format-date';
import { Button } from '@/components/ui/button';

export default function PostItem(props: TPostItem) {
  return (
    <Button
      asChild
      size={null}
      variant='link'
      className='group p-0 hover:no-underline focus:no-underline text-foreground visited:text-purple-500 whitespace-normal flex flex-col items-start italic transition-colors rounded-md'
    >
      <a
        className='no-underline'
        href={
          props.lang === 'en'
            ? `/${props.type}/${props.id}`
            : `/es/${props.type}/${[props.id]}`
        }
      >
        <span className='text-foreground  text-sm font-light no-underline'>
          {formatDate(props.date, props.lang)}
        </span>
        <span className='text-lg font-semibold group-hover:underline group-focus:underline'>
          {props.title}
        </span>
      </a>
    </Button>
  );
}
