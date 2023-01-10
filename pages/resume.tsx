import Head from "next/head";
import Image from 'next/legacy/image';
import ava from '../public/ava.jpg';
import phone from '../public/phone.png';
import backpack from '../public/backpack.png';
import person from '../public/person.png';
import laptop from '../public/laptop.png';

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
            <a href="./" className="text-xl Montserrat dark:text-white">
              Developed By Raynelz
            </a>
            <ul className="flex items.centre">
              <li>
                <a
                  className="bg-gradient-to-r from-purp to-pink600 text-white px-4 py-2 rounded-md ml-8 hover:bg-gradient-to-b from-pink600 to-purp duration-1000  dark:text-white"
                  href="./"
                >
                  Назад
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center text-center py-10">
            <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink600 text-6xl Inter">
              Обо мне:
            </h1>
          </div>
          <div className="relative mx-auto rounded-full w-60 h-60 mtt-20 overflow-hidden md:h-30 md:w-30">
            <Image src={ava} alt="avatar 2" layout="fill" objectFit="cover" />
          </div>
          <section>
            <div>
              <h3 className=" text-center Inter text-4xl py-5 text-purp dark:text-pink">
                Здравствуйте!
              </h3>
              <p className="text-center text-md py-2 leading-8 text-gray-800 dark:text-white">
                Я, Литвинчук Захар, начинающий web-разработчик. На данный момент обучаюсь на первом курсе университета
                <span className=" text-pink600 dark:text-cyan"> НИТУ МИСИС. </span>
                Вот более детальная иформация обо
                <span className=" text-pink600 dark:text-cyan"> мне: </span>
              </p>
            </div>
            <div className="lg: flex gap-5 justify-center">
              <div className="bg-white dark:bg-comment grid w-center place-items-center text-center shadow-lg p-20 rounded-xl my-10">
                <Image src={phone} alt="phone" width={70} height={120} />
                <h3 className="text-lg Inter  font-medium pt-8 pb-2  text-purp dark:text-purple">
                  Контакты:
                </h3>
                <p className="py-2 text-pink600 dark:text-white">
                  Выберите подходящий способ связи со мной:
                </p>
                <a href="mailto:litvinchuk2016@mail.ru" className="text-black hover:text-purp duration-300 dark:text-cyan py-2">
                  Email
                </a>
                <a href="tel:+79266526991" className=" text-black hover:text-purp duration-300 dark:text-cyan py-2 dark:hover:text-purple">
                  Телефон
                </a>
                <a href="https://t.me/raynelz" className="py-2 text-black hover:text-purp duration-300 dark:text-cyan dark:hover:text-purple">
                  Telegram
                </a>
              </div>
              <div className="bg-white dark:bg-comment grid w-center place-items-center text-center shadow-lg p-10 rounded-xl my-10">
                <Image
                  src={backpack}
                  alt="backpack"
                  width={140}
                  height={150}
                  className="content-center"
                />
                <h3 className="text-lg Inter font-medium -pt-10 pb-2 text-purp dark:text-purple">
                  Образование:
                </h3>
                <p className="py-2 text-black dark:text-white">
                  <span className="text-pink600 dark:text-cyan">ВУЗ: </span>НИТУ МИСиС
                </p>
                <p className="py-2 text-black dark:text-white"><span className=" text-pink600 dark:text-cyan">Факультет:</span> (ИВТ) Информатика и вычислительная техника</p>
              </div>
            </div>
          </section>
          <section className="">
            <div className="lg: flex gap-5 justify-center">
              <div className="bg-white dark:bg-comment grid w-center place-items-center text-center shadow-lg p-20 rounded-xl my-10">
                <Image src={person} alt="person" width={80} height={100} />
                <h3 className="text-lg Inter  font-medium pt-8 pb-2  text-purp dark:text-purple">
                  Ключевые навыки:
                </h3>
                <p className="text-black dark:text-cyan py-1">
                  Английский язык (B1-B2)
                </p>
                <a href="https://ru.wikipedia.org/wiki/Git" className="py-2 text-black hover:text-purp duration-300 dark:text-cyan dark:hover:text-purple" >
                  Git
                </a>
                <a href="https://nextjs.org/" className="py-2 text-black hover:text-purp duration-300 dark:text-cyan dark:hover:text-purple">
                  Nextjs
                </a>
                <a href="https://flutter.dev/" className="py-2 text-black hover:text-purp duration-300 dark:text-cyan dark:hover:text-purple">
                  Flutter
                </a>
              </div>
              <div className="bg-white dark:bg-comment grid w-center place-items-center text-center shadow-lg p-20 rounded-xl my-10">
                <Image
                  src={laptop}
                  alt="laptop"
                  width={115}
                  height={80}
                  className="content-center"
                />
                <h3 className="text-lg Inter font-medium pt-8 pb-2 text-purp dark:text-purple">
                  Прочее:
                </h3>
                <p className="py-2 text-black dark:text-white">
                  <span className="text-black dark:text-cyan">Хобби:</span> фото-видеосъёмка
                </p>
                <h4 className="py-4 text-pink600 dark:text-pink">
                  Готов к любой форме удалённой работы
                </h4>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div >
  );
}
