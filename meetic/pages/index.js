import Head from 'next/head';
import { ProfileList } from '../components/ProfileList';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Meetic test-entretien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProfileList data='online' />
        <i className="bi-alarm"></i><i className="bi-alarm"></i>
        <ProfileList data='featured' />
      </main>
    </div>
  )
}
