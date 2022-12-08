import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/legacy/image";
import avatar from "../public/avatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import web1 from "../public/web 1.png";
import web2 from "../public/web 2.png";

export default function Home() {
  // function which will be called when user clicks on github icon
  const githubClick = () => {
    window.open("https://github.com/zaharichswiftly");
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
                  className="bg-gradient-to-r from-purple to-pink text-black px-4 py-2 rounded-md ml-8 dark:text-white"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-purple font-medium md:text-6xl">
              Zakhar Litvinchuk
            </h2>
            <h3 className="text-2xl py-2 dark:text-pink md:text-3xl">
              React Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg mx-auto">
              I m a Web-developer with 1 year of experience. Who intresting to
              help you improve your dreams and ideas on code.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillGithub onClick={githubClick} />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-purple rounded-full w-80 h-80 mtt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={avatar} alt="avatar" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 text-purple dark:text-pink">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beggining of my journey as a frontend developer, I have
              done projects for
              <span className=" text-pink dark:text-cyan"> hackaton </span>
              or for myself{" "}
              <span className=" text-pink dark:text-cyan">projects </span>
              that I have done just for fun.
            </p>
          </div>
          <div className="lg: flex gap-5 justify-center">
            <div className="bg-white dark:bg-comment grid w-center place-items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  text-purple">
                Beatiful Websites
              </h3>
              <p className="py-2 text-black dark:text-white">
                Design elegant and minimalistic websites for your needs.
              </p>
              <h4 className="py-4 text-pink">Design tools I use</h4>
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
                width={100}
                height={100}
                className="content-center"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-purple">
                Code your dream projects
              </h3>
              <p className="py-2 text-black dark:text-white">
                Code elegant and minimalistic websites for your needs.
              </p>
              <h4 className="py-4 text-pink">Code tools I use</h4>
              <p className=" text-black dark:text-cyan py-1">React</p>
              <p className=" text-black dark:text-cyan py-1">NextJS</p>
              <p className=" text-black dark:text-cyan py-1">Tailwind</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-purple dark:text-pink">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beggining of my journey as a frontend devloper, I have
              done projects for
              <span className=" text-pink dark:text-cyan"> hackaton </span>
              or for myself{" "}
              <span className=" text-pink dark:text-cyan">projects </span>
              that I have done just for fun.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/2 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover shadow-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/2 flex-1">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover shadow-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
