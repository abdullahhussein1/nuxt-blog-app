export type Blog = {
  id: number;
  title: string;
  content: string;
  status: "published" | "unpublished";
  author: string;
};

export type Author = {
  id: number;
  name: string;
};
