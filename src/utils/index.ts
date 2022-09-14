//自定义require方法
const xRequire = (name: string) => {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href;
};

export { xRequire as myRequire };
