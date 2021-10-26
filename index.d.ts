declare module "*.png" {
  const value: string;
  export default value;
}

type Post = {
  id: string,
  title: string,
  date: string,
  content: string
}