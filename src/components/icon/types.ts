export interface IconProps {
  name: IconName;
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}

export type IconName = 'accessibility' |
                        'correct' |
                        'incorrect' | 
                        'moon-light' | 
                        'moon-dark' | 
                        'sun-light' | 
                        'sun-dark' | 
                        'arrow-right' | 
                        'arrow-left' | 
                        'arrow-up' | 
                        'arrow-down' | 
                        'arrow-right-small' | 
                        'arrow-left-small' | 
                        'arrow-up-small' | 
                        'arrow-down-small' | 
                        'star' | 
                        'heart' | 
                        'check' | 
                        'cross' | 
                        'info' | 
                        'warning';
