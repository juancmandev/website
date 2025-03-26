type TPostItem = {
  id: string;
  date: Date | string | undefined;
  title: string;
  type: 'blog' | 'portfolio' | 'videos';
  lang: string;
};
