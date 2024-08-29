import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The GO0D App</title>
      </Head>
      <div style={{ textAlign: 'center' }}>
          <h1>What GO0D do I do today?</h1>
          <form>
              <input type="submit" id="good-button" name="Go GO0D"/>
          </form>
      </div>
    </div>

  );
}