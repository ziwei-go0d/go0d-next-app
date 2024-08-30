import Head from 'next/head';
import ActionItem from './actionitem';

export default function Home() {


  return (
    <div id="main">
      <Head>
        <title>The GO0D App</title>
      </Head>
      <h1>What GO0D shall I do today?</h1>
      <ActionItem />
    </div>
  );
}