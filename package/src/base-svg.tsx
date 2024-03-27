import React, { useMemo } from 'react';

export interface BaseSVGProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
  color?: string;
  viewBox?: string | undefined;
  colors?: string[];
}

export function BaseSVG({ size, style, color, colors, viewBox, children, ...rest }: BaseSVGProps) {
  const colorVars = useMemo(() => {
    if (color) return { '--svg-c0': color };
    if (colors) return Object.fromEntries(colors.map((c, i) => [`--svg-c${i}`, c]));

    return {};
  }, [color, colors]);

  const svgStyle = useMemo(
    () => ({
      width: size,
      height: size,
      ...style,
      ...colorVars,
    }),
    [style, size, colorVars]
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      version="1.1"
      {...rest}
      style={svgStyle}
    >
      {children}
    </svg>
  );
}
