import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold">{t("home.title")}</h1>
      <p className="mt-4 text-lg">{t("home.description")}</p>
    </div>
  );
};

export default Home;
