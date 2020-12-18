import 'antd/dist/antd.css';
import 'keen-slider/keen-slider.min.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
