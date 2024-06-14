import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

// declare module 'tailwindcss' {
//   export interface Config {
//     darkMode?: boolean | 'media' | 'class' | ['class', string];
//     content: string[];
//     prefix?: string;
//     theme: {
//       extend?: Record<string, any>;
//       [key: string]: any;
//     };
//     plugins?: any[];
//   }

//   const config: Config;
//   export = config;
// }

// declare module 'tailwindcss/defaultTheme' {
//   const defaultTheme: any;
//   export = defaultTheme;
// }
