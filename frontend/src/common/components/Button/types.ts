export interface ButtonProps {
  children: React.ReactNode;
  $color?: 'primary' | 'yellow' | 'borderless' | 'white' | 'transparent';
  $hidden?: boolean;
  onClick?: () => void;
}
