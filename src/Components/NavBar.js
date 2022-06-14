import { useTranslation } from 'react-i18next';
import {useState} from "react";

function NavBar (props) {

  const { t } = useTranslation();

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav>
      <div className="container-fluid mx-auto border-b-2 border-white bg-black">
        <div className="flex relative items-center">

          {/*Mobile Sidebar button*/}
          <div onClick={() => {setIsNavExpanded(!isNavExpanded)}} className="md:hidden lg:hidden p-4 space-y-2 hover:cursor-pointer rounded shadow">
            <span className="block w-8 h-0.5 bg-gray-100"></span>
            <span className="block w-8 h-0.5 bg-gray-100"></span>
            <span className="block w-8 h-0.5 bg-gray-100"></span>
          </div>

          {/*Mobile Menus*/}
          <div className={isNavExpanded?"absolute bg-white w-2/3 h-full left-0 top-0 md:hidden":"hidden"}>
            <div className="bg-black border-b-2 border-b-white">
              <div onClick={() => {setIsNavExpanded(!isNavExpanded)}} className="md:hidden lg:hidden p-4 space-y-2 hover:cursor-pointer shadow">
                <span className="block w-8 h-0.5 bg-gray-100"></span>
                <span className="block w-8 h-0.5 bg-gray-100"></span>
                <span className="block w-8 h-0.5 bg-gray-100"></span>
              </div>
            </div>
            <ul className="pt-4 bg-bgColor-end text-xl border-t h-screen bg-black mx-auto w-auto space-y-4 sm:border-none">
              <li onClick={() => {props.handleChangePage(0); setIsNavExpanded(!isNavExpanded)}} className="">
                <a href="#" className={`p-3 ${props.page===0?' border-white':'hover:border-b-white hover:border-b-2'}`}>{t('navbar.HOME')}</a>
              </li>
              {/*<li onClick={() => {props.handleChangePage(1); setIsNavExpanded!isNavExpanded} }className="sm:inline-block">*/}
              {/*  <a href="#" className={`p-3 ${props.page==1?' border-white':'hover:border-b-white hover:border-b-2'}`}>{t('navbar.ABOUT')}</a>*/}
              {/*</li>*/}
              <li onClick={() => {props.handleChangePage(2); setIsNavExpanded(!isNavExpanded)}} className="">
                <a href="#" className={`p-3 ${props.page===2?' border-white':'hover:border-b-white hover:border-b-2'}`}>{t('navbar.SKILLS')}</a>
              </li>
              <li onClick={() => {props.handleChangePage(3); setIsNavExpanded(!isNavExpanded)}} className="">
                <a href="#" className={`p-3 ${props.page===3?' border-white':'hover:border-b-white hover:border-b-2'}`}>{t('navbar.PROJECTS')}</a>
              </li>
              <li onClick={() => {props.handleChangePage(4); setIsNavExpanded(!isNavExpanded)}} className="">
                <a href="#" className={`p-3 ${props.page===4?' border-white':'hover:border-b-white hover:border-b-2'}`}>{t('navbar.CONTACT')}</a>
              </li>
            </ul>
          </div>

          {/*Site-title*/}
          <a href="#" className="text-white text-3xl font-bold p-3">PORTFOLIO</a>

          {/*Menus*/}
          <ul className="hidden md:block ml-auto text-gray-400 sm:self-center text-xl border-t sm:border-none">
            <li onClick={() => props.handleChangePage(0)} className="sm:inline-block">
              <a href="#" className={`p-3 ${props.page===0?'text-white border-l-2 border-white':''} hover:text-white hover:border-l-2 hover:border-white`}>{t('navbar.HOME')}</a>
            </li>
            {/*<li onClick={() => props.handleChangePage(1)} className="sm:inline-block">*/}
            {/*  <a href="#" className={`p-3 ${props.page==1?'text-white border-l-2 border-white':''} hover:text-white hover:border-l-2 hover:border-white`}>{t('navbar.ABOUT')}</a>*/}
            {/*</li>*/}
            <li onClick={() => props.handleChangePage(2)} className="sm:inline-block">
              <a href="#" className={`p-3 ${props.page===2?'text-white border-l-2 border-white':''} hover:text-white hover:border-l-2 hover:border-white`}>{t('navbar.SKILLS')}</a>
            </li>
            <li onClick={() => props.handleChangePage(3)} className="sm:inline-block">
              <a href="#" className={`p-3 ${props.page===3?'text-white border-l-2 border-white':''} hover:text-white hover:border-l-2 hover:border-white`}>{t('navbar.PROJECTS')}</a>
            </li>
            <li onClick={() => props.handleChangePage(4)} className="sm:inline-block">
              <a href="#" className={`p-3 ${props.page===4?'text-white border-l-2 border-white':''} hover:text-white hover:border-l-2 hover:border-white`}>{t('navbar.CONTACT')}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;