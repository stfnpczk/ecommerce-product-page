import StyledComponentsRegistry from './lib/registry';
import GlobalStyles from './styling/Globals';

import { Kumbh_Sans } from 'next/font/google';

export const kumbhSans = Kumbh_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'E-Commerce Product Page',
  description:
    'This is a solution to the E-commerce product page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={kumbhSans.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
