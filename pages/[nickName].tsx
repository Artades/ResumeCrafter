import React, {useEffect, useState} from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { HomeIcon, Loader2,  MailIcon, PhoneIcon } from "lucide-react";
import { useRouter } from 'next/router';
import { UserPortfolioProps } from '@/interfaces/user-portfolio.interface';
import MobileUserCard from "@/components/MobileUserCard";
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer';
import PDFResume from '@/components/PDFResume';
import MetaHead from "@/meta/MetaHead";
import PDFViewer = ReactPDF.PDFViewer;


const Loader = () => (
    <div className="h-[100vh] w-full flex flex-col gap-2 items-center justify-center">
        <Loader2 className="text-gray-300 h-12 w-12 animate-spin" />
        <h1 className="text-2xl text-gray-200">Загружаем данные..</h1>
    </div>
);

const ErrorComponent = () => (
    <div className="h-[100vh] w-full flex items-center justify-center">
        <h1 className="text-2xl text-gray-200">Что-то пошло не так..</h1>
    </div>
);

const UserPage = () => {

    const router = useRouter();
    const { nickName } = router.query;

    // Define the query key based on the nickName
    const queryKey = ['userPortfolio', nickName];
    const [isClient, setIsClient] = useState(false)



    // Use React Query's useQuery hook to fetch the data
    const { data: userPortfolio, isLoading, error } = useQuery<UserPortfolioProps | null>(
        queryKey,
        async () => {
            const response = await axios.get(`https://resume-crafter-39b94-default-rtdb.europe-west1.firebasedatabase.app/${nickName}.json`);
            return response.data;
        },
        {
            enabled: !!nickName, // Only fetch data if nickName is available
        }
    );
    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isLoading) {
        return <div className={"h-[100vh] w-full flex flex-col gap-2 items-center justify-center"}>
            <Loader2 className="text-gray-300 h-12 w-12 animate-spin"/>
            <h1 className={"text-2xl text-gray-200"}>Загружаем данные..</h1>
        </div>;
    }

    if (error) {
        return <div className={"h-[100vh] w-full flex items-center justify-center"}>
            <h1 className={"text-2xl text-gray-200"}>Что-то пошло не так..</h1>
        </div>;
    }


    const mobileUserPortfolio = userPortfolio ?? null;



    return (
        <>

           <MetaHead title={"Резюме"}/>
            {
            isClient && (
                <div className="w-full h-full">

                    <div className="container">
                        <PDFDownloadLink document={<PDFResume userPortfolio={userPortfolio ?? null}/>} fileName={`${userPortfolio?.fio.split(' ')[1].toLowerCase()}.pdf`}>
                            {({loading}) => (loading ? <button className={"mb-5 px-2 py-3 rounded-xl bg-sky-300 text-gray-200 flex items-center justify-center "} disabled>Загрузка...</button> : <button className={"mb-5 px-2 py-3 rounded-xl bg-sky-500 text-gray-200 flex items-center justify-center "}>Скачать</button>)  }
                        </PDFDownloadLink>

                        {/*Desktop Version*/}
                        <div className={" hidden lg:grid  w-full  h-[89vh]   grid-cols-2 "}>
                            <div className={"h-full  flex flex-col items-start "}>
                                <div
                                    className={"w-full rounded-tl-xl rounded-bl-xl  h-[200px] bg-sky-500 flex flex-col px-3 items-start justify-center"}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={"/user-mal.png"}
                                         className={"w-[150px] h-[150px] rounded-full  border-4  border-sky-600 bg-white"}
                                         alt={""}/>
                                </div>
                                <h2 className={"text-3xl mt-5 font-semibold  text-gray-200 "}>{userPortfolio?.fio}</h2>
                                <div className={'w-full flex flex-col items-start my-16 '}>
                                    <h2 className={"text-gray-200 font-semibold text-xl mb-2"}>Цель</h2>
                                    <p className={"text-gray-400"}>
                                        {userPortfolio?.purpose}
                                    </p>
                                </div>
                                <ul className={"w-full flex flex-col items-start gap-5"}>
                                    <li className={"flex items-center justify-between gap-4"}>
                                        <PhoneIcon className={"h-6 w-6 text-sky-700"}/>
                                        <span className={"text-gray-400 "}>{userPortfolio?.phone}</span>
                                    </li>
                                    <li className={"flex items-center justify-between gap-4"}>
                                        <MailIcon className={"h-6 w-6 text-sky-700"}/>
                                        <span className={"text-gray-400 "}>{userPortfolio?.email}</span>
                                    </li>
                                    <li className={"flex items-center justify-between gap-4"}>
                                        <HomeIcon className={"h-6 w-6 text-sky-700"}/>
                                        <span className={"text-gray-400 "}>{userPortfolio?.city}</span>
                                    </li>
                                </ul>

                            </div>
                            <div
                                className={"h-full rounded-tr-xl rounded-br-xl   bg-sky-600 w-auto flex flex-col items-start px-5 gap-10 py-5"}>
                                <div className={'w-full flex flex-col items-start border border-sky-300 rounded-xl p-3'}>
                                    <h2 className={"text-gray-200 text-2xl font-semibold mb-2"}>
                                        Образование
                                    </h2>
                                    <p className={"text-gray-300  "}>{userPortfolio?.education}</p>
                                </div>

                                <div className={"w-full flex flex-col items-start border border-sky-300 rounded-xl p-3 "}>
                                    <h2 className={"text-2xl text-gray-200 font-semibold mb-2"}>Мои качества</h2>
                                    <ul className={"w-full flex flex-col items-start gap-1 "}>
                                        {userPortfolio?.qualities && Object.keys(userPortfolio.qualities).map((key) => (
                                            <li key={key} className={""}>

                                                <span className={"text-gray-300 "}>{userPortfolio.qualities[key]}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                                <div className={"w-full flex flex-col items-start border border-sky-300 rounded-xl p-3"}>
                                    <h2 className={"text-2xl text-gray-200 font-semibold mb-2"}>Мои навыки</h2>
                                    <ul className={"w-full flex flex-col items-start gap-1 "}>
                                        {userPortfolio?.skills && Object.keys(userPortfolio.skills).map((key) => (
                                            <li key={key} className={""}>

                                                <span className={"text-gray-300 "}>{userPortfolio.skills[key]}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                      `          <div className={'w-full flex flex-col items-start  border border-sky-300 rounded-xl p-3'}>
                                    <h2 className={"text-gray-200 font-semibold text-2xl mb-2"}>Опыт</h2>
                                    <p className={"text-gray-300"}>
                                        {userPortfolio?.experience}
                                    </p>
                                </div>
                            </div>
                        </div>`
                        {/*Mobile version*/}
                        <MobileUserCard userPortfolio={mobileUserPortfolio} />


                    </div>
                </div>
            )
        }</>

    );
};

export default UserPage;
