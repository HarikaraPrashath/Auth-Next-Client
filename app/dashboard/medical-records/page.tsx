import Search from "@/app/components/SearchBar/search";
import React from "react";
import Admission from "@/app/components/MedicalReportComponent/AdmissionHistory/Admission";
import Surgeries from "@/app/components/MedicalReportComponent/Surgeries/Surgeries";
import VisitHistory from "@/app/components/MedicalReportComponent/VisitHistory/VisitHistory";

const page = () => {
  return (
    <div>
      <Search />
      <div className="flex gap-5">
        <div className="border-1 border-gray-300 rounded-sm p-4 mt-5 ml-2 w-[48%]">
          <h1 className="text-xl text-green-950">Current Vitals</h1>
          {/* Table format */}
          <div className="mt-2 text-green-900">
            <table className="table-auto w-full text-left">
              <tbody>
                <tr className="">
                  <td className="py-2  ">Blood Pressure</td>
                  <td className="py-2  text-right font-medium">120/80 mmHg</td>
                </tr>
                <tr className="">
                  <td className="py-2 ">Heart Rate</td>
                  <td className="py-2 text-right font-medium">72 bpm</td>
                </tr>
                <tr className="">
                  <td className="py-2 ">Temperature</td>
                  <td className="py-2 text-right font-medium">98.6 °F</td>
                </tr>
                <tr className="">
                  <td className="py-2 ">Oxygen Saturation</td>
                  <td className="py-2 text-right font-medium">98%</td>
                </tr>
                <tr className="">
                  <td className="py-2 ">Blood Sugar</td>
                  <td className="py-2 text-right font-medium">20mg/dL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="border-1 border-gray-300 rounded-sm p-4 mt-5  ml-2 w-[48%]">
          <h1 className="text-xl text-green-950">Biometrics</h1>
          {/* Table format */}
          <div className="mt-2 text-green-900 ">
            <table className="table-auto w-full text-left">
              <tbody>
                <tr className="">
                  <td className="py-2  ">Weight</td>
                  <td className="py-2  text-right font-medium">
                    145 lbs (65.8kg)
                  </td>
                </tr>
                <tr className="">
                  <td className="py-2 ">Height</td>
                  <td className="py-2 text-right font-medium">
                    {" "}
                    5&apos;7&quot; (170cm)
                  </td>
                </tr>
                <tr className="">
                  <td className="py-2 ">BMI (calc).</td>
                  <td className="py-2 text-right font-medium">22.7</td>
                </tr>
                <tr className="">
                  <td className="py-2 ">MUAC</td>
                  <td className="py-2 text-right font-medium">12.5cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Admission History */}
      <div className="border-1 border-gray-300 rounded-sm p-4 mt-5 ml-2 w-full">
        <Admission />
      </div>

      {/* Rest of part */}
      <div className="flex ml-2 mt-4 gap-5">
        {/* Left side */}
        <div className="flex-[60%] ">
          {/* Medications Part */}
          <div className="border-1 border-green-200 p-4 ">
            <h1 className="text-green-950 text-xl">Medications</h1>
            {/* Table start here */}
            <div className="mt-2 text-green-900">
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr className="bg-green-100 text-sm ">
                    <th className="py-2 px-2 font-medium ">Medications</th>
                    <th className="py-2 px-2 font-medium">Dosage</th>
                    <th className="py-2 px-2 font-medium">Frequency</th>
                    <th className="py-2 px-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Main Rows */}
                  <tr>
                    <td className="py-2 px-2 font-medium">Metformin</td>
                    <td className="py-2 px-2">500g</td>
                    <td className="py-2 px-2">2x daily (day, night)</td>
                    <td className="py-2 px-2 text-sm">
                      <span className="bg-green-200 text-green-900 rounded-lg px-2 py-1">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-medium">Metformin</td>
                    <td className="py-2 px-2">500g</td>
                    <td className="py-2 px-2">2x daily (day, night)</td>
                    <td className="py-2 px-2 text-sm">
                      <span className="bg-green-200 text-green-900 rounded-lg px-2 py-1">
                        Finished
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-medium">Metformin</td>
                    <td className="py-2 px-2">500g</td>
                    <td className="py-2 px-2">2x daily (day, night)</td>
                    <td className="py-2 px-2 text-sm">
                      <span className="bg-green-200 text-green-900 rounded-lg px-2 py-1">
                        Finished
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Surgeries */}
          <div className="border-1 border-green-200 p-4 mt-4">
            <Surgeries />
          </div>

          {/* Visit History */}
          <div className="border-1 border-green-200 p-4 mt-4">
            {" "}
            <VisitHistory />
          </div>
        </div>

        {/* Right side  */}
        <div className="flex-[40%]">
          <div className="border border-green-200 p-4">
            <h2 className="text-xl text-green-950">Recent Notes</h2>
            <p className="mt-3 text-sm text-green-950">
              <i>Feb 10, 2025</i>
            </p>
            <p className="text-green-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut
              magnam tempora!
            </p>

            <p className="mt-3 text-sm text-green-950">
              <i>Feb 10, 2025</i>
            </p>
            <p className="text-green-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut
              magnam tempora!
            </p>

            <p className="mt-3 text-sm text-green-950">
              <i>Feb 10, 2025</i>
            </p>
            <p className="text-green-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut
              magnam tempora!
            </p>
          </div>

          {/* Medical Conditions */}
          <div className="border border-green-200 p-4 mt-4">
            <h2 className="text-xl text-green-950">Medical Conditions</h2>
            {/* Parse starting */}
            <div className="flex justify-between  mt-3 border-1 p-3 border-green-300 pb-3 rounded-lg">
              <div>
                {" "}
                <h1 className=" text-lg font-medium text-green-950">
                  Type 2 Diabetes
                </h1>
                <p className="text-green-950">Olagincesd : jan 200</p>
              </div>
              <div>
                <p className="bg-green-200 text-gray-900 rounded-lg mt-3 px-2 py-1">
                  Monitored
                </p>
              </div>
            </div>

            {/* Parse starting */}
            <div className="flex justify-between  mt-3 border-1 p-3 border-green-300 pb-3 rounded-lg">
              <div>
                {" "}
                <h1 className=" text-lg font-medium text-green-950">
                  Type 2 Diabetes
                </h1>
                <p className="text-green-950">Olagincesd : jan 200</p>
              </div>
              <div>
                <p className="bg-green-200 text-gray-900 rounded-lg mt-3 px-2 py-1">
                  Controlled
                </p>
              </div>
            </div>

            {/* Parse starting */}
            <div className="flex justify-between  mt-3 border-1 p-3 border-green-300 pb-3 rounded-lg">
              <div>
                {" "}
                <h1 className=" text-lg font-medium text-green-950">
                  Type 2 Diabetes
                </h1>
                <p className="text-green-950">Olagincesd : jan 200</p>
              </div>
              <div>
                <p className="bg-green-200 text-gray-900 rounded-lg mt-3 px-2 py-1">
                  Monitored
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
