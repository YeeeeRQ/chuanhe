//自定义require方法
const myRequire = (name: string) => {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href;
};

export { myRequire };
