

const About = () => {
    const members = [
        {
            id: 1,
            name: "Анастасия",
            activity: "Дизайнер",
            desc: "Выполнила невероятную работу. Креативно подошла к созданию стикеров, emoji, мемов. Пришла к идеи и создала логотип и аватар Телеграм Бота.",
        },
        {
            id: 2,
            name: "Давид",
            activity: "Back-end разработчик",
            desc: "Выполнил важную работу в разработке самого Телеграм Бота. Настроил Базу данных, развернув её на FireBase и разработал самого бота используя C#.",
        },
        {
            id: 3,
            name: "Артём",
            activity: "Front-end разработчик",
            desc: "Выполнил важную работу разработав Документацию Бота и Landing страницы. Использовал Typescript и фреймворк Next.js. Стили написаны на Tailwindcss.",
        },
    ];

    return (
        <div className={"w-full min-h-screen text-gray-200"}>
            <div className={"container"}>
                <h1 className="text-2xl mb-10 lg:text-4xl">
                    Немного о команде <span className="text-sky-500">ChatCrafters</span>.
                </h1>
                <div className={"grid gap-6 grid-cols-1"}>
                    {members.map((member) => (
                        <div
                            key={member.id}
                            className={"border border-slate-500 rounded-lg p-6 b"}
                        >
                            <p className={"text-xl text-gray-200 font-bold mb-2"}>
                                {member.activity}
                            </p>
                            <p className={"text-md text-gray-300 mb-4"}>{member.desc}</p>
                            <span className={"text-md text-sky-600"}>{member.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;


