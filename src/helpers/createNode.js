export const createNode = (str) => {
  const node = new DOMParser().parseFromString(str, "text/html").body
    .firstElementChild;
  return node;
};
