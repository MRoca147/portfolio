function Sidebar () {
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
                    <li className="trelative text-gray-500 hover:text-white focus-within:text-white">
                        <a  href="#" 
                            class="inline-block w-full py-2 pl-4 pr-4 text-xs rounded 
                            hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800">
                                HOME
                        </a>
                    </li>
                    <li className="trelative text-gray-500 hover:text-white focus-within:text-white">
                        <a  href="#" 
                            class="inline-block w-full py-2 pl-4 pr-4 text-xs rounded 
                            hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800">
                                ABOUT
                        </a>
                    </li>
                    <li className="trelative text-gray-500 hover:text-white focus-within:text-white">
                        <a  href="#" 
                            class="inline-block w-full py-2 pl-4 pr-4 text-xs rounded 
                            hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800">
                                SKILLS
                        </a>
                    </li>
                    <li className="trelative text-gray-500 hover:text-white focus-within:text-white">
                        <a  href="#" 
                            class="inline-block w-full py-2 pl-4 pr-4 text-xs rounded 
                            hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800">
                                PROJECTS (COMING SOON)
                        </a>
                    </li>
                    <li className="trelative text-gray-500 hover:text-white focus-within:text-white">
                        <a  href="#" 
                            class="inline-block w-full py-2 pl-4 pr-4 text-xs rounded 
                            hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800">
                                CONTACT
                        </a>
                    </li>                
                </ul>
            </div>
            <div className="px-6 pt-4"><hr class="border-gray-700" /></div>
            <div className="px-6 pt-4">
                <label className="text-gray-500">Languague</label>
                <select className="mt-4 form-select appearance rounded w-full">
                    <option value="0" key="">English</option>
                    <option value="1" key="">Spanish</option>
                </select>
            </div>
        </div>
    );
}

export default Sidebar;