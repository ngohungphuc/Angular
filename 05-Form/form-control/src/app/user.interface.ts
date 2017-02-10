export interface User {
  name: string;
  age?: number;
  gender?: string;
  role?: string;
  theme?: ITheme;
  isActive?: boolean;
  topics?: string[];
  toggle?: string;
}
