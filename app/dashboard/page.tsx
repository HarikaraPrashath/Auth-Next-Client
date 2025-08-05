import React from "react";
import { HiMiniBell } from "react-icons/hi2";
import NextAppointmet from "../components/Calendar/Calender";
import { GrDocumentPdf } from "react-icons/gr";
import { RiDownload2Line } from "react-icons/ri";
import BloodPressureCard from "../components/Charts/BloodPresure";
import HeartRateCard from "../components/Charts/HeartRate";
import Temper from "../components/Charts/Temp";
import Pills from "../components/Pills/Pills";
import Search from "../components/SearchBar/search";

const Dashboard = () => {
  return (
    <div>
      <Search />

      <div className="w-full h-15 rounded-xl border-1 mx-4 my-3 mt-7 border-green-200 text-green-950">
        <p className="p-4 text-center flex items-center justify-center gap-2">
          <HiMiniBell className="text-xl text-green-700" />
          <span>
            Important Notice: Please adhere to all COVID-19 safety protocols
            while in the hospital...
          </span>
        </p>
      </div>
      {/* Body content goes here */}
      <div className="flex justify-between items-start mt-6 mx-4">
        {/* Cards Section */}
        <div>
          <div className="flex gap-5 flex-wrap">
            <div className="w-[220px] border-1 border-green-200 rounded-xl ">
              <BloodPressureCard />
            </div>
            <div className="w-[220px] border-1 border-green-200 rounded-xl ">
              <HeartRateCard />
            </div>
            <div className="w-[220px] border-1 border-green-200 rounded-xl ">
              <Temper />
            </div>
          </div>

          <div className=" mt-3 h-min-20 w-full gap-3  rounded-xl flex  ">
            <div className="border-2 border-green-200   flex-1/2 rounded-lg p-2">
              <h1 className="text-lg text-green-950 ml-3 mt-3 ">Lab Results</h1>

              <div className="flex items-center mt-2 justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950 ">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>
              <div className="flex items-center mt-3  justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950 ">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>
              <div className="flex items-center mt-3  justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950 ">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>

              <div className="border-t border-green-950 mt-12 mx-4 pt-1 text-xs text-green-500 flex justify-center">
                <p className="cursor-pointer text-center">View All Report</p>
              </div>
            </div>
            <div className="border-2 border-green-200 flex-1/2 border-opacity-40 rounded-lg p-2">
              <h1 className="text-lg text-green-950 ml-3 mt-3">Documents</h1>

              <div className="flex items-center mt-2 justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950 ">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>

              <div className="flex items-center mt-3 justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950 ">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>

              <div className="flex items-center mt-3 justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>

              <div className="border-t border-green-950 mt-12 mx-4 pt-1 text-xs text-green-500 flex justify-center">
                <p className="cursor-pointer text-center">View All Document</p>
              </div>
            </div>
          </div>
          <div className=" w-[700px] border-2 border-green-200 h-[275px] mt-3 rounded-lg p-5 ">
            <h1>Visits History (5)</h1>
            <div className="flex justify-between mt-3 mx-4 text-xs font-semibold text-green-950">
              <div>Data</div>
              <div>Reason</div>
              <div>Doctor</div>
            </div>
            <div className="flex justify-between mt-2 pt-2 border-t-1  border-black text-xs font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>

            <div className="flex justify-between mt-3 text-xs font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>
            <div className="flex justify-between mt-3  text-xs font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>

            <div className="flex justify-between mt-3 text-xs font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>
            <div className="flex justify-between mt-3  text-xs font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>

            <div className="flex justify-between mt-3  text-xs  font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>
          </div>
        </div>

        {/* Optional Right Section (if needed) */}
        <div>
          <div className="border-2 border-gray-200 rounded-lg ml-2  w-[300px]">
            <NextAppointmet />
          </div>
          <div className="border-2 border-gray-200 rounded-lg mt-3 ml-2 w-[335px]">
            <Pills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
