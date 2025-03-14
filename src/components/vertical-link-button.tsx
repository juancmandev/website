import { Button } from './ui/button';

type Props = {
  href?: string;
  children: React.ReactNode;
};

export default function VerticalLinkButton(props: Props) {
  return (
    <Button
      asChild
      size={null}
      variant='link'
      className='flex flex-col justify-center visited:text-purple-500'
    >
      <a
        target={props.href?.startsWith('h') ? '_blank' : ''}
        href={props.href}
      >
        {props.children}
      </a>
    </Button>
  );
}
