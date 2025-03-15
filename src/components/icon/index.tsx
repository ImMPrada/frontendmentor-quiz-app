import { IconProps } from './types';
import { iconsNames } from './icons-names';
import invariant from 'tiny-invariant';

export default function Icon({ name, className, color, width = '24', height = '24' }: IconProps) {
  const src = iconsNames[name];
  invariant(src, `Icon ${name} not found`);
  
  return (
    <img 
      src={iconsNames[name]} 
      className={className}
      width={width}
      height={height}
      alt={`${name} icon`}
      style={{ filter: `brightness(0) saturate(100%) ${color ? `fill(${color})` : ''}` }}
    />
  )
}
