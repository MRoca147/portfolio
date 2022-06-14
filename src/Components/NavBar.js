import { useTranslation } from 'react-i18next';

function NavBar (props) {

  const { t, i18n } = useTranslation();

  return (
    <nav>
      <div className="container-fluid mx-auto border-b-2 border-white bg-black">
        <div className="sm:flex justify-around">
          {/*Site-title*/}
          <a href="#" className="text-white text-3xl font-bold p-3">PORTFOLIO</a>

          {/*Menus*/}
          <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
            <li onClick={() => props.handleChangePage(0)} className="sm:inline-block">
              <a href="#" className={`p-3 ${props.page==0?'text-white border-l-2 border-white':''} hover:text-white hover:border-l-2 hover:border-white`}>{t('navbar.lang')}</a>
            </li>
            {/*<li onClick={() => props.handleChangePage(1)} className="sm:inline-block">*/}
            {/*  <a href="#" className={`p-3 ${props.page==1?'text-white border-l-2 border-white':''} hover:text-white hover:border-l-2 hover:border-white`}>About</a>*/}
            {/*</li>*/}
            <li onClick={() => props.handleChangePage(2)} className="sm:inline-block">
              <a href="#" className={`p-3 ${props.page==2?'text-white border-l-2 border-white':''} hover:text-white hover:border-l-2 hover:border-white`}>Skills</a>
            </li>
            <li onClick={() => props.handleChangePage(3)} className="sm:inline-block">
              <a href="#" className={`p-3 ${props.page==3?'text-white border-l-2 border-white':''} hover:text-white hover:border-l-2 hover:border-white`}>Projects</a>
            </li>
            <li onClick={() => props.handleChangePage(4)} className="sm:inline-block">
              <a href="#" className={`p-3 ${props.page==4?'text-white border-l-2 border-white':''} hover:text-white hover:border-l-2 hover:border-white`}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;