import React from 'react';


const Sidebar: React.FC = () => {
  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-22 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-1 py-4 overflow-y-auto flex flex-col justify-between bg-white">
        <ul className="space-y-3 font-medium">
        <li>
            <a href="#" className="flex items-center py-2 px-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="./logo.PNG" alt="logo" width="40"/>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="./icon_1.PNG" alt="logo" width="30"/>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="./icon_2.PNG" alt="logo" width="30"/>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="./icon_3.PNG" alt="logo" width="30"/>              
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="./icon_4.PNG" alt="logo" width="30"/>
            </a>
          </li>
        </ul>
        <ul className="space-y-3 font-medium">  
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="./icon_5.PNG" alt="logo" width="30"/>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 pt-0 px-1  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="./profile.PNG" alt="logo" width="40" className='rounded-full'/>
            </a>
          </li>
        </ul>  
      </div>
    </aside>
  );
}

export default Sidebar;
