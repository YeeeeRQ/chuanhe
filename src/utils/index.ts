//自定义require方法
const xRequire = (name: string) => {
  return new URL(`/images/${name}`, import.meta.url).href;
};

export { xRequire };
