import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Dropdowns() {
  const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(false);
  const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);
  const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] =
    useState(false);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);
  const [
    isAuthorizationControlDropdownOpen,
    setIsAuthorizationControlDropdownOpen,
  ] = useState(false);

  const handleEmployeeClick = () => {
    setIsEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  };

  const handleReportClick = () => {
    setIsReportDropdownOpen(!isReportDropdownOpen);
  };

  const handleDepartmentClick = () => {
    setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen);
  };

  const handleSettingsClick = () => {
    setIsSettingsDropdownOpen(!isSettingsDropdownOpen);
  };

  const handleAuthorizationClick = () => {
    setIsAuthorizationControlDropdownOpen(!isAuthorizationControlDropdownOpen);
  };

  return (
    <div className="px-6 ">
      <ul className="flex flex-col space-y-2  ">
        <li
          className="relative text-gray-500 hover:text-white flex flex-col md:text-left md:text-l"
          onClick={handleEmployeeClick}
        >
          <NavLink className="inline-block w-full py-2 pl-8 pr-4 rounded text-2xl hover:bg-gradient-to-r from-black to-gray-500">
            Çalışanlar
          </NavLink>
          {isEmployeeDropdownOpen && (
            <div className="pl-8">
              <ul className="flex flex-col text-gray-500 border-l border-gray-700">
                <li>
                  <NavLink
                    to="/employees"
                    className="block w-full px-4 py-2 text-md rounded hover:bg-gray-800 hover:text-white"
                  >
                    Tüm Çalışanlar
                  </NavLink>
                </li>
                <li>
                  {/* Çalışan ekle dropdownını sadece admşn görebilecek */}
                  <NavLink
                    to="/add-employee "
                    className="block w-full px-4 py-2 text-md rounded hover:bg-gray-800 hover:text-white"
                  >
                    Çalışan Ekle
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          className="relative text-gray-500 hover:text-white flex flex-col"
          onClick={handleReportClick}
        >
          <NavLink
            to="/reports"
            className="inline-block w-full py-2 pl-8 pr-4 rounded text-2xl hover:bg-gradient-to-r from-black to-gray-500"
          >
            Raporlar
          </NavLink>
          {isReportDropdownOpen && (
            <div className="pl-8">
              <ul className="flex flex-col text-gray-500 border-l border-gray-700">
                <li>
                  <NavLink
                    className="block w-full px-4 py-z text-md rounded hover:bg-gray-800 hover:text-white"
                    to="/Employees"
                  >
                    Çalışan Bazlı Raporlar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="block w-full px-4 py-2 text-md rounded hover:bg-gray-800 hover:text-white"
                    to="/calısan-ekle"
                  >
                    Departman Bazlı Raporlar
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          className="relative text-gray-500 hover:text-white flex justify-between"
          onClick={handleDepartmentClick}
        >
          <div>
            <NavLink
              to="/departmanlar"
              className="inline-block w-full py-2 pl-8 pr-4 rounded text-2xl hover:bg-gradient-to-r from-black to-gray-500"
            >
              Departmanlar
            </NavLink>
            {isDepartmentDropdownOpen && (
              <div className="pl-8">
                <ul className="flex flex-col text-gray-500 border-l border-gray-700">
                  <li>
                    <NavLink
                      className="block w-full px-4 py-z text-md rounded hover:bg-gray-800 hover:text-white"
                      to="/Employees"
                    >
                      Çalışan Bazlı Raporlar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="block w-full px-4 py-2 text-md rounded hover:bg-gray-800 hover:text-white"
                      to="/calısan-ekle"
                    >
                      Departman Bazlı Raporlar
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>

        <li
          className="relative text-gray-500 hover:text-white flex justify-between"
          onClick={handleAuthorizationClick}
        >
          <div>
            {/* Yetkilendirme kontrol panelinde admin diğer kullanıcılara yetki atayabilecek */}
            <NavLink
              to="/ControlPanel"
              className="inline-block w-full py-2 pl-8 pr-4 rounded text-2xl hover:bg-gray-800"
            >

              Yetkilendirme Kontrol Paneli
            </NavLink>
            {isAuthorizationControlDropdownOpen && (
              <div className="pl-8">
                <ul className="flex flex-col text-gray-500 border-l border-gray-700">
                  <li>
                    <NavLink
                      className="block w-full px-4 py-z text-md rounded hover:bg-gray-800 hover:text-white"
                      to="/Employees"
                    >
                      Çalışan Bazlı Raporlar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="block w-full px-4 py-2 text-md rounded hover:bg-gray-800 hover:text-white"
                      to="/calısan-ekle"
                    >
                      Departman Bazlı Raporlar
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>

        <li
          className="relative text-gray-500 hover:text-white flex justify-between"
          onClick={handleSettingsClick}
        >
          <div>
            <NavLink
              to="/ayarlar"
              className="inline-block w-full py-2 pl-8 pr-4 rounded text-2xl hover:bg-gray-800"
            >
              Ayarlar
            </NavLink>
            {isSettingsDropdownOpen && (
              <div className="pl-8">
                <ul className="flex flex-col text-gray-500 border-l border-gray-700">
                  <li>
                    <NavLink
                      className="block w-full px-4 py-z text-md rounded hover:bg-gray-800 hover:text-white"
                      to="/Employees"
                    >
                      Çalışan Bazlı Raporlar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="block w-full px-4 py-2 text-md rounded hover:bg-gray-800 hover:text-white"
                      to="/calısan-ekle"
                    >
                      Departman Bazlı Raporlar
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Dropdowns;
