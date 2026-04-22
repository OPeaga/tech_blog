export type user = {
  id: string;
  name: string;
  img: string | null;
  bio?: string;
  createdAt: string;
};

export type post = {
  id: string;
  user: user;
  theme: string;
  subtheme?: string;
  text: string;
  publishedAt: string;
};
