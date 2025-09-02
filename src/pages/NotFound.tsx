import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 animate-fadeIn">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Página não encontrada</h2>
          <p className="text-xl text-muted-foreground">
            Oops! A página que você está procurando não existe.
          </p>
        </div>
        <div className="space-y-3">
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary-hover transition-smooth"
          >
            Voltar ao Início
          </a>
          <p className="text-sm text-muted-foreground">
            Se você acredita que isso é um erro, entre em contato conosco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
