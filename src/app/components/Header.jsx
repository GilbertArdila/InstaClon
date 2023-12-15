import Image from "next/image";
import Search from "./Search";
import HeaderMenu from "./HeaderMenu";
const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-4 xl:mx-auto">
      <div className="h-24 w-24 relative inline-grid lg:hidden  cursor-pointer">
        <Image
          src={
            "https://cdn.josemiguelgarcia.net/wp-content/uploads/2015/12/Co%CC%81mo-funciona-Instagram.png"
          }
          alt="small screens' logo"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="h-24 w-16  relative hidden lg:inline-grid  cursor-pointer">
        <Image
          src={
            "https://www.ayselucus.es/sites/default/files/noticias/fotos/dd734d6b-833f-4e35-83fe-2af26c055776.png"
          }
          alt="big screens' logo"
          layout="fill"
          className="object-contain"
        />
      </div>

      <Search/>
     
      

      <HeaderMenu/>
    </div>
  );
};

export default Header;
