export type Department = {
  id: number;
  name: string;
  description: string;
  image: string;
  doctors: {
    id: number;
    name: string;
    title: string;
    image: string;
    exp: string;
  }[];
};
