"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface History {
  id: number;
  date: string;
  provider: string;
  reason: string;
  notes?: string;
  medicine?: string;
  tests?: string;
  re?: string;
}

const visitHistory: History[] = [
  {
    id: 1,
    date: "May 10, 2025",
    provider: "Dr. Smith",
    reason: "Loream Ipsum Dolor Sit Amet Consectetur...",
    notes: "Follow-up required in 2 weeks",
    medicine: "Metformin 500mg",
    tests: "Blood sugar test",
    re: "Routine check-up",
  },
  {
    id: 2,
    date: "May 12, 2025",
    provider: "Dr. Smith",
    reason: "Loream Ipsum Dolor Sit Amet Consectetur...",
    notes: "Follow-up required in 2 weeks",
    medicine: "Metformin 500mg",
    tests: "Blood sugar test",
    re: "Routine check-up",
  },
];

const VisitHistory = () => {
  const [activeTab, setActiveTab] = useState("Today");
  const [expandedRow, setExpandedRow] = useState<string | null>("");

  const tabs = ["Today", "Upcoming", "Completed"];

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div>
      <h1 className="text-green-950 text-xl">Visit History</h1>

      <div className="border mt-2 border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full table-auto text-sm">
          {/* Table Head */}
          <thead className="bg-green-100 text-gray-600 font-medium">
            <tr>
              <th className="px-2 py-3 text-left">Date</th>
              <th className="px-2 py-3 text-left">Provider</th>
              <th className="px-2 py-3 text-left">Reason</th>
              <th className=" py-3"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {visitHistory.map((visitHistory) => (
              <React.Fragment key={visitHistory.id}>
                {/* Main Row */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-2 py-4 text-gray-900">
                    {visitHistory.date}
                  </td>
                  <td className="px-2 py-4 text-gray-900">
                    {visitHistory.provider}
                  </td>
                  <td className="px-2 py-4 text-gray-900">
                    {visitHistory.reason}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => toggleRow(visitHistory.id.toString())}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      {expandedRow === visitHistory.id.toString() ? (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </td>
                </tr>

                {/* Expanded Row */}
                {expandedRow === visitHistory.id.toString() && (
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="px-6 pb-4 w-full">
                      <div className="bg-white rounded-md border border-green-200 p-4 flex gap-4">
                        {/* Left side - Info */}
                        <div className="flex flex-col space-y-2 w-1/3">
                          {visitHistory.re && (
                            <div className="text-sm text-gray-700">
                              <span className="font-semibold text-green-600">
                                Reason:
                              </span>{" "}
                            </div>
                          )}
                          {visitHistory.notes && (
                            <div className="text-sm text-gray-700">
                              <span className="font-semibold text-green-600">
                                Notes:
                              </span>{" "}
                            </div>
                          )}
                          {visitHistory.medicine && (
                            <div className="text-sm text-gray-700">
                              <span className="font-semibold text-green-600">
                                Medicine:
                              </span>{" "}
                            </div>
                          )}
                          {visitHistory.tests && (
                            <div className="text-sm text-gray-700">
                              <span className="font-semibold text-green-600">
                                Tests:
                              </span>{" "}
                            </div>
                          )}
                        </div>

                        {/* Right side - Textarea */}
                        <div className="flex-grow">
                          <textarea
                            className="w-full h-full min-h-[100px] border border-green-200 border-opacity-40 rounded-md p-2 resize-none overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-100"
                            rows={4}
                            placeholder="Enter notes here..."
                            onChange={() => {}}
                          ></textarea>
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
  );
};

export default VisitHistory;
