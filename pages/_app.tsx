import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

function DevStarterApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default DevStarterApp
