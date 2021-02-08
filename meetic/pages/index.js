import Head from 'next/head';
import { observer } from 'mobx-react';
import Profile from '../stores/Profile';

const ConnectedList = observer(
  () => <div>{
    Profile.online.map(
      (e, i) => <div>
        <img src={e.picture} className="img-fluid" />
      </div>
    )
  }</div>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meetic test-entretien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ConnectedList />
        <i className="bi-alarm"></i><i className="bi-alarm"></i>
      </main>
    </div>
  )
}
