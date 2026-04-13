export type user = {
  id: string;
  name: string;
  img: string | null;
};

export type post = {
  id: string;
  user: user;
  theme: string;
  subtheme?: string;
  text: string;
  publishedAt: string;
};

export type postList = post[];
