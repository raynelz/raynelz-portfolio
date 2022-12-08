//function of resume page
import React from "react";
import Head from "next/head";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Raynelz Portfolio</title>
        <meta name="description" content="Raynelz react developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
            <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-xl font-montserrat dark:text-dark">Developed By Raynelz</h1>
                
            </nav>
        </div>
      </main>
    </div>
  );
}
