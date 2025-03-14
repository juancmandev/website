type TPostItem = {
  id: string;
  date: Date | string;
  title: string;
  type: 'blog' | 'portfolio' | 'videos';
  lang: string;
};
