import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>epix.io - All Service. One Place.</title>
        <meta name="title" content="epix.io - All Service. One Place."></meta>
        <meta
          name="description"
          content="epix.io is a free and open source project that provide many difference.
          Some of the services are emi calculation, hash generation, password generation etc.."
        ></meta>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
