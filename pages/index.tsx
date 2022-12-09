import Head from "next/head";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegram, FaReact } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import Image from "next/legacy/image";
import avatar from "../public/avatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import web1 from "../public/web 1.png";
import web2 from "../public/web 2.png";
import { CSSProperties } from '../node_modules/@types/react/index.d';

export default function Home() {
  // function which will be called when user clicks on github icon
  const githubClick = () => {
    window.open("https://github.com/zaharichswiftly");
  };

  const tgClick = () => {
    window.open("https://t.me/devraynelz");
  };
  const vkClick = () => {
    window.open("https://vk.com/raynelz");
  };
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
                  href="./resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r py-2 font-inter  from-purple600 to-pink font-lg md:text-8xl font-md">
              Zakhar
            </h2>
            <h2 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r py-1 font-inter  from-purple600 to-pink font-lg md:text-8xl font-md">
              Litvinchuk
            </h2>
            <div className="flex flex-wrap justify-center py-3 space-x-2">
              <FaReact
                className="text-5xl fill-blue-600"
                title="React Developer"
              />
              <h3 className="relative left-0 top-0 text-2xl py-2 dark:text-purple md:text-3xl">
                React Developer
              </h3>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg mx-auto">
              I&apos;m a Web-developer with 1 year of experience. My aim is to
              bring your ideas to life with code.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600">
            <FaTelegram onClick={tgClick} />
            <AiFillGithub onClick={githubClick} />
            <SlSocialVkontakte onClick={vkClick} />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-purple600 dark: from-purple rounded-full w-80 h-80 mtt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={avatar} alt="avatar" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className=" text-center text-3xl py-5 text-purple600 dark:text-pink">
              My skills and experience
            </h3>
            <p className="text-center text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beggining of my journey as a frontend developer, I have
              participated in
              <span className=" text-pink600 dark:text-cyan"> hackatons </span>
              and made
              <span className=" text-pink600 dark:text-cyan"> projects </span>
              of my own, just for fun.
            </p>
          </div>
          <div className="lg: flex gap-5 justify-center">
            <div className="bg-white dark:bg-comment grid w-center place-items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  text-purple600 dark: text-purple">
                Beatiful Websites
              </h3>
              <p className="py-2 text-black dark:text-white">
                I design elegant and minimalistic websites to fit your needs.
              </p>
              <h4 className="py-4 text-pink600 dark:text-pink">
                Design tools I use
              </h4>
              <p className="text-black dark:text-cyan" py-1>
                Figma
              </p>
              <p className=" text-black dark:text-cyan" py-1>
                Pixelmator Pro
              </p>
              <p className=" text-black dark:text-cyan" py-1>
                Retouch
              </p>
            </div>
            <div className="bg-white dark:bg-comment grid w-center place-items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={code}
                alt="code"
                style={{ width: 100, height: 100 }}
                className="content-center"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-purple600 dark: text-purple">
                Code your dream projects
              </h3>
              <p className="py-2 text-black dark:text-white">
                Code elegant and minimalistic websites for your needs.
              </p>
              <h4 className="py-4 text-pink600 dark:text-pink">
                Code tools I use
              </h4>
              <p className=" text-black dark:text-cyan py-1">React</p>
              <p className=" text-black dark:text-cyan py-1">NextJS</p>
              <p className=" text-black dark:text-cyan py-1">Tailwind</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-center text-3xl py-1 text-purple600 dark:text-pink">
              Portfolio
            </h3>
            <p className="text-center text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beggining of my journey as a frontend developer, I have
              participated in
              <span className=" text-pink600 dark:text-cyan"> hackatons </span>
              and made
              <span className=" text-pink600 dark:text-cyan"> projects </span>
              of my own, just for fun.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/2 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover shadow-lg"
                style={{ width: "100%", height: "100%" }}
                layout="responsive"
              />
            </div>
            <div className="basis-1/2 flex-1 border-2 border-purple600 rounded-lg dark:border-0">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover shadow-lg"
                style={{ width: "100%", height: "100%" }}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
