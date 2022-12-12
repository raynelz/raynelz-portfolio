import Head from "next/head";
import Image  from 'next/legacy/image';
import ava from '../public/ava.jpg';
import illust from '../public/illust.png'
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
              <h1 className="text-xl Montserrat dark:text-white">
                Developed By Raynelz
              </h1>
              <ul className="flex items.centre">
                <li>
                  <a
                    className="bg-gradient-to-r from-purple600 to-pink600 text-white px-4 py-2 rounded-md ml-6 dark:text-white"
                    href="./"
                  >
                    Back
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex justify-center text-center py-10">
            <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink600 text-6xl Inter">
              About me:
            </h1>
          </div>
          <div className="relative mx-auto rounded-full w-60 h-60 mtt-20 overflow-hidden md:h-30 md:w-30">
            <Image src={ava} alt="avatar 2" layout="fill" objectFit="cover"/>
          </div>
          <div className="flex justify-center text-center py-10">
            <h2 className="font-bold font-montserrat text-3xl text-black dark:text-white">
              Hello!
            </h2>
          </div>
          <div className="flex justify-center text-center">
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg mx-auto">
              I&apos;m a Web-developer with 1 year of experience. My aim is to
              bring your ideas to life with code.
            </p>
          </div>
          <div className="relative mx-auto rounded-full w-60 h-60 mtt-20 overflow-hidden md:h-30 md:w-30">
            <Image src={illust} alt="illust"/>
          </div>
          </section>
      </main>
    </div>
  );
}
