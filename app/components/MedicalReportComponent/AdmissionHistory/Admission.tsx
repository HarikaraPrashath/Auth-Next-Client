"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface Admission {
  id: number;
  department: string;
  period: string;
  status: "Active" | "Discharged";
  doctor: string;
  notes?: string;
}
const admissionsData: Admission[] = [
  {
    id: 1,
    department: "Cardiology",
    period: "May 10, 2025 - May 14, 2025",
    status: "Discharged",
    doctor: "Dr. Loram Ipsum",
    notes: "",
  },
  {
    id: 2,
    department: "Internal Medicine",
    period: "May 10, 2025",
    status: "Active",
    doctor: "Dr. Loram Ipsum",
    notes: "",
  },
];

const Admission = () => {
  const [expandedRow, setExpandedRow] = useState<string | null>("");
  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  return (
    <div>
      <h1 className="text-xl text-green-950">Admission History</h1>
      {/* Table starting */}
      <div className="mt-2 text-green-900">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-100">
              <th className="py-2 px-2 font-medium">Department</th>
              <th className="py-2 px-2 font-medium">Admission Period</th>
              <th className="py-2 px-2 font-medium">Status</th>
              <th className="py-2 px-2 font-medium">Attending Doctor</th>
            </tr>
          </thead>
          <tbody>
            {admissionsData.map((admission) => (
              <React.Fragment key={admission.id}>
                <tr>
                  <td className="py-2 px-2 font-medium">
                    {admission.department}
                  </td>
                  <td className="py-2 px-2">{admission.period}</td>
                  <td className="py-2 px-2 text-sm">
                    <span
                      className={`rounded-lg px-2 py-1 ${
                        admission.status === "Active"
                          ? "bg-green-200 text-gray-900"
                          : "bg-green-200 text-gray-800"
                      }`}
                    >
                      {admission.status}
                    </span>
                  </td>
                  <td
                    className="py-2 px-2 font-medium cursor-pointer text-green-700"
                    onClick={() => toggleRow(admission.id.toString())}
                  >
                    {admission.doctor}{" "}
                    <span className="pl-2">
                      {expandedRow === admission.id.toString() ? (
                        <ChevronDown className="w-4 h-4 text-gray-600 inline" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-600 inline" />
                      )}
                    </span>
                  </td>
                </tr>
                {expandedRow === admission.id.toString() && (
                  <tr className="bg-green-50 border border-green-200 border-opacity-40">
                    <td colSpan={4} className="p-4 text-sm">
                      <div className="flex items-start space-x-3">
                        {/* Left Divider */}
                        <div className="border-l border-green-100 border-opacity-50 h-[20px]"></div>

                        {/* Label */}
                        <p className="font-semibold text-green-900 w-20">
                          Notes
                        </p>

                        {/* Textarea */}
                        <textarea
                          className="w-full border border-green-200 border-opacity-40 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                          rows={4}
                          placeholder="Enter notes here..."
                          value={admission.notes}
                          onChange={() => {}}
                        ></textarea>
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
  );
};

export default Admission;
