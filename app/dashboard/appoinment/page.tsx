"use client";
import React, { useState } from "react";
import Search from "@/app/components/SearchBar/search";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FaRegCalendar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import RequestAppointmentSheet from "@/app/components/AppoinmentsComponents/AppoinmentSheet/RequestAppointmentSheet";

interface Upcoming {
  id: number;
  provider: string;
  position?: string;
  department: string;
  date: string;
  time: string;
  appointmentType: string;
  reason: string;
}
const upcomingData: Upcoming[] = [
  {
    id: 1,
    provider: "Dr. Sarah Wilson",
    position: "Primary Care Physician",
    department: "Internal Medicine",
    date: "June 15, 2024",
    time: "09:00 AM",
    appointmentType: "In-Person",
    reason: "",
  },
  {
    id: 2,
    provider: "Dr. Sarah Wilson",
    position: "Primary Care Physician",
    department: "Internal Medicine",
    date: "June 15, 2024",
    time: "09:00 AM",
    appointmentType: "In-Person",
    reason: "",
  },
  {
    id: 3,
    provider: "Dr. Sarah Wilson",
    position: "Primary Care Physician",
    department: "Internal Medicine",
    date: "June 15, 2024",
    time: "09:00 AM",
    appointmentType: "In-Person",
    reason: "",
  },
  {
    id: 4,
    provider: "Dr. Sarah Wilson",
    position: "Primary Care Physician",
    department: "Internal Medicine",
    date: "June 15, 2024",
    time: "09:00 AM",
    appointmentType: "In-Person",
    reason: "",
  },
  {
    id: 5,
    provider: "Dr. Sarah Wilson",
    position: "Primary Care Physician",
    department: "Internal Medicine",
    date: "June 15, 2024",
    time: "09:00 AM",
    appointmentType: "In-Person",
    reason: "",
  },
  {
    id: 6,
    provider: "Dr. Sarah Wilson",
    position: "Primary Care Physician",
    department: "Internal Medicine",
    date: "June 15, 2024",
    time: "09:00 AM",
    appointmentType: "In-Person",
    reason: "",
  },
  {
    id: 7,
    provider: "Dr. Sarah Wilson",
    position: "Primary Care Physician",
    department: "Internal Medicine",
    date: "June 15, 2024",
    time: "09:00 AM",
    appointmentType: "In-Person",
    reason: "",
  },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("Upcoming (3)");
  const [provider, setProvider] = useState<string>("All Providers");
  const [department, setDepartment] = useState<string>("All Departments");
  const [date, setDate] = useState<string>("mm/dd/yyyy ");
  const tabs = ["Upcoming (3)", "Complete (3)", "Cancelled (3)", "Request (3)"];
  const [expandedRow, setExpandedRow] = useState<string | null>("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div>
      <Search />
      <div className="flex gap-5 mt-4">
        {/* Provider Dropdown */}
        <select
          aria-label="Select Provider"
          value={provider}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setProvider(e.target.value)
          }
          className="border border-gray-300 rounded-md p-2 w-[20%]"
        >
          <option value="all">All Provider</option>
          <option value="upcoming">Upcoming Appointments</option>
          <option value="past">Past Appointments</option>
          <option value="allAppointments">All Appointments</option>
        </select>

        {/* Appointment Dropdown */}
        <select
          aria-label="Select Provider"
          value={department}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDepartment(e.target.value)
          }
          className="border border-gray-300 rounded-md p-2 w-[20%]"
        >
          <option value="all">All Department</option>
          <option value="upcoming">Upcoming Appointments</option>
          <option value="past">Past Appointments</option>
          <option value="allAppointments">All Appointments</option>
        </select>

        {/* Status Dropdown */}
        <select
          aria-label="Select Provider"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDate(e.target.value)
          }
          className="border border-gray-300 rounded-md p-2 w-[20%]"
        >
          <option value="all">mm/dd/yyyy</option>
          <option value="upcoming">Upcoming Appointments</option>
          <option value="past">Past Appointments</option>
          <option value="allAppointments">All Appointments</option>
        </select>

        <div className="flex gap-5 mt-4">
          <button type="button"
            onClick={() => setIsOpen(true)}
            className="bg-green-700 ml-30 text-white font-semibold py-2 px-4 rounded flex items-center gap-2"
          >
            + Request Appointment
          </button>
        </div>
      </div>
      <div>
        {/* Tabs */}
        <div className="mt-4 border-b-2 border-gray-300">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "border-b-3 border-green-500 text-green-600"
                    : "text-gray-500 hover:text-gray-700  "
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table Show */}
        <div className="mt-2 text-green-900">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-100">
                <th className="py-2 px-2 font-medium">Data & Time</th>
                <th className="py-2 px-2 font-medium">Provider</th>
                <th className="py-2 px-2 font-medium">Department</th>
                <th className="py-2 px-2 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {upcomingData.map((upcoming) => (
                <React.Fragment key={upcoming.id}>
                  <tr className="border-b border-gray-300 ">
                    <td className="py-2 px-2">
                      {upcoming.date} <br />
                      <span className="text-sm text-gray-600">
                        {upcoming.time}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      {upcoming.provider} <br />
                      <span className="text-sm text-gray-600">
                        {upcoming.position}
                      </span>
                    </td>
                    <td className="py-2 px-2 text-sm">{upcoming.department}</td>
                    <td className="flex justify-end items-center py-2 mt-4 px-2 text-sm">
                      <span className="pr-4 cursor-pointer text-green-600 hover:text-green-800 flex items-center gap-1">
                        <FaRegCalendar />
                        Reschedule
                      </span>
                      <span className="pr-2 cursor-pointer text-red-600 hover:text-red-800 flex items-center gap-1">
                        <IoMdClose />
                        Cancel
                      </span>
                      <span
                        className="pl-2"
                        onClick={() => toggleRow(upcoming.id.toString())}
                      >
                        {expandedRow === upcoming.id.toString() ? (
                          <ChevronDown className="w-4 h-4 text-gray-600 inline" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-600 inline" />
                        )}
                      </span>
                    </td>
                  </tr>
                  {expandedRow === upcoming.id.toString() && (
                    <tr className="bg-green-50 border border-green-200 border-opacity-40">
                      <td colSpan={4} className="p-4 text-sm">
                        <div className="flex items-start space-x-3">
                          {/* Left Divider */}
                          <div className="border-l border-green-100 border-opacity-50 h-full"></div>

                          {/* Content */}
                          <div className="flex flex-col w-full space-y-4">
                            {/* Appointment Type Row */}
                            <div className="flex items-center gap-4">
                              <p className="font-semibold text-green-900 w-40">
                                Appointment Type :
                              </p>
                              <span className="text-gray-700">
                                {upcoming.appointmentType}
                              </span>
                            </div>

                            {/* Notes Row */}
                            <div className="flex items-start gap-4">
                              <p className="font-semibold text-green-900 w-40">
                                Reason for Visit :
                              </p>
                              <textarea
                                className="flex-1 border border-green-200 border-opacity-40 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md"
                                rows={3}
                                placeholder="Enter notes here..."
                                value={upcoming.reason}
                                onChange={() => {}}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <RequestAppointmentSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Page;
