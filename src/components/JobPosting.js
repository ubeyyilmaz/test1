import React from "react";

function IsIlanları() {
  const jobs = [
    {
      position: "İnsan Kaynakları Yetkilisi",
      experience: "3 Yıl",
      departman: "İnsan Kaynakları",
      operation: "Tam zamanlı", //çalışma şekli
      id: 1, // id sayesinde mapleyebilicez
    },
    {
      position: "İnsan Kaynakları Yetkilisi",
      experience: "3 Yıl",
      departman: "İnsan Kaynakları",
      operation: "Tam zamanlı", //çalışma şekli
      id: 1, // id sayesinde mapleyebilicez
    },
    {
      position: "İnsan Kaynakları Yetkilisi",
      experience: "3 Yıl",
      departman: "İnsan Kaynakları",
      operation: "Tam zamanlı", //çalışma şekli
      id: 1, // id sayesinde mapleyebilicez
    },
    {
      position: "İnsan Kaynakları Yetkilisi",
      experience: "3 Yıl",
      departman: "İnsan Kaynakları",
      operation: "Tam zamanlı", //çalışma şekli
      id: 1, // id sayesinde mapleyebilicez
    },
    {
      position: "İnsan Kaynakları Yetkilisi",
      experience: "3 Yıl",
      departman: "İnsan Kaynakları",
      operation: "Tam zamanlı", //çalışma şekli
      id: 1, // id sayesinde mapleyebilicez
    },
  ];

  return (
    <div
      className=" max-h-[200px] mt-16   justify-center 2xl:w-[400px] 2xl:max-h-[200px] xl:w-[500px] xl:h-72 lg:w-[350px] lg:mt-12 md:text-sm md:w-[300px] md:h-36 "
      style={{ overflowY: "scroll",}}
    >
      <div className="w-[400px] ">
        <h1 className=" xl:text-center xl:text-xl font-bold mb-4 md:text-center md:w-96 md:text-[15px] first-letter: ">
          İş İlanları
        </h1>
        <table className="min-w-full lg:w-full">
          <thead>
            <tr>
              <th className="border">Pozisyon</th>
              <th className=" border">Deneyim</th>
              <th className="border">Çalışma Şekli</th>
              <th className=" border">Departman</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td className=" border pl-2 w-[200px]">{job.position}</td>
                <td className=" border pl-2 w-[200px]">{job.experience}</td>
                <td className=" border pl-2 w-[400px]">{job.operation}</td>
                <td className="border pl-2 w-[400px]">{job.departman}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IsIlanları;
