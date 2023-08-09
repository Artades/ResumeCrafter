// MobileUserCard.tsx
import React from 'react';
import { UserPortfolioProps } from '@/interfaces/user-portfolio.interface';
import { BellIcon, HomeIcon, MailIcon, PhoneIcon } from 'lucide-react';

interface MobileUserCardProps {
    userPortfolio: UserPortfolioProps | null;
}

const MobileUserCard: React.FC<MobileUserCardProps> = ({ userPortfolio }) => {
    return (
        <div className="lg:hidden w-full h-[89vh] flex flex-col items-center justify-start">
            <div className="w-full rounded-tl-xl rounded-tr-xl h-[200px] bg-sky-500 flex flex-col items-start p-3 justify-center">
                <img
                    src="/user-mal.png"
                    className="w-[180px] h-[180px] rounded-full border-4 border-sky-600 bg-white"
                    alt=""
                />
            </div>
            <div className="w-full flex flex-col items-center gap-5 px-3 py-5">
                <h2 className="text-3xl font-semibold text-gray-200">{userPortfolio?.fio}</h2>
                <div className="w-full flex flex-col items-start my-8">
                    <h2 className="text-gray-200 font-semibold text-xl mb-2">Цель</h2>
                    <p className="text-gray-400">{userPortfolio?.purpose}</p>
                </div>
            </div>
            <div className="w-full ">
                <div className="w-full flex flex-col items-start border border-sky-300 rounded-xl p-3 mb-5">
                    <h2 className="text-gray-200 text-2xl font-semibold mb-2">Образование</h2>
                    <p className="text-gray-300">{userPortfolio?.education}</p>
                </div>
                <div className="w-full flex flex-col items-start border border-sky-300 rounded-xl p-3 mb-5">
                    <h2 className="text-2xl text-gray-200 font-semibold mb-2">Мои качества</h2>
                    <ul className="w-full flex flex-col items-start gap-1">
                        {userPortfolio?.qualities &&
                            Object.keys(userPortfolio.qualities).map((key) => (
                                <li key={key} className="">
                                    <span className="text-gray-300">{userPortfolio.qualities[key]}</span>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="w-full flex flex-col items-start border border-sky-300 rounded-xl p-3 mb-5">
                    <h2 className="text-2xl text-gray-200 font-semibold mb-2">Мои навыки</h2>
                    <ul className="w-full flex flex-col items-start gap-1">
                        {userPortfolio?.skills &&
                            Object.keys(userPortfolio.skills).map((key) => (
                                <li key={key} className="">
                                    <span className="text-gray-300">{userPortfolio.skills[key]}</span>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="w-full flex flex-col items-start  border border-sky-300 rounded-xl p-3">
                    <h2 className="text-gray-200 font-semibold text-2xl mb-2">Опыт</h2>
                    <p className="text-gray-300">{userPortfolio?.experience}</p>
                </div>
                <ul className="w-full flex flex-col items-start gap-5 my-10  border border-sky-300 rounded-xl p-3">
                    <li className="flex items-center justify-between gap-4">
                        <PhoneIcon className="h-6 w-6 text-sky-700" />
                        <span className="text-gray-400">{userPortfolio?.phone}</span>
                    </li>
                    <li className="flex items-center justify-between gap-4">
                        <MailIcon className="h-6 w-6 text-sky-700" />
                        <span className="text-gray-400">{userPortfolio?.email}</span>
                    </li>
                    <li className="flex items-center justify-between gap-4">
                        <HomeIcon className="h-6 w-6 text-sky-700" />
                        <span className="text-gray-400">{userPortfolio?.city}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileUserCard;
