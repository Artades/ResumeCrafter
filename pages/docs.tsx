import React from 'react';
import MetaHead from "@/meta/MetaHead";

const Documentation = () => {
    const commands = [
        { command: '/start', description: 'Начать взаимодействие с ботом' },
        { command: '/templates', description: 'Показать шаблоны резюме' },
        { command: '/feedback', description: 'Отправить обратную связь' },
        { command: '/help', description: 'Вывести справочную информацию и доступные команды' },
    ];

    const functionalities = [
        'Создание и настройка профиля пользователя',
        'Выбор и заполнение шаблона резюме',
        'Предпросмотр и редактирование резюме',
        'Скачивание готового резюме в форматах PDF',
        'Отправка обратной связи и запрос помощи',
    ];



        return (
       <>
           <MetaHead title={"Docs"}/>
           <div className="w-full min-h-screen text-gray-200">
               <div className="container">
                   <header>
                       <h1 className="text-2xl mb-6 lg:text-4xl">
                           Начать работу с <span className="text-sky-500">ResumeCrafter</span>.
                       </h1>
                       <p className="text-gray-300 mb-8 text-md ">
                           Добро пожаловать в документацию для нашего Телеграм Бота. Ниже приведены команды и функциональности, которые вы
                           можете использовать для взаимодействия с ботом.
                       </p>
                   </header>
                   <section className={"mb-8"}>
                       <h2 className="text-2xl mb-4">Команды</h2>
                       <ul className=" flex flex-col items-start gap-1">
                           {commands.map(({ command, description }) => (
                               <li key={command} className="mb-2">
                                   <code className="bg-gray-800 rounded-lg px-2 py-1 text-sky-300 border border-slate-600">{command}</code> - {description}
                               </li>
                           ))}
                       </ul>
                   </section>
                   <section className={"mb-8"}>
                       <h2 className="text-2xl mb-4">Функциональности</h2>
                       <ul className="list-disc list-inside">
                           {functionalities.map((functionality) => (
                               <li key={functionality} className="mb-2">
                                   {functionality}
                               </li>
                           ))}
                       </ul>
                   </section>

                   <section className={"mb-8"}>
                       <h2 className="text-2xl mb-4">Пример использования</h2>
                       <p className="mb-2">
                           Для создания резюме с помощью бота, выполните следующие действия:
                       </p>
                       <ol className="list-decimal list-inside">
                           <li className="mb-2">
                               Откройте Телеграм и найдите нашего бота по имени.
                           </li>
                           <li className="mb-2">
                               Начните взаимодействие с ботом, отправив команду <code className={"text-sky-300"}>/start</code>.
                           </li>
                           <li className="mb-2">
                               Бот предложит вам выбрать шаблон резюме. Используйте команду <code className={"text-sky-300"}>/templates</code>, чтобы увидеть доступные варианты.
                           </li>
                           <li className="mb-2">
                               Выберите один из шаблонов и следуйте инструкциям бота для заполнения информации.
                           </li>
                           <li className="mb-2">
                               После завершения заполнения бот предоставит вам возможность предварительного просмотра и скачивания резюме в формате PDF.
                           </li>
                       </ol>
                   </section>
               </div>
           </div>
       </>
    );
};

export default Documentation;
