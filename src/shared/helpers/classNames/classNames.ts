type Mods = Record<string, boolean | string>;

export const classNames = (
  className: string,
  additional: string[] = [],
  mods: Mods = {},
): string => {
  return [
    className,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter((key, value) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
};
