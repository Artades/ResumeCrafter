export interface UserPortfolioProps {
    city:       string;
    education:  string;
    email:      string;
    experience: string;
    fio:        string;
    phone:      string;
    purpose:    string;
    telegram:   string;

    qualities: { [key: string]: string };
    skills: { [key: string]: string };
}
