import { IconProps } from './types';
import { iconsNames } from './icons-names';
import invariant from 'tiny-invariant';

export default function Icon({ name, className, color, width = '24px', height = '24px' }: IconProps) {
  const src = iconsNames[name];
  invariant(src, `Icon ${name} not found`);
  
  return (
    <div className="min-w-10 min-h-10 p-1 rounded-lg">
      <img
        src={iconsNames[name]} 
        alt={`${name} icon`}
        // style={{ filter: `brightness(0) saturate(100%) ${color ? `fill(${color})` : ''}` }}
      />
    </div>
  )
}
