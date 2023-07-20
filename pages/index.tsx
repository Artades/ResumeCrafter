import React, { useEffect, useState } from 'react';
import MetaHead from "@/meta/MetaHead";
import Link from 'next/link';

const Home = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const animateText = () => {
            setTimeout(() => {
                setActive(true);
            }, 300);
        };
        animateText();
    }, []);

    return (
        <>
            <MetaHead title={"ResumeCrafter"}/>

            <div className="px-3 relative w-screen h-screen flex justify-center items-center">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80" aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-400 to-sky-700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className={`${
                        active ? 'translate-y-0 opacity-100' : 'translate-y-[-100px] opacity-0'} transition duration-500 hidden sm:mb-8 sm:flex sm:justify-center`}>
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-400/10 hover:ring-gray-400/20">
                            Анонсируем последние новшества и многое другое.{' '}
                            <a href="#" className="font-semibold text-sky-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Подробнее <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div className="text-center flex flex-col items-center justify-center">
                        <h1
                            className={`${
                                active ? 'translate-y-0 opacity-100' : 'translate-y-[-150px] opacity-0'
                            } transition duration-500 text-4xl tracking-tight text-gray-200 sm:text-6xl`}
                        >
                            Уникальные резюме на пути к вашей <span className="text-sky-500">мечте</span>!
                        </h1>
                        <p
                            className={`${
                                active ? 'translate-y-0 opacity-100' : 'translate-y-[-250px] opacity-0'
                            } transition duration-500 mt-6 text-lg leading-8 text-gray-500`}
                        >
                            Создавайте профессиональные и индивидуальные резюме с легкостью с помощью <Link className={"border-b border-b-slate-500"} href={'/about'}>нашего</Link> Telegram-бота.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="https://t.me/ResumeCrafterBot"
                                target={"_blank"}
                                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Начать
                            </Link>
                            <Link href="/docs" className="group text-sm font-semibold leading-6 text-gray-200">
                                Документация <span aria-hidden="true" className="group-hover:animate-pulse">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
