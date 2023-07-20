import React, {useEffect, useState} from 'react';
import axios from "axios";

const UserPage = () => {
    const [userPortfolio, setUserPortfolio] = useState(null);
    useEffect(() => {
        const getUserPortfolio = async () => {
            try {
                const response = await axios.get("https://resume-crafter-39b94-default-rtdb.europe-west1.firebasedatabase.app/");
                setUserPortfolio(response.data); // Сохраняем результат в состояние
                console.log(response.data); // Выводим результат в консоль
            } catch (error) {
                console.log(error);
            }
        };
        getUserPortfolio(); // Вызываем функцию при монтировании компонента
    }, []);

    return (
        <div className={"w-full h-full"}>
            <div className={"container"}>

            </div>
        </div>
    );
};

    export default UserPage;