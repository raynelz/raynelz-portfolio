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

export default function Home() {
  // function which will be called when user clicks on github icon
  const githubClick = () => {
    window.open("https://github.com/zaharichswiftly");
  };

  const tgClick = () => {
    window.open("https://t.me/raynelz");
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
            <a href="./" className="text-xl Montserrat dark:text-white">
              Developed By Raynelz
            </a>
            <ul className="flex items.centre">
              <li>
                <a
                  className="bg-gradient-to-r from-purp to-pink600 text-white px-4 py-2 rounded-md ml-8 hover:bg-gradient-to-b from-pink600 to-purp duration-1000  dark:text-white"
                  href="./resume"
                >
                  Резюме
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r py-1 Inter  from-purp to-pink font-lg md:text-8xl font-md">
              Захар
            </h2>
            <h2 className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r py-1 Inter  from-purp to-pink font-lg md:text-8xl font-md">
              Литвинчук
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
              Я web-разработчик с опытом практики в 1 год. Моя цель, претворить
              ваши идеи в жизнь посредством кода.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600">
            <FaTelegram
              onClick={tgClick}
              className="text-blacky hover:text-black duration-300 dark:hover:text-white"
            />
            <SlSocialVkontakte
              onClick={vkClick}
              className="text-blacky hover:text-black duration-300 dark:hover:text-white"
            />
            <AiFillGithub
              onClick={githubClick}
              className="text-blacky hover:text-black duration-300 dark:hover:text-white"
            />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-purple600 dark: from-purple rounded-full w-80 h-80 mtt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={avatar} alt="avatar" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className=" text-center Inter text-4xl py-5 text-purp dark:text-pink">
              Навыки и опыт
            </h3>
            <p className="text-center text-md py-2 leading-8 text-gray-800 dark:text-white">
              В начале своей деятельности, как web-разработчика, я имел опыт
              практики в таких мероприятиях как,
              <span className=" text-pink600 dark:text-cyan">
                {" "}
                Хакатоны (ЛЦТ-2022, XMas-hack 2022){" "}
              </span>
              и создавал многие
              <span className=" text-pink600 dark:text-cyan"> проекты </span>
              для себя!
            </p>
          </div>
          <div className="lg: flex gap-5 justify-center">
            <div className="bg-white dark:bg-comment grid w-center place-items-center text-center shadow-lg p-5 rounded-xl my-10">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg Inter  font-medium pt-8 pb-2  text-purp dark: text-purple">
                Минималистичный дизайн
              </h3>
              <p className="py-2 text-black dark:text-white">
                Дизайн минималистичного сайта для ваших нужд
              </p>
              <h4 className="py-4 text-pink600 dark:text-pink">
                Инструменты, которые я использую:
              </h4>
              <a
                href="https://www.figma.com/"
                className="text-black hover:text-purp duration-300 dark:text-cyan dark:hover:text-purple"
              >
                Figma
              </a>
              <a
                href="https://www.pixelmator.com/pro/"
                className=" text-black hover:text-purp duration-300 dark:text-cyan dark:hover:text-purple"
              >
                Pixelmator Pro
              </a>
              <a
                href="https://apps.apple.com/ua/app/touchretouch/id373311252?l=ru"
                className=" text-black hover:text-purp duration-300 dark:text-cyan dark:hover:text-purple"
              >
                TouchRetouch
              </a>
            </div>
            <div className="bg-white dark:bg-comment grid w-center place-items-center text-center shadow-lg p-5 rounded-xl my-10">
              <Image
                src={code}
                alt="code"
                width={100}
                height={100}
                className="content-center"
              />
              <h3 className="text-lg Inter font-medium pt-8 pb-2 text-purp dark: text-purple">
                Рабочий код
              </h3>
              <p className="py-2 text-black dark:text-white">
                Напишу лэндинг-сайт для ваших нужд
              </p>
              <h4 className="py-4 text-pink600 dark:text-pink">
                Инструменты, которые я использую:
              </h4>
              <a
                href="https://ru.reactjs.org/"
                className=" text-black dark:text-cyan py-1 hover:text-purp duration-300 dark:hover:text-purple"
              >
                React
              </a>
              <a
                href="https://nextjs.org/"
                className=" text-black dark:text-cyan py-1 hover:text-purp duration-300 dark:hover:text-purple"
              >
                NextJS
              </a>
              <a
                href="https://tailwindcss.com/"
                className=" text-black dark:text-cyan py-1 hover:text-purp duration-300 dark:hover:text-purple"
              >
                Tailwind
              </a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-center Inter text-4xl py-1 text-purp dark:text-pink">
              Портфолио
            </h3>
            <p className="text-center text-xl py-2 leading-8 text-gray-800 dark:text-white">
              Здесь представлены проекты с хакатонов
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
                alt="web3"
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
