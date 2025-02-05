import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          📖 HistoriasWeb
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">{t("navbar.home")}</Link>
          <Link to="/historias" className="hover:underline">{t("navbar.stories")}</Link>
          <Link to="/blog" className="hover:underline">{t("navbar.blog")}</Link>
          <Link to="/sobre-mi" className="hover:underline">{t("navbar.about")}</Link>
          <Link to="/contacto" className="hover:underline">{t("navbar.contact")}</Link>
        </div>
        {/* 🔥 Botón para cambiar de idioma */}
        <button
          onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}
          className="bg-gray-700 px-4 py-2 rounded text-sm"
        >
          {i18n.language === "es" ? "🇬🇧 EN" : "🇪🇸 ES"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
