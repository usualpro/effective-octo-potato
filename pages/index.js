import Head from 'next/head';
import { ProfileList } from '../components/ProfileList';
import { Modal } from '../components/Modal';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meetic test-entretien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />
      <div className='container d-grid gap-4'>
        <ProfileList data='online' />
        <ProfileList data='featured' />
      </div>
    </div>
  )
}
