import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold">{t("about.title")}</h1>
      <p className="mt-4 text-lg">{t("about.description")}</p>
      <div className="flex items-center justify-center space-x-2 mt-6 text-sm">
        <p>
          Todo el contenido de este sitio está protegido por una licencia{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CC BY-NC-ND 4.0
          </a>.
        </p>
        <img
          src="https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png"
          alt="Licencia Creative Commons"
          className="w-12 h-auto"
        />
      </div>
    </div>
  );
};

export default About;
