import StyledComponentsRegistry from './lib/registry';
import GlobalStyles from './styling/Globals';

import { Kumbh_Sans } from 'next/font/google';

export const kumbhSans = Kumbh_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={kumbhSans.className}>
        <head>
          <title>E-commerce product page</title>
        </head>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
