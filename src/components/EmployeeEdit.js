import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CalısanEdit = () => {
  const navigate = useNavigate(); // Sayfa geçişlerini yönlendirmek için kullanılır.
  const { id } = useParams(); // URL'den çalışanın ID'sini alır.

  // Düzenlenen çalışanın bilgilerini içeren state ve bu state'i güncellemek için fonksiyon.
  const [editedEmployee, setEditedEmployee] = useState({
    adSoyad: "",
    mail: "",
    yas: "",
    cinsiyet: "",
    universite: "",
    departman: "",
    telefon: "",
    tc: "",
    dogumtarihi: "",
    medenihal: "",
  });

  useEffect(() => {
    // Local storage'den çalışan bilgilerini alır ve düzenlenen çalışanın bilgilerini set eder.
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const employeeToEdit = storedEmployees.find(
      (employee, index) => index.toString() === id
    );
    if (employeeToEdit) {
      setEditedEmployee(employeeToEdit);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Input değer değişikliklerini takip ederek düzenlenen çalışanın bilgilerini günceller.
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    // Local storage'den çalışan bilgilerini alır.
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

    // Düzenlenen çalışanın bilgilerini günceller ve local storage'a kaydeder.
    const updatedEmployees = storedEmployees.map((employee, index) => {
      if (index.toString() === id) {
        return editedEmployee;
      }
      return employee;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    navigate("/employees"); // Çalışanlar sayfasına yönlendirme yapar.
  };

  return (
    <div className="ml-24 flex flex-col w-full  items-center h-screen">
      <header className="font-bold text-4xl bg-gradient-to-r from-gray-500 to-black text-center w-full text-white ">
        Çalışan Düzenleme
      </header>
      <div className="pt-12">
        <div className="flex">
          <div className="2xl:w-[1600px] xl:w-[1000px] lg:w-[w-800px] md:w-[500px] md:pl-8 pl-36 2xl:pl-48">
            <div className="bg-white p-2 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Çalışan Düzenle</h2>
              <form onSubmit={handleEdit}>
                <div className="mb-4">
                  <label className="block mb-2">Ad Soyad:</label>
                  <input
                    type="text"
                    name="adSoyad"
                    value={editedEmployee.adSoyad}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Mail:</label>
                  <input
                    type="email"
                    name="mail"
                    value={editedEmployee.mail}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Yaş:</label>
                  <input
                    type="number"
                    name="yas"
                    value={editedEmployee.yas}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Cinsiyet:</label>
                  <select
                    name="cinsiyet"
                    value={editedEmployee.cinsiyet}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="">Seçiniz</option>
                    <option value="Erkek">Erkek</option>
                    <option value="Kadın">Kadın</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Üniversite:</label>
                  <input
                    type="text"
                    name="universite"
                    value={editedEmployee.universite}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Departman:</label>
                  <input
                    type="text"
                    name="departman"
                    value={editedEmployee.departman}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Telefon:</label>
                  <input
                    type="number"
                    name="telefon"
                    value={editedEmployee.telefon}
                    onChange={handleInputChange}
                    placeholder="Telefon numaranız"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">T.C:</label>
                  <input
                    type="number"
                    name="tc"
                    value={editedEmployee.tc}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Doğum Tarihi:</label>
                  <input
                    type="date"
                    name="dogumtarihi"
                    value={editedEmployee.dogumtarihi}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Medeni Hal:</label>
                  <select
                    type="text"
                    name="medenihal"
                    value={editedEmployee.medenihal}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="">Seçiniz</option>
                    <option value="evli">Evli</option>
                    <option value="bekar">Bekar</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Çalışanı Düzenle
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalısanEdit;
