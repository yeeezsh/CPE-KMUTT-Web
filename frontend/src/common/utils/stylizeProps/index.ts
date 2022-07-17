// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function stylizeProps(props: Record<string, any>): Record<string, any> {
  return Object.keys(props).reduce(
    (acc, key) => ({ ...acc, [`$${key}`]: props[key] }),
    {},
  );
}
