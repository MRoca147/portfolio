import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

function Sidebar (props) {
    return (
        <div className="invisible sm:visible w-64 h-screen bg-gray-900 rounded-md align-middle">
            <div className="flex justify-center px-6 pt-4 pb-2">
                <div className="relative w-screen">
                    <img className="rounded-full border border-gray-100 shadow-sm" 
                    src="images/Perfil.png" alt="Profile picture" />
                    <div className="flex justify-center pt-4">
                        <h1 className="text-white font-bold">MARIO ROCA</h1>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-4">
                
                <ul className="flex flex-col space-y-2">
                    {props.translation.sidebar.buttons.map((element, idx) => (
                        <li key={idx} className="trelative text-gray-500 hover:text-white focus-within:text-white">
                            <a  href="#" 
                                className="inline-block w-full py-2 pl-4 pr-4 text-xs rounded 
                                hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800">
                                    {element}
                            </a>
                        </li>
                    ))}          
                </ul>
            </div>
            <div className="px-6 pt-4"><hr className="border-gray-700" /></div>
            <LanguageSwitcher lang={props.lang} options={props.languages} 
                handleChangeLanguage={props.handleChangeLanguage}
                translation={props.translation}></LanguageSwitcher>
        </div>
    );
}

export default Sidebar;