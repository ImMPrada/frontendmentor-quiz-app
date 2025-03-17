import { IconProps } from './types';
import { iconsNames } from './icons-names';
import invariant from 'tiny-invariant';

export default function Icon({ name }: IconProps) {
  // Verificar si existe el icono y lanzar un error si no
  const iconExists = name in iconsNames;
  invariant(iconExists, `Icon ${name} not found`);
  
  return (
    <div className="min-w-10 min-h-10 p-1 rounded-lg">
      <img
        src={iconExists ? iconsNames[name as keyof typeof iconsNames] : ''} 
        alt={`${name} icon`}
      />
    </div>
  )
}
