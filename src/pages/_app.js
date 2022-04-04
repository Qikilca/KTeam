// import App from 'next/app'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

// もし、アプリケーション内のすべてのページでブロックするデータを必要とする場合のみ、このメソッドのコメントを外してください。
// Automatic Static Optimizationを無効にし、アプリケーション内の各ページはサーバーサイドでレンダリングされます。
//
MyApp.getServerSideProps = async (appContext) => {
  // ページの`getInitialProps`を呼び、`appProps.pageProps`を満たします。
  const appProps = await App.getServerSideProps(appContext);
  return { ...appProps }
}

export default MyApp;