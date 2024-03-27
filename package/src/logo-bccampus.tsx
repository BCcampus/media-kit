import React, { useMemo } from 'react';
import { BaseSVG, BaseSVGProps } from './base-svg';
import { COLORS } from './colors';

interface LogoBCcampusProps extends BaseSVGProps {
  variant?: 'white' | 'black' | 'color';
}

export function LogoBCcampus({ variant, colors, ...props }: LogoBCcampusProps) {
  const computedColors = useMemo(() => {
    switch (variant) {
      case 'white':
        return [COLORS.Light];
      case 'black':
        return [COLORS.Dark];
      case 'color':
        return [COLORS.DarkBlue, COLORS.DarkTurquoise];
      default:
        return colors;
    }
  }, [variant, colors]);

  return (
    <BaseSVG
      {...props}
      viewBox="0 0 755.1333 181.57333"
      className="bcc-logo-bccampus"
      colors={computedColors}
    >
      <style>
        {`.bcc-logo-bccampus path{fill-opacity:1;fill-rule:nonzero;stroke:none;}
          .bcc-logo-bccampus .c0{fill: var(--svg-c0);} 
          .bcc-logo-bccampus .c1{fill: var(--svg-c1, var(--svg-c0));}`}
      </style>

      <g transform="matrix(1.3333333,0,0,-1.3333333,0,181.57333)">
        <g transform="scale(0.1)">
          <path
            className="c0"
            d="m 266.645,1228.43 c 0,-18.64 -15.11,-33.76 -33.77,-33.76 -18.645,0 -33.77,15.12 -33.77,33.76 0,18.68 15.125,33.78 33.77,33.78 18.66,0 33.77,-15.1 33.77,-33.78"
          />
          <path
            className="c0"
            d="m 366.191,1128.87 c 0,-18.66 -15.117,-33.78 -33.777,-33.78 -18.641,0 -33.762,15.12 -33.762,33.78 0,18.66 15.121,33.78 33.762,33.78 18.66,0 33.777,-15.12 33.777,-33.78"
          />
          <path
            className="c0"
            d="m 465.734,730.668 c 0,-18.691 -15.117,-33.789 -33.769,-33.789 -18.645,0 -33.754,15.098 -33.754,33.789 0,18.613 15.109,33.754 33.754,33.754 18.652,0 33.769,-15.141 33.769,-33.754"
          />
          <path
            className="c0"
            d="m 465.734,1029.31 c 0,-18.64 -15.117,-33.763 -33.769,-33.763 -18.645,0 -33.754,15.123 -33.754,33.763 0,18.67 15.109,33.8 33.754,33.8 18.652,0 33.769,-15.13 33.769,-33.8"
          />
          <path
            className="c0"
            d="m 465.734,1328.01 c 0,-18.68 -15.117,-33.8 -33.769,-33.8 -18.645,0 -33.754,15.12 -33.754,33.8 0,18.62 15.109,33.76 33.754,33.76 18.652,0 33.769,-15.14 33.769,-33.76"
          />
          <path
            className="c0"
            d="m 664.852,133.32 c 0,-18.66 -15.129,-33.7614 -33.789,-33.7614 -18.637,0 -33.762,15.1014 -33.762,33.7614 0,18.66 15.125,33.801 33.762,33.801 18.66,0 33.789,-15.141 33.789,-33.801"
          />
          <path
            className="c0"
            d="m 664.852,332.43 c 0,-18.66 -15.129,-33.758 -33.789,-33.758 -18.637,0 -33.762,15.098 -33.762,33.758 0,18.66 15.125,33.758 33.762,33.758 18.66,0 33.789,-15.098 33.789,-33.758"
          />
          <path
            className="c0"
            d="m 664.852,730.668 c 0,-18.691 -15.129,-33.789 -33.789,-33.789 -18.637,0 -33.762,15.098 -33.762,33.789 0,18.613 15.125,33.754 33.762,33.754 18.66,0 33.789,-15.141 33.789,-33.754"
          />
          <path
            className="c0"
            d="m 664.852,929.746 c 0,-18.641 -15.129,-33.777 -33.789,-33.777 -18.637,0 -33.762,15.136 -33.762,33.777 0,18.641 15.125,33.781 33.762,33.781 18.66,0 33.789,-15.14 33.789,-33.781"
          />
          <path
            className="c0"
            d="m 664.852,1128.87 c 0,-18.66 -15.129,-33.78 -33.789,-33.78 -18.637,0 -33.762,15.12 -33.762,33.78 0,18.66 15.125,33.78 33.762,33.78 18.66,0 33.789,-15.12 33.789,-33.78"
          />
          <path
            className="c0"
            d="m 664.852,1228.43 c 0,-18.64 -15.129,-33.76 -33.789,-33.76 -18.637,0 -33.762,15.12 -33.762,33.76 0,18.68 15.125,33.78 33.762,33.78 18.66,0 33.789,-15.1 33.789,-33.78"
          />
          <path
            className="c0"
            d="m 764.395,631.094 c 0,-18.66 -15.114,-33.778 -33.77,-33.778 -18.648,0 -33.773,15.118 -33.773,33.778 0,18.66 15.125,33.781 33.773,33.781 18.656,0 33.77,-15.121 33.77,-33.781"
          />
          <path
            className="c0"
            d="m 764.395,1029.31 c 0,-18.64 -15.114,-33.763 -33.77,-33.763 -18.648,0 -33.773,15.123 -33.773,33.763 0,18.67 15.125,33.8 33.773,33.8 18.656,0 33.77,-15.13 33.77,-33.8"
          />
          <path
            className="c0"
            d="m 863.945,232.891 c 0,-18.653 -15.121,-33.782 -33.777,-33.782 -18.645,0 -33.762,15.129 -33.762,33.782 0,18.66 15.117,33.769 33.762,33.769 18.656,0 33.777,-15.109 33.777,-33.769"
          />
          <path
            className="c0"
            d="m 863.945,730.668 c 0,-18.691 -15.121,-33.789 -33.777,-33.789 -18.645,0 -33.762,15.098 -33.762,33.789 0,18.613 15.117,33.754 33.762,33.754 18.656,0 33.777,-15.141 33.777,-33.754"
          />
          <path
            className="c0"
            d="m 863.945,1228.43 c 0,-18.66 -15.121,-33.78 -33.777,-33.78 -18.645,0 -33.762,15.12 -33.762,33.78 0,18.63 15.117,33.76 33.762,33.76 18.656,0 33.777,-15.13 33.777,-33.76"
          />
          <path
            className="c0"
            d="m 863.945,1328.01 c 0,-18.68 -15.121,-33.8 -33.777,-33.8 -18.645,0 -33.762,15.12 -33.762,33.8 0,18.62 15.117,33.76 33.762,33.76 18.656,0 33.777,-15.14 33.777,-33.76"
          />
          <path
            className="c0"
            d="m 963.496,929.773 c 0,-18.648 -15.121,-33.769 -33.777,-33.769 -18.637,0 -33.762,15.121 -33.762,33.769 0,18.653 15.125,33.77 33.762,33.77 18.656,0 33.777,-15.117 33.777,-33.77"
          />
          <path
            className="c0"
            d="m 1063.06,133.32 c 0,-18.66 -15.13,-33.7614 -33.79,-33.7614 -18.64,0 -33.758,15.1014 -33.758,33.7614 0,18.66 15.118,33.801 33.758,33.801 18.66,0 33.79,-15.141 33.79,-33.801"
          />
          <path
            className="c0"
            d="m 1063.06,332.43 c 0,-18.66 -15.13,-33.758 -33.79,-33.758 -18.64,0 -33.758,15.098 -33.758,33.758 0,18.66 15.118,33.758 33.758,33.758 18.66,0 33.79,-15.098 33.79,-33.758"
          />
          <path
            className="c0"
            d="m 1063.06,631.094 c 0,-18.66 -15.13,-33.778 -33.79,-33.778 -18.64,0 -33.758,15.118 -33.758,33.778 0,18.66 15.118,33.781 33.758,33.781 18.66,0 33.79,-15.121 33.79,-33.781"
          />
          <path
            className="c0"
            d="m 1063.06,1228.43 c 0,-18.66 -15.13,-33.78 -33.79,-33.78 -18.64,0 -33.758,15.12 -33.758,33.78 0,18.63 15.118,33.76 33.758,33.76 18.66,0 33.79,-15.13 33.79,-33.76"
          />
          <path
            className="c0"
            d="m 1262.16,531.555 c 0,-18.645 -15.13,-33.782 -33.78,-33.782 -18.65,0 -33.77,15.137 -33.77,33.782 0,18.636 15.12,33.777 33.77,33.777 18.65,0 33.78,-15.141 33.78,-33.777"
          />
          <path
            className="c0"
            d="m 1361.7,133.32 c 0,-18.66 -15.12,-33.7614 -33.78,-33.7614 -18.64,0 -33.75,15.1014 -33.75,33.7614 0,18.66 15.11,33.801 33.75,33.801 18.66,0 33.78,-15.141 33.78,-33.801"
          />
          <path
            className="c0"
            d="m 1361.7,232.891 c 0,-18.653 -15.12,-33.782 -33.78,-33.782 -18.64,0 -33.75,15.129 -33.75,33.782 0,18.66 15.11,33.769 33.75,33.769 18.66,0 33.78,-15.109 33.78,-33.769"
          />
          <path
            className="c0"
            d="m 1461.25,332.43 c 0,-18.66 -15.12,-33.758 -33.77,-33.758 -18.66,0 -33.76,15.098 -33.76,33.758 0,18.66 15.1,33.758 33.76,33.758 18.65,0 33.77,-15.098 33.77,-33.758"
          />
          <path
            className="c0"
            d="m 167.094,1328.01 c 0,-18.68 -15.117,-33.8 -33.778,-33.8 -18.64,0 -33.7652,15.12 -33.7652,33.8 0,18.62 15.1252,33.76 33.7652,33.76 18.661,0 33.778,-15.14 33.778,-33.76"
          />
          <path
            className="c0"
            d="m 366.191,1029.31 c 0,-18.64 -15.117,-33.763 -33.777,-33.763 -18.641,0 -33.762,15.123 -33.762,33.763 0,18.67 15.121,33.8 33.762,33.8 18.66,0 33.777,-15.13 33.777,-33.8"
          />
          <path
            className="c0"
            d="m 366.191,1228.43 c 0,-18.64 -15.117,-33.76 -33.777,-33.76 -18.641,0 -33.762,15.12 -33.762,33.76 0,18.68 15.121,33.78 33.762,33.78 18.66,0 33.777,-15.1 33.777,-33.78"
          />
          <path
            className="c0"
            d="m 465.734,929.746 c 0,-18.641 -15.117,-33.777 -33.769,-33.777 -18.645,0 -33.754,15.136 -33.754,33.777 0,18.641 15.109,33.781 33.754,33.781 18.652,0 33.769,-15.14 33.769,-33.781"
          />
          <path
            className="c0"
            d="m 465.734,1228.43 c 0,-18.64 -15.117,-33.76 -33.769,-33.76 -18.645,0 -33.754,15.12 -33.754,33.76 0,18.68 15.109,33.78 33.754,33.78 18.652,0 33.769,-15.1 33.769,-33.78"
          />
          <path
            className="c0"
            d="m 565.305,730.668 c 0,-18.691 -15.125,-33.789 -33.797,-33.789 -18.629,0 -33.75,15.098 -33.75,33.789 0,18.613 15.121,33.754 33.75,33.754 18.672,0 33.797,-15.141 33.797,-33.754"
          />
          <path
            className="c0"
            d="m 565.305,929.773 c 0,-18.648 -15.125,-33.769 -33.797,-33.769 -18.629,0 -33.75,15.121 -33.75,33.769 0,18.653 15.121,33.77 33.75,33.77 18.672,0 33.797,-15.117 33.797,-33.77"
          />
          <path
            className="c0"
            d="m 565.305,1029.31 c 0,-18.64 -15.125,-33.763 -33.797,-33.763 -18.629,0 -33.75,15.123 -33.75,33.763 0,18.67 15.121,33.8 33.75,33.8 18.672,0 33.797,-15.13 33.797,-33.8"
          />
          <path
            className="c0"
            d="m 565.305,1128.87 c 0,-18.66 -15.125,-33.78 -33.797,-33.78 -18.629,0 -33.75,15.12 -33.75,33.78 0,18.66 15.121,33.78 33.75,33.78 18.672,0 33.797,-15.12 33.797,-33.78"
          />
          <path
            className="c0"
            d="m 565.305,1328.01 c 0,-18.68 -15.125,-33.8 -33.797,-33.8 -18.629,0 -33.75,15.12 -33.75,33.8 0,18.62 15.121,33.76 33.75,33.76 18.672,0 33.797,-15.14 33.797,-33.76"
          />
          <path
            className="c0"
            d="m 664.852,431.988 c 0,-18.636 -15.129,-33.777 -33.789,-33.777 -18.637,0 -33.762,15.141 -33.762,33.777 0,18.664 15.125,33.762 33.762,33.762 18.66,0 33.789,-15.098 33.789,-33.762"
          />
          <path
            className="c0"
            d="m 664.852,531.555 c 0,-18.645 -15.129,-33.782 -33.789,-33.782 -18.637,0 -33.762,15.137 -33.762,33.782 0,18.636 15.125,33.777 33.762,33.777 18.66,0 33.789,-15.141 33.789,-33.777"
          />
          <path
            className="c0"
            d="m 664.852,631.094 c 0,-18.66 -15.129,-33.778 -33.789,-33.778 -18.637,0 -33.762,15.118 -33.762,33.778 0,18.66 15.125,33.781 33.762,33.781 18.66,0 33.789,-15.121 33.789,-33.781"
          />
          <path
            className="c0"
            d="m 764.395,332.43 c 0,-18.66 -15.114,-33.758 -33.77,-33.758 -18.648,0 -33.773,15.098 -33.773,33.758 0,18.66 15.125,33.758 33.773,33.758 18.656,0 33.77,-15.098 33.77,-33.758"
          />
          <path
            className="c0"
            d="m 764.395,431.988 c 0,-18.636 -15.114,-33.777 -33.77,-33.777 -18.648,0 -33.773,15.141 -33.773,33.777 0,18.664 15.125,33.762 33.773,33.762 18.656,0 33.77,-15.098 33.77,-33.762"
          />
          <path
            className="c0"
            d="m 764.395,830.195 c 0,-18.648 -15.114,-33.769 -33.77,-33.769 -18.648,0 -33.773,15.121 -33.773,33.769 0,18.668 15.125,33.77 33.773,33.77 18.656,0 33.77,-15.102 33.77,-33.77"
          />
          <path
            className="c0"
            d="m 764.395,929.773 c 0,-18.648 -15.114,-33.769 -33.77,-33.769 -18.648,0 -33.773,15.121 -33.773,33.769 0,18.653 15.125,33.77 33.773,33.77 18.656,0 33.77,-15.117 33.77,-33.77"
          />
          <path
            className="c0"
            d="m 764.395,1228.43 c 0,-18.66 -15.114,-33.78 -33.77,-33.78 -18.648,0 -33.773,15.12 -33.773,33.78 0,18.63 15.125,33.76 33.773,33.76 18.656,0 33.77,-15.13 33.77,-33.76"
          />
          <path
            className="c0"
            d="m 863.945,531.555 c 0,-18.645 -15.121,-33.782 -33.777,-33.782 -18.645,0 -33.762,15.137 -33.762,33.782 0,18.636 15.117,33.777 33.762,33.777 18.656,0 33.777,-15.141 33.777,-33.777"
          />
          <path
            className="c0"
            d="m 863.945,830.195 c 0,-18.648 -15.121,-33.769 -33.777,-33.769 -18.645,0 -33.762,15.121 -33.762,33.769 0,18.668 15.117,33.77 33.762,33.77 18.656,0 33.777,-15.102 33.777,-33.77"
          />
          <path
            className="c0"
            d="m 963.496,332.43 c 0,-18.66 -15.121,-33.758 -33.777,-33.758 -18.637,0 -33.762,15.098 -33.762,33.758 0,18.66 15.125,33.758 33.762,33.758 18.656,0 33.777,-15.098 33.777,-33.758"
          />
          <path
            className="c0"
            d="m 963.496,531.555 c 0,-18.645 -15.121,-33.782 -33.777,-33.782 -18.637,0 -33.762,15.137 -33.762,33.782 0,18.636 15.125,33.777 33.762,33.777 18.656,0 33.777,-15.141 33.777,-33.777"
          />
          <path
            className="c0"
            d="m 963.496,631.094 c 0,-18.66 -15.121,-33.778 -33.777,-33.778 -18.637,0 -33.762,15.118 -33.762,33.778 0,18.66 15.125,33.781 33.762,33.781 18.656,0 33.777,-15.121 33.777,-33.781"
          />
          <path
            className="c0"
            d="m 963.496,730.668 c 0,-18.691 -15.121,-33.789 -33.777,-33.789 -18.637,0 -33.762,15.098 -33.762,33.789 0,18.613 15.125,33.754 33.762,33.754 18.656,0 33.777,-15.141 33.777,-33.754"
          />
          <path
            className="c0"
            d="m 963.496,1029.31 c 0,-18.64 -15.121,-33.763 -33.777,-33.763 -18.637,0 -33.762,15.123 -33.762,33.763 0,18.67 15.125,33.8 33.762,33.8 18.656,0 33.777,-15.13 33.777,-33.8"
          />
          <path
            className="c0"
            d="m 963.496,1128.87 c 0,-18.66 -15.121,-33.78 -33.777,-33.78 -18.637,0 -33.762,15.12 -33.762,33.78 0,18.66 15.125,33.78 33.762,33.78 18.656,0 33.777,-15.12 33.777,-33.78"
          />
          <path
            className="c0"
            d="m 963.496,1328.01 c 0,-18.68 -15.121,-33.8 -33.777,-33.8 -18.637,0 -33.762,15.12 -33.762,33.8 0,18.62 15.125,33.76 33.762,33.76 18.656,0 33.777,-15.14 33.777,-33.76"
          />
          <path
            className="c0"
            d="m 1063.06,531.555 c 0,-18.645 -15.13,-33.782 -33.79,-33.782 -18.64,0 -33.758,15.137 -33.758,33.782 0,18.636 15.118,33.777 33.758,33.777 18.66,0 33.79,-15.141 33.79,-33.777"
          />
          <path
            className="c0"
            d="m 1063.06,830.195 c 0,-18.648 -15.13,-33.769 -33.79,-33.769 -18.64,0 -33.758,15.121 -33.758,33.769 0,18.668 15.118,33.77 33.758,33.77 18.66,0 33.79,-15.102 33.79,-33.77"
          />
          <path
            className="c0"
            d="m 1063.06,929.773 c 0,-18.648 -15.13,-33.769 -33.79,-33.769 -18.64,0 -33.758,15.121 -33.758,33.769 0,18.653 15.118,33.77 33.758,33.77 18.66,0 33.79,-15.117 33.79,-33.77"
          />
          <path
            className="c0"
            d="m 1063.06,1128.87 c 0,-18.66 -15.13,-33.78 -33.79,-33.78 -18.64,0 -33.758,15.12 -33.758,33.78 0,18.66 15.118,33.78 33.758,33.78 18.66,0 33.79,-15.12 33.79,-33.78"
          />
          <path
            className="c0"
            d="m 1162.6,232.891 c 0,-18.653 -15.12,-33.782 -33.78,-33.782 -18.63,0 -33.76,15.129 -33.76,33.782 0,18.66 15.13,33.769 33.76,33.769 18.66,0 33.78,-15.109 33.78,-33.769"
          />
          <path
            className="c0"
            d="m 1162.6,531.555 c 0,-18.645 -15.12,-33.782 -33.78,-33.782 -18.63,0 -33.76,15.137 -33.76,33.782 0,18.636 15.13,33.777 33.76,33.777 18.66,0 33.78,-15.141 33.78,-33.777"
          />
          <path
            className="c0"
            d="m 1262.16,232.891 c 0,-18.653 -15.13,-33.782 -33.78,-33.782 -18.65,0 -33.77,15.129 -33.77,33.782 0,18.66 15.12,33.769 33.77,33.769 18.65,0 33.78,-15.109 33.78,-33.769"
          />
          <path
            className="c0"
            d="m 1361.7,332.43 c 0,-18.66 -15.12,-33.758 -33.78,-33.758 -18.64,0 -33.75,15.098 -33.75,33.758 0,18.66 15.11,33.758 33.75,33.758 18.66,0 33.78,-15.098 33.78,-33.758"
          />
          <path
            className="c0"
            d="m 1461.25,133.32 c 0,-18.66 -15.12,-33.7614 -33.77,-33.7614 -18.66,0 -33.76,15.1014 -33.76,33.7614 0,18.66 15.1,33.801 33.76,33.801 18.65,0 33.77,-15.141 33.77,-33.801"
          />
          <path
            className="c0"
            d="m 1560.81,232.891 c 0,-18.653 -15.13,-33.782 -33.78,-33.782 -18.66,0 -33.77,15.129 -33.77,33.782 0,18.66 15.11,33.769 33.77,33.769 18.65,0 33.78,-15.109 33.78,-33.769"
          />
          <path
            className="c0"
            d="m 266.645,531.555 c 0,-18.645 -15.11,-33.782 -33.77,-33.782 -18.645,0 -33.77,15.137 -33.77,33.782 0,18.636 15.125,33.777 33.77,33.777 18.66,0 33.77,-15.141 33.77,-33.777"
          />
          <path
            className="c0"
            d="m 266.645,631.094 c 0,-18.66 -15.11,-33.778 -33.77,-33.778 -18.645,0 -33.77,15.118 -33.77,33.778 0,18.66 15.125,33.781 33.77,33.781 18.66,0 33.77,-15.121 33.77,-33.781"
          />
          <path
            className="c0"
            d="m 266.645,1328.01 c 0,-18.68 -15.11,-33.8 -33.77,-33.8 -18.645,0 -33.77,15.12 -33.77,33.8 0,18.62 15.125,33.76 33.77,33.76 18.66,0 33.77,-15.14 33.77,-33.76"
          />
          <path
            className="c0"
            d="m 465.734,1128.87 c 0,-18.66 -15.117,-33.78 -33.769,-33.78 -18.645,0 -33.754,15.12 -33.754,33.78 0,18.66 15.109,33.78 33.754,33.78 18.652,0 33.769,-15.12 33.769,-33.78"
          />
          <path
            className="c0"
            d="m 565.305,631.094 c 0,-18.66 -15.125,-33.778 -33.797,-33.778 -18.629,0 -33.75,15.118 -33.75,33.778 0,18.66 15.121,33.781 33.75,33.781 18.672,0 33.797,-15.121 33.797,-33.781"
          />
          <path
            className="c0"
            d="m 565.305,830.195 c 0,-18.648 -15.125,-33.769 -33.797,-33.769 -18.629,0 -33.75,15.121 -33.75,33.769 0,18.668 15.121,33.77 33.75,33.77 18.672,0 33.797,-15.102 33.797,-33.77"
          />
          <path
            className="c0"
            d="m 565.305,1228.43 c 0,-18.64 -15.125,-33.76 -33.797,-33.76 -18.629,0 -33.75,15.12 -33.75,33.76 0,18.68 15.121,33.78 33.75,33.78 18.672,0 33.797,-15.1 33.797,-33.78"
          />
          <path
            className="c0"
            d="M 764.395,33.7813 C 764.395,15.1406 749.281,0 730.625,0 c -18.648,0 -33.773,15.1406 -33.773,33.7813 0,18.6601 15.125,33.7578 33.773,33.7578 18.656,0 33.77,-15.0977 33.77,-33.7578"
          />
          <path
            className="c0"
            d="m 764.395,1128.87 c 0,-18.66 -15.114,-33.78 -33.77,-33.78 -18.648,0 -33.773,15.12 -33.773,33.78 0,18.66 15.125,33.78 33.773,33.78 18.656,0 33.77,-15.12 33.77,-33.78"
          />
          <path
            className="c0"
            d="m 764.395,1328.01 c 0,-18.68 -15.114,-33.8 -33.77,-33.8 -18.648,0 -33.773,15.12 -33.773,33.8 0,18.62 15.125,33.76 33.773,33.76 18.656,0 33.77,-15.14 33.77,-33.76"
          />
          <path
            className="c0"
            d="m 863.945,332.43 c 0,-18.66 -15.121,-33.758 -33.777,-33.758 -18.645,0 -33.762,15.098 -33.762,33.758 0,18.66 15.117,33.758 33.762,33.758 18.656,0 33.777,-15.098 33.777,-33.758"
          />
          <path
            className="c0"
            d="m 863.945,631.094 c 0,-18.66 -15.121,-33.778 -33.777,-33.778 -18.645,0 -33.762,15.118 -33.762,33.778 0,18.66 15.117,33.781 33.762,33.781 18.656,0 33.777,-15.121 33.777,-33.781"
          />
          <path
            className="c0"
            d="m 863.945,1029.31 c 0,-18.64 -15.121,-33.763 -33.777,-33.763 -18.645,0 -33.762,15.123 -33.762,33.763 0,18.67 15.117,33.8 33.762,33.8 18.656,0 33.777,-15.13 33.777,-33.8"
          />
          <path
            className="c0"
            d="m 963.496,431.988 c 0,-18.636 -15.121,-33.777 -33.777,-33.777 -18.637,0 -33.762,15.141 -33.762,33.777 0,18.664 15.125,33.762 33.762,33.762 18.656,0 33.777,-15.098 33.777,-33.762"
          />
          <path
            className="c0"
            d="m 963.496,1228.43 c 0,-18.66 -15.121,-33.78 -33.777,-33.78 -18.637,0 -33.762,15.12 -33.762,33.78 0,18.63 15.125,33.76 33.762,33.76 18.656,0 33.777,-15.13 33.777,-33.76"
          />
          <path
            className="c0"
            d="m 1063.06,730.668 c 0,-18.691 -15.13,-33.789 -33.79,-33.789 -18.64,0 -33.758,15.098 -33.758,33.789 0,18.613 15.118,33.754 33.758,33.754 18.66,0 33.79,-15.141 33.79,-33.754"
          />
          <path
            className="c0"
            d="m 1063.06,1029.31 c 0,-18.64 -15.13,-33.763 -33.79,-33.763 -18.64,0 -33.758,15.123 -33.758,33.763 0,18.67 15.118,33.8 33.758,33.8 18.66,0 33.79,-15.13 33.79,-33.8"
          />
          <path
            className="c0"
            d="m 1063.06,1328.01 c 0,-18.68 -15.13,-33.8 -33.79,-33.8 -18.64,0 -33.758,15.12 -33.758,33.8 0,18.62 15.118,33.76 33.758,33.76 18.66,0 33.79,-15.14 33.79,-33.76"
          />
          <path
            className="c0"
            d="m 1162.6,133.32 c 0,-18.66 -15.12,-33.7614 -33.78,-33.7614 -18.63,0 -33.76,15.1014 -33.76,33.7614 0,18.66 15.13,33.801 33.76,33.801 18.66,0 33.78,-15.141 33.78,-33.801"
          />
          <path
            className="c0"
            d="m 1162.6,431.988 c 0,-18.636 -15.12,-33.777 -33.78,-33.777 -18.63,0 -33.76,15.141 -33.76,33.777 0,18.664 15.13,33.762 33.76,33.762 18.66,0 33.78,-15.098 33.78,-33.762"
          />
          <path
            className="c0"
            d="m 1361.7,431.988 c 0,-18.636 -15.12,-33.777 -33.78,-33.777 -18.64,0 -33.75,15.141 -33.75,33.777 0,18.664 15.11,33.762 33.75,33.762 18.66,0 33.78,-15.098 33.78,-33.762"
          />
          <path
            className="c0"
            d="m 664.852,830.195 c 0,-18.648 -15.129,-33.769 -33.789,-33.769 -18.637,0 -33.762,15.121 -33.762,33.769 0,18.668 15.125,33.77 33.762,33.77 18.66,0 33.789,-15.102 33.789,-33.77"
          />
          <path
            className="c0"
            d="m 1063.06,431.988 c 0,-18.636 -15.13,-33.777 -33.79,-33.777 -18.64,0 -33.758,15.141 -33.758,33.777 0,18.664 15.118,33.762 33.758,33.762 18.66,0 33.79,-15.098 33.79,-33.762"
          />
          <path
            className="c0"
            d="m 764.395,531.555 c 0,-18.645 -15.114,-33.782 -33.77,-33.782 -18.648,0 -33.773,15.137 -33.773,33.782 0,18.636 15.125,33.777 33.773,33.777 18.656,0 33.77,-15.141 33.77,-33.777"
          />
          <path
            className="c0"
            d="m 963.496,133.32 c 0,-18.66 -15.121,-33.7614 -33.777,-33.7614 -18.637,0 -33.762,15.1014 -33.762,33.7614 0,18.66 15.125,33.801 33.762,33.801 18.656,0 33.777,-15.141 33.777,-33.801"
          />
          <path
            className="c0"
            d="m 565.305,232.891 c 0,-18.653 -15.125,-33.782 -33.797,-33.782 -18.629,0 -33.75,15.129 -33.75,33.782 0,18.66 15.121,33.769 33.75,33.769 18.672,0 33.797,-15.109 33.797,-33.769"
          />
          <path
            className="c0"
            d="m 863.945,929.773 c 0,-18.648 -15.121,-33.769 -33.777,-33.769 -18.645,0 -33.762,15.121 -33.762,33.769 0,18.653 15.117,33.77 33.762,33.77 18.656,0 33.777,-15.117 33.777,-33.77"
          />
          <path
            className="c0"
            d="M 863.945,33.7813 C 863.945,15.1406 848.824,0 830.168,0 c -18.645,0 -33.762,15.1406 -33.762,33.7813 0,18.6601 15.117,33.7578 33.762,33.7578 18.656,0 33.777,-15.0977 33.777,-33.7578"
          />
          <path
            className="c0"
            d="m 1461.25,232.891 c 0,-18.653 -15.12,-33.782 -33.77,-33.782 -18.66,0 -33.76,15.129 -33.76,33.782 0,18.66 15.1,33.769 33.76,33.769 18.65,0 33.77,-15.109 33.77,-33.769"
          />
          <path
            className="c0"
            d="m 565.305,531.555 c 0,-18.645 -15.125,-33.782 -33.797,-33.782 -18.629,0 -33.75,15.137 -33.75,33.782 0,18.636 15.121,33.777 33.75,33.777 18.672,0 33.797,-15.141 33.797,-33.777"
          />
          <path
            className="c0"
            d="m 863.945,1128.87 c 0,-18.66 -15.121,-33.78 -33.777,-33.78 -18.645,0 -33.762,15.12 -33.762,33.78 0,18.66 15.117,33.78 33.762,33.78 18.656,0 33.777,-15.12 33.777,-33.78"
          />
          <path
            className="c0"
            d="m 963.496,232.891 c 0,-18.653 -15.121,-33.782 -33.777,-33.782 -18.637,0 -33.762,15.129 -33.762,33.782 0,18.66 15.125,33.769 33.762,33.769 18.656,0 33.777,-15.109 33.777,-33.769"
          />
          <path
            className="c0"
            d="m 1262.16,332.43 c 0,-18.66 -15.13,-33.758 -33.78,-33.758 -18.65,0 -33.77,15.098 -33.77,33.758 0,18.66 15.12,33.758 33.77,33.758 18.65,0 33.78,-15.098 33.78,-33.758"
          />
          <path
            className="c0"
            d="m 465.734,830.195 c 0,-18.648 -15.117,-33.769 -33.769,-33.769 -18.645,0 -33.754,15.121 -33.754,33.769 0,18.668 15.109,33.77 33.754,33.77 18.652,0 33.769,-15.102 33.769,-33.77"
          />
          <path
            className="c0"
            d="m 664.852,1328.01 c 0,-18.68 -15.129,-33.8 -33.789,-33.8 -18.637,0 -33.762,15.12 -33.762,33.8 0,18.62 15.125,33.76 33.762,33.76 18.66,0 33.789,-15.14 33.789,-33.76"
          />
          <path
            className="c0"
            d="m 664.852,1029.31 c 0,-18.64 -15.129,-33.763 -33.789,-33.763 -18.637,0 -33.762,15.123 -33.762,33.763 0,18.67 15.125,33.8 33.762,33.8 18.66,0 33.789,-15.13 33.789,-33.8"
          />
          <path
            className="c0"
            d="m 1162.6,332.43 c 0,-18.66 -15.12,-33.758 -33.78,-33.758 -18.63,0 -33.76,15.098 -33.76,33.758 0,18.66 15.13,33.758 33.76,33.758 18.66,0 33.78,-15.098 33.78,-33.758"
          />
          <path
            className="c0"
            d="m 1262.16,133.32 c 0,-18.66 -15.13,-33.7614 -33.78,-33.7614 -18.65,0 -33.77,15.1014 -33.77,33.7614 0,18.66 15.12,33.801 33.77,33.801 18.65,0 33.78,-15.141 33.78,-33.801"
          />
          <path
            className="c0"
            d="m 764.395,133.32 c 0,-18.66 -15.114,-33.7614 -33.77,-33.7614 -18.648,0 -33.773,15.1014 -33.773,33.7614 0,18.66 15.125,33.801 33.773,33.801 18.656,0 33.77,-15.141 33.77,-33.801"
          />
          <path
            className="c0"
            d="m 863.945,431.988 c 0,-18.636 -15.121,-33.777 -33.777,-33.777 -18.645,0 -33.762,15.141 -33.762,33.777 0,18.664 15.117,33.762 33.762,33.762 18.656,0 33.777,-15.098 33.777,-33.762"
          />
          <path
            className="c0"
            d="m 366.191,431.988 c 0,-18.636 -15.117,-33.777 -33.777,-33.777 -18.641,0 -33.762,15.141 -33.762,33.777 0,18.664 15.121,33.762 33.762,33.762 18.66,0 33.777,-15.098 33.777,-33.762"
          />
          <path
            className="c0"
            d="m 67.5391,1328.01 c 0,-18.68 -15.1094,-33.8 -33.7696,-33.8 -18.6367,0 -33.7695,15.12 -33.7695,33.8 0,18.62 15.1328,33.76 33.7695,33.76 18.6602,0 33.7696,-15.14 33.7696,-33.76"
          />
          <path
            className="c0"
            d="m 764.395,730.668 c 0,-18.691 -15.114,-33.789 -33.77,-33.789 -18.648,0 -33.773,15.098 -33.773,33.789 0,18.613 15.125,33.754 33.773,33.754 18.656,0 33.77,-15.141 33.77,-33.754"
          />
          <path
            className="c0"
            d="m 1262.16,431.988 c 0,-18.636 -15.13,-33.777 -33.78,-33.777 -18.65,0 -33.77,15.141 -33.77,33.777 0,18.664 15.12,33.762 33.77,33.762 18.65,0 33.78,-15.098 33.78,-33.762"
          />
          <path
            className="c0"
            d="m 1560.81,133.32 c 0,-18.66 -15.13,-33.7614 -33.78,-33.7614 -18.66,0 -33.77,15.1014 -33.77,33.7614 0,18.66 15.11,33.801 33.77,33.801 18.65,0 33.78,-15.141 33.78,-33.801"
          />
          <path
            className="c0"
            d="m 1063.06,232.891 c 0,-18.653 -15.13,-33.782 -33.79,-33.782 -18.64,0 -33.758,15.129 -33.758,33.782 0,18.66 15.118,33.769 33.758,33.769 18.66,0 33.79,-15.109 33.79,-33.769"
          />
          <path
            className="c0"
            d="m 664.852,232.891 c 0,-18.653 -15.129,-33.782 -33.789,-33.782 -18.637,0 -33.762,15.129 -33.762,33.782 0,18.66 15.125,33.769 33.762,33.769 18.66,0 33.789,-15.109 33.789,-33.769"
          />
          <path
            className="c0"
            d="m 963.496,830.195 c 0,-18.648 -15.121,-33.769 -33.777,-33.769 -18.637,0 -33.762,15.121 -33.762,33.769 0,18.668 15.125,33.77 33.762,33.77 18.656,0 33.777,-15.102 33.777,-33.77"
          />
          <path
            className="c0"
            d="m 266.645,730.668 c 0,-18.691 -15.11,-33.789 -33.77,-33.789 -18.645,0 -33.77,15.098 -33.77,33.789 0,18.613 15.125,33.754 33.77,33.754 18.66,0 33.77,-15.141 33.77,-33.754"
          />
          <path
            className="c0"
            d="m 366.191,1328.01 c 0,-18.68 -15.117,-33.8 -33.777,-33.8 -18.641,0 -33.762,15.12 -33.762,33.8 0,18.62 15.121,33.76 33.762,33.76 18.66,0 33.777,-15.14 33.777,-33.76"
          />
          <path
            className="c0"
            d="m 465.734,631.094 c 0,-18.66 -15.117,-33.778 -33.769,-33.778 -18.645,0 -33.754,15.118 -33.754,33.778 0,18.66 15.109,33.781 33.754,33.781 18.652,0 33.769,-15.121 33.769,-33.781"
          />
          <path
            className="c0"
            d="m 1162.6,631.094 c 0,-18.66 -15.12,-33.778 -33.78,-33.778 -18.63,0 -33.76,15.118 -33.76,33.778 0,18.66 15.13,33.781 33.76,33.781 18.66,0 33.78,-15.121 33.78,-33.781"
          />
          <path
            className="c1"
            d="M 1778.6,812.211 V 647.633 h 87.25 c 36.86,0 64.08,7.055 81.64,21.164 17.57,14.105 26.35,35.707 26.35,64.797 0,52.41 -37.43,78.617 -112.31,78.617 z m 0,106.262 h 77.75 c 36.29,0 62.56,5.613 78.83,16.843 16.27,11.231 24.41,29.809 24.41,55.723 0,24.191 -8.86,41.531 -26.57,52.051 -17.71,10.51 -45.72,15.77 -84.01,15.77 h -70.41 z m -133.91,250.097 h 196.54 c 89.56,0 154.57,-12.74 195.03,-38.22 40.46,-25.49 60.69,-66.03 60.69,-121.6 0,-37.73 -8.85,-68.68 -26.56,-92.871 -17.71,-24.191 -41.26,-38.731 -70.63,-43.629 v -4.316 c 40.02,-8.93 68.9,-25.637 86.61,-50.11 17.71,-24.476 26.56,-57.019 26.56,-97.625 0,-57.597 -20.8,-102.519 -62.41,-134.769 -41.62,-32.254 -98.13,-48.379 -169.55,-48.379 h -236.28 v 631.519"
          />
          <path
            className="c1"
            d="m 2454.24,1066.2 c -50.4,0 -89.42,-18.94 -117.07,-56.8 -27.64,-37.869 -41.46,-90.646 -41.46,-158.314 0,-140.82 52.84,-211.231 158.53,-211.231 44.34,0 98.05,11.083 161.12,33.262 V 560.809 c -51.84,-21.598 -109.72,-32.399 -173.65,-32.399 -91.86,0 -162.13,27.863 -210.8,83.586 -48.66,55.723 -73,135.703 -73,239.953 0,65.656 11.95,123.176 35.85,172.571 23.91,49.38 58.25,87.25 103.03,113.61 44.77,26.34 97.25,39.52 157.45,39.52 61.33,0 122.96,-14.84 184.87,-44.49 l -43.19,-108.86 c -23.62,11.23 -47.37,21.02 -71.27,29.38 -23.91,8.35 -47.38,12.52 -70.41,12.52"
          />
          <path
            className="c0"
            d="m 2900.05,528.41 c -68.25,0 -121.38,20.949 -159.39,62.852 -38.01,41.898 -57.02,102.008 -57.02,180.343 0,79.481 19.23,140.747 57.66,183.797 38.46,43.047 93.24,64.578 164.37,64.578 23.04,0 45.85,-2.37 68.47,-7.12 22.59,-4.76 41.25,-10.88 55.93,-18.364 l -23.76,-64.793 c -40.02,14.969 -74.15,22.461 -102.37,22.461 -47.8,0 -83.08,-15.051 -105.83,-45.141 -22.75,-30.093 -34.13,-74.945 -34.13,-134.554 0,-57.309 11.38,-101.153 34.13,-131.531 22.75,-30.387 56.44,-45.575 101.08,-45.575 41.75,0 82.79,9.215 123.11,27.649 v -69.114 c -32.83,-16.992 -73.58,-25.488 -122.25,-25.488"
          />
          <path
            className="c0"
            d="m 3249.53,591.047 c 43.48,0 77.67,11.726 102.58,35.203 24.91,23.469 37.37,56.805 37.37,100 v 42.762 l -69.98,-3.024 c -54.42,-2.015 -94.1,-10.652 -119,-25.918 -24.92,-15.265 -37.37,-39.308 -37.37,-72.136 0,-24.77 7.56,-43.778 22.69,-57.016 15.11,-13.25 36.35,-19.871 63.71,-19.871 z m 160.25,-53.996 -15.11,67.387 h -3.46 c -23.61,-29.665 -47.16,-49.75 -70.62,-60.258 -23.48,-10.512 -53.06,-15.77 -88.77,-15.77 -46.66,0 -83.23,12.238 -109.72,36.719 -26.5,24.473 -39.74,59.027 -39.74,103.668 0,96.18 75.88,146.582 227.64,151.187 l 80.35,3.024 v 28.078 c 0,35.996 -7.78,62.562 -23.33,79.695 -15.55,17.129 -40.46,25.703 -74.73,25.703 -25.05,0 -48.74,-3.746 -71.05,-11.23 -22.33,-7.492 -43.27,-15.84 -62.86,-25.055 l -23.75,58.313 c 23.9,12.672 49.96,22.608 78.18,29.808 28.22,7.19 56.15,10.8 83.8,10.8 57.31,0 99.93,-12.68 127.86,-38.015 27.93,-25.343 41.9,-65.66 41.9,-120.949 V 537.051 h -56.59"
          />
          <path
            className="c0"
            d="m 4172.45,537.051 v 305.394 c 0,74.875 -32.11,112.313 -96.33,112.313 -44.05,0 -76.45,-12.817 -97.19,-38.445 -20.73,-25.637 -31.1,-64.797 -31.1,-117.497 V 537.051 h -77.32 v 305.394 c 0,37.434 -7.85,65.508 -23.53,84.235 -15.71,18.715 -40.25,28.078 -73.66,28.078 -43.77,0 -75.8,-13.395 -96.11,-40.176 -20.3,-26.781 -30.45,-70.695 -30.45,-131.746 V 537.051 H 3569 v 474.289 h 62.64 l 11.66,-64.793 h 4.32 c 13.54,23.039 32.62,41.039 57.23,53.993 24.63,12.96 52.2,19.44 82.73,19.44 74.29,0 122.67,-26.496 145.13,-79.48 h 4.32 c 15.27,25.34 36.08,44.926 62.42,58.746 26.36,13.824 56.23,20.734 89.63,20.734 53.57,0 93.66,-13.82 120.3,-41.468 26.64,-27.645 39.96,-71.852 39.96,-132.61 V 537.051 h -76.89"
          />
          <path
            className="c0"
            d="m 4554.78,954.758 c -46.94,0 -80.85,-13.25 -101.73,-39.742 -20.88,-26.5 -31.6,-68.106 -32.17,-124.836 v -15.121 c 0,-64.215 10.65,-110.653 31.96,-139.305 21.31,-28.66 55.87,-42.981 103.67,-42.981 39.74,0 70.77,16.125 93.09,48.379 22.31,32.25 33.48,77.172 33.48,134.774 0,57.883 -11.17,102.156 -33.48,132.828 -22.32,30.668 -53.92,46.004 -94.82,46.004 z m 12.96,-426.348 c -63.64,0 -112.59,22.895 -146.86,68.684 h -5.19 l 1.73,-17.711 c 2.31,-22.461 3.46,-42.477 3.46,-60.043 V 324.531 h -77.76 v 686.809 h 63.93 l 10.37,-64.793 h 3.46 c 18.43,25.918 39.74,44.637 63.93,56.153 24.19,11.52 52.12,17.28 83.8,17.28 61.62,0 109.5,-21.382 143.62,-64.144 34.13,-42.766 51.19,-103.023 51.19,-180.777 0,-77.469 -17.13,-137.942 -51.4,-181.422 -34.27,-43.485 -82.36,-65.227 -144.28,-65.227"
          />
          <path
            className="c0"
            d="M 4916.59,1011.34 V 705.945 c 0,-38.3 8.57,-66.734 25.71,-85.308 17.13,-18.578 43.7,-27.864 79.69,-27.864 48.67,0 84.09,13.536 106.26,40.606 22.18,27.062 33.27,70.691 33.27,130.883 v 247.078 h 78.18 V 537.051 h -63.93 l -11.23,62.633 h -3.89 c -14.11,-22.75 -34.12,-40.321 -60.04,-52.7 -25.92,-12.379 -56.01,-18.574 -90.28,-18.574 -57.02,0 -99.99,13.676 -128.95,41.035 -28.93,27.36 -43.4,71.125 -43.4,131.317 v 310.578 h 78.61"
          />
          <path
            className="c0"
            d="m 5663.49,667.934 c 0,-44.348 -16.56,-78.688 -49.67,-103.024 -33.12,-24.336 -79.63,-36.5 -139.53,-36.5 -62.49,0 -112.16,9.938 -149.02,29.805 v 70.844 c 52.12,-25.344 102.37,-38.012 150.75,-38.012 39.16,0 67.67,6.328 85.53,19.004 17.85,12.672 26.78,29.656 26.78,50.972 0,18.719 -8.57,34.555 -25.7,47.516 -17.14,12.957 -47.59,27.789 -91.36,44.492 -44.64,17.278 -76.03,32.032 -94.17,44.274 -18.14,12.242 -31.46,25.988 -39.95,41.254 -8.5,15.261 -12.75,33.836 -12.75,55.722 0,38.875 15.84,69.547 47.52,92.008 31.67,22.461 75.16,33.691 130.45,33.691 53.85,0 104.25,-10.66 151.19,-31.964 l -26.35,-61.77 c -48.1,20.152 -91.44,30.238 -130.02,30.238 -32.26,0 -56.73,-5.117 -73.44,-15.336 -16.7,-10.222 -25.05,-24.261 -25.05,-42.117 0,-17.277 7.2,-31.601 21.6,-42.976 14.4,-11.383 47.95,-27.149 100.64,-47.301 39.46,-14.688 68.61,-28.367 87.48,-41.035 18.85,-12.676 32.75,-26.934 41.68,-42.766 8.93,-15.84 13.39,-34.844 13.39,-57.019"
          />
        </g>
      </g>
    </BaseSVG>
  );
}