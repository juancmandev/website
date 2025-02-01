type TAnchor = {
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function CustomAnchor(props: TAnchor) {
  return props.href.startsWith('/') || props.href.startsWith('#') ? (
    <a
      {...props}
      className='inline-flex outline-ring'
    />
  ) : (
    <a
      {...props}
      className='inline-flex outline-ring'
      target='_blank'
    />
  );
}
