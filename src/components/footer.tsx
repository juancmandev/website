import { Code, RssIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import formatDate from '@/utils/format-date';
import type { lang } from '@/i18n/utils';
import { footerLocales } from '@/i18n/footerLocales';
import VerticalLinkButton from '@/components/vertical-link-button';

type Props = {
  lang: lang;
};

export default function Footer({ lang }: Props) {
  return (
    <footer className='px-2 pt-14 pb-28 text-center md:px-0 prose prose-invert min-w-full'>
      <section>
        <p>
          {footerLocales[lang].built_with}
          <Button
            asChild
            size={null}
            variant='link'
            className='m-0 p-0 text-base visited:text-purple-500'
          >
            <a
              href='https://astro.build/'
              target='_blank'
            >
              Astro
            </a>
          </Button>
        </p>
        <p>
          {footerLocales[lang].last_build}: {formatDate(new Date(), lang)}.
        </p>
      </section>
      <section className='w-max mx-auto flex items-center gap-12'>
        <VerticalLinkButton
          href={`https://juancman.dev/${lang === 'es' ? 'es' : ''}feed.xml`}
        >
          <RssIcon className='w-6' />
          RSS feed
        </VerticalLinkButton>
        <VerticalLinkButton href='https://git.juancman.dev/juancmandev/website'>
          <Code className='w-6' />
          Source Code
        </VerticalLinkButton>
      </section>
    </footer>
  );
}
