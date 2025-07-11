export default function Footer() {
  return (
    // Footer - simplified and reduced height
    <div className="bg-[#0033A0] text-white py-3 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <img 
              src="https://www.amadeus.com/static/custom/resources/20230829162608/dist/images/header-logo.svg" 
              alt="Amadeus" 
              className="h-5 brightness-0 invert"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://cdn.icon-icons.com/icons2/2699/PNG/512/amadeus_logo_icon_170290.png";
              }}
            />
            <span className="font-medium text-sm">Travel Technology</span>
          </div>
          <div className="text-xs opacity-70">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </div>
        </div>
      </div>
    </div>
  );
} 