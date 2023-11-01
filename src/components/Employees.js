import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((employee, i) => i !== index);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
  };

  const handleShowPopup = (employee, index) => {
    setSelectedEmployee({ employee, index });
  };

  const handleClosePopup = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="flex flex-col items-center h-screen ">
      <header className="font-bold text-4xl bg-gradient-to-r from-gray-500 to-black text-center  text-white ml-auto md:w-[800px] lg:w-[1200px]  xl:w-[1600px] 2xl:w-[2000px] ">
        Çalışanlar
      </header>
      <div className="pt-12 ">
        <div className="flex md:pl-36  ">
          <div className="xl:w-[1000px] lg:w-[900px] lg:p-8 md:w-[600px] md:pl-12 ">
            <div className="bg-white p-2 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Çalışan Listesi</h2>
              <table className="min-w-full lg:text-xl ">
                <thead>
                  <tr>
                    <th className="py-2 border  ">Ad Soyad</th>
                    <th className="py-2 border  ">Mail</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index}>
                      <td
                        className="py-2 border pl-2 cursor-pointer text-black"
                        onClick={() => handleShowPopup(employee, index)}
                      >
                        {employee.adSoyad}
                      </td>
                      <td className="py-2 border pl-2">{employee.mail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pt-4">
                <Link
                  to="/add-employee"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Çalışan Ekle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Açılan popup verileri aşağıdakiler */}

      {selectedEmployee && (
        <div className="fixed inset-0 flex items-center justify-center text-xl font-bold bg-black bg-opacity-50">
          <div className="bg-gray-700 p-8 rounded-2xl w-[600px]  text-white relative  ">
            <button
              onClick={handleClosePopup}
              className="bg-none text-black p-2 rounded-full absolute top-2 right-2"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="flex flex-col items-center">
              <h2 className="m-4 text-red-500 ">
                Ad Soyad:<span className="text-white">
                  {selectedEmployee.employee.adSoyad}
                </span>
              </h2>
              <p className="m-4 text-red-500 ">
                Mail:{" "}
                <span className="text-white">
                  {selectedEmployee.employee.mail}
                </span>
              </p>
              <p className="m-4 text-red-500 ">
                Departman:<span className="text-white">
                  {selectedEmployee.employee.departman}
                </span>
              </p>
              <p className="m-4 text-red-500 ">
                Cinsiyet: <span className="text-white">
                  {selectedEmployee.employee.cinsiyet}
                </span>
              </p>
              <p className="m-4 text-red-500 ">
                Üniversite :<span className="text-white">
                  {selectedEmployee.employee.universite}
                </span>
              </p>
              <p className="m-4 text-red-500 ">Yaş:<span className="text-white">
                  {selectedEmployee.employee.yas}
                </span></p>
              <p className="m-4 text-red-500 ">T.C: <span className="text-white">
                  {selectedEmployee.employee.tc}
                </span></p>
              <p className="m-4 text-red-500 ">
                Doğum Tarihi: <span className="text-white">
                  {selectedEmployee.employee.dogumtarihi}
                </span>
              </p>
              <p className="m-4 text-red-500 ">
                Telefon:<span className="text-white">
                  {selectedEmployee.employee.telefon}
                </span>
              </p>
              <p className="m-4 text-red-500 ">
                Medeni Hal: <span className="text-white">
                  {selectedEmployee.employee.medenihal}
                </span>
              </p>
            </div>
            <div className="flex justify-center ">
              <Link
                to={`/edit-employee/${selectedEmployee.index}`}
                className="bg-blue-500 w-24 text-white p-3 mr-2 m-2 rounded-xl"
              >
                Düzenle
              </Link>

              <button
                onClick={() => handleDeleteEmployee(selectedEmployee.index)}
                className="bg-red-500 w-20 text-white p-3 ml-12 m-2 rounded-xl"
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employees;
