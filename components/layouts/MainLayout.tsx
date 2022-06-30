import { FC, ReactNode } from 'react';
import Head from 'next/head'
import {Navbar} from '../Navbar'
import styles from './MainLayout.module.css'


interface Props{
    children: ReactNode,
  }
  
export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Home - Oscar Quevedo</title>
                    <meta name="description" content="Home page" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Navbar />

                <main className={styles.main}>
                    { children }
                </main>
            </div>
        </>
    )
}
