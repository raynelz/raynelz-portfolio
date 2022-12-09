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
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-montserrat dark:text-white">
                Developed By Raynelz
              </h1>
              <ul className="flex items.centre">
                <li>
                  <a
                    className="bg-gradient-to-r from-purple600 to-pink600 text-white px-4 py-2 rounded-md ml-8 dark:text-white"
                    href="https://zaharichswiftly-github-io.vercel.app/"
                  >
                    Go back
                  </a>
                </li>
              </ul>
            </nav>
          </section>
      </main>
    </div>
  );
}
