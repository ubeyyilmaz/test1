import React, { useState } from "react";

function CalisanEkle() {
  const [newEmployee, setNewEmployee] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const updatedEmployees = [...storedEmployees, newEmployee];
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setNewEmployee({
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
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 md:pb-48 md:pr-8 md:w-[1400px] md:h-[1400px] xl:w-[1600px] 2xl:w-[2000px] ">
      <div className="max-w-md xl:max-w-4xl bg-white p-4 rounded md:ml-48 md:mb-[290px]  xl:w-3/4 ">
        <h2 className="text-xl font-bold mb-4 text-center">
          Yeni Çalışan Ekle
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="mb-4">
            <label className="block mb-2">Ad Soyad:</label>
            <input
              type="text"
              name="adSoyad"
              value={newEmployee.adSoyad}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Mail:</label>
            <input
              type="email"
              name="mail"
              value={newEmployee.mail}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Yaş:</label>
            <input
              type="number"
              name="yas"
              value={newEmployee.yas}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Cinsiyet:</label>
            <select
              name="cinsiyet"
              value={newEmployee.cinsiyet}
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
              value={newEmployee.universite}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Departman:</label>
            <input
              type="text"
              name="departman"
              value={newEmployee.departman}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Telefon:</label>
            <input
              type="tel"
              name="telefon"
              value={newEmployee.telefon}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">T.C:</label>
            <input
              type="number"
              name="tc"
              value={newEmployee.tc}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Doğum Tarihi:</label>
            <input
              type="date"
              name="dogumtarihi"
              value={newEmployee.dogumtarihi}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Medeni Hal:</label>
            <select
              type="text"
              name="medenihal"
              value={newEmployee.medenihal}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Seçiniz</option>
              <option value="evli">Evli</option>
              <option value="bekar">Bekar</option>
            </select>
          </div>

          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Çalışan Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CalisanEkle;
