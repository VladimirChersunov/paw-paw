import { Inter, Lusitana, Pacifico, Montserrat  } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ["400", "700"]
});

export const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
  });
  
  export const pacifico = Pacifico({
    weight: ["400"],
    subsets: ["latin"],
  });