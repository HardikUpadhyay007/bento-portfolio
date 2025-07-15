export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags?: string[];
}
