declare module "*.png" {
  const content: string & { width: number; height: number; __imagePath: never };
  export default content;
}
