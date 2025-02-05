const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center text-sm flex flex-col items-center">
        <p>&copy; {new Date().getFullYear()} Letras Perdidas. Todos los derechos reservados.</p>
        <div className="flex items-center space-x-2">
          <p>
            Este sitio está protegido por una licencia{" "}
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
      </footer>
    );
  };
  
  export default Footer;
  