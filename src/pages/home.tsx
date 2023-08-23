import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Home</h1>
      <Link href="/page1">
        <>Go to Page 1</>
      </Link>
      {/* <Link href="/page2">
        <a>Go to Page 2</a>
      </Link>
      <Link href="/page3">
        <a>Go to Page 3</a>
      </Link> */}
      </main>
    </div>
  );
};

export default Home;
