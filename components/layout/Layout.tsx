import Head from 'next/head';
import styles from '@/styles/components/layout/Layout.module.scss';
import SideBar from '@/components/layout/SideBar';

/**
 *
 * 所有畫面的共同布局
 * @returns 共用布局
 *
 * @since 1.0.0
 */

export default function  Layout({ children, name }: { children: React.ReactNode, name: string }) {
  return (
    <>
      <Head>
        <title>test</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="NTUB IMD BIRC CMS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.layout}>
        <SideBar name={name} />
        <div className={styles.contentWrapper}>
          <article className={styles.chill}>
            {children}
          </article>

          <footer className={styles.footer}>
            <p></p>
          </footer>
        </div>
      </main>

      
    </>
  );
}