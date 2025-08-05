import Search from "@/app/components/SearchBar/search";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Search />
      <div className="border-1 border-green-300 rounded-lg p-4 mt-5">
        <h1 className="text-2xl text-green-900">Personal Details</h1>

        <div className="flex gap-10 p-4 bg-white rounded-lg ">
          {/* Left Section - Profile */}
          <div className="min-w-[300px] font-semibold text-gray-700">
            <Image
              src={"/face1.jpg"}
              width={60}
              alt="patient"
              height={60}
              className="w-50 h-50 rounded-full mx-auto"
            />
            <h1 className="text-center text-lg text-green-900 ">
              Jason Perera
            </h1>
            <p className="text-center text-lg text-green-900 font-normal">
              jasonperera123@gmail.com
            </p>
          </div>

          {/* Right Section - Form Details */}
          <div className="space-y-4 w-full">
            <div className="flex gap-8">
              <div className="w-1/2">
                <label className="block font-bold text-green-900">Gender</label>
                <span className="text-green-900 opacity-90">Male</span>
              </div>
              <div className="w-1/2">
                <label className="block font-bold  text-green-900">NIC</label>
                <span className="text-green-900 opacity-90">123456789</span>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-1/2">
                <label className="block font-bold  text-green-900">
                  Date of Birth
                </label>
                <span className="text-green-900 opacity-90">2022-10-20</span>
              </div>
              <div className="w-1/2">
                <label className="block font-bold  text-green-900">
                  Contact Number
                </label>
                <span className="text-green-900 opacity-90">0123456789</span>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-1/2">
                <label className="block font-bold  text-green-900">Age</label>
                <span className="text-green-900 opacity-90">15</span>
              </div>
              <div className="w-1/2">
                <label className="block font-bold  text-green-900">
                  Address
                </label>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-1/2">
                <label className="block font-bold  text-green-900">
                  Married Status
                </label>
                <span className="text-green-900 opacity-90">yes</span>
              </div>
              <div className="w-1/2 -mt-6">
                <div className="border-2 border-green-200 w-[180px] p-2 rounded-lg text-green-900 opacity-90 ">
                  <span>No 27A</span>
                  <br />
                  <span>Uyankele Cross Road</span>
                  <span>Panadura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5  rounded-lg mt-5">
        {/* right Section */}
        <div className="min-w-[480px] font-semibold gap-4 border-2 p-4 border-green-200 rounded-lg">
          <h1 className="text-xl font-bold text-green-900">
            Guardian Details{" "}
          </h1>

          <h5 className="text-lg  text-green-900 mt-5 ">Guardian Details</h5>
          <p className="text-md  opacity-80 text-green-900 ">Lorem ipsum</p>

          <h5 className="text-lg  text-green-900 mt-5">RelationShip</h5>
          <p className="text-md  opacity-80 text-green-900">Parent</p>

          <h5 className="text-lg  text-green-900 mt-5">Contact Number</h5>
          <p className="text-md  opacity-80 text-green-900">0123457689</p>

          <h5 className="text-lg  text-green-900 mt-5">Address</h5>
          <p className="text-md  opacity-80 text-green-900">
            Lorem ipsum dolor
          </p>
          <p className="text-md  opacity-80 text-green-900">Lorem ipsum </p>
          <p className="text-md  opacity-80 text-green-900">Lorem</p>
        </div>

        <div className="min-w-[480px] font-semibold gap-4 border-2 p-4 border-green-200 rounded-lg">
          <h1 className="text-xl font-bold text-green-900 mb-3">
            Medical information{" "}
          </h1>

          <label htmlFor="bloodGroup" className="text-lg text-green-900 ">
            Blood Group
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            className="mt-1 block w-1/2 border rounded px-2 py-1 "
          >
            <option value="A+">A+</option>
            <option value="A-">A−</option>
            <option value="B+">B+</option>
            <option value="B-">B−</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB−</option>
            <option value="O+">O+</option>
            <option value="O-">O−</option>
          </select>

          <div className="flex gap-7 mt-3">
            <div className="flex flex-col">
              <label
                htmlFor="allergies"
                className="mb-1 text-lg font-medium text-green-900"
              >
                Allergies
              </label>
              <textarea
                id="allergies"
                name="allergies"
                className="w-50 h-20 border-2 border-green-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder=""
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="MedicalConditions"
                className="mb-1 text-lg font-medium text-green-900"
              >
                Medical Conditions
              </label>
              <textarea
                id="MedicalConditions"
                name="MedicalConditions"
                className="w-50 h-20 border-2 border-green-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder=""
              />
            </div>
          </div>

          <div className="mt-2">
            <label
              htmlFor="remarks"
              className="mb-1 text-lg font-medium text-green-900"
            >
              Remarks
            </label>
            <textarea
              id="remarks"
              name="remarks"
              className="w-107 h-20 border-2 border-green-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
