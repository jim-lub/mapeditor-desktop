export const getUrlParams = (href: string) => {
  const obj: { [key: string]: string} = {};

  href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    (str: any, key: string, value: string) => {
      obj[key] = value
      return str;
    }
  );

  return obj;
}
