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
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Reason");

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
    setActiveTab("Reason"); // reset tab when row opens
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
              <th className="py-3"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {visitHistory.map((visit) => (
              <React.Fragment key={visit.id}>
                {/* Main Row */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-2 py-4 text-gray-900">{visit.date}</td>
                  <td className="px-2 py-4 text-gray-900">{visit.provider}</td>
                  <td className="px-2 py-4 text-gray-900">{visit.reason}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => toggleRow(visit.id.toString())}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      {expandedRow === visit.id.toString() ? (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </td>
                </tr>

                {/* Expanded Row */}
                {expandedRow === visit.id.toString() && (
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="px-6 pb-4 w-full">
                      <div className="bg-white rounded-md border border-green-200 p-4 flex gap-4">
                        {/* Vertical Tabs - Left side */}
                        <div className="flex flex-col w-1/4 border-r border-green-200">
                          {["Reason", "Notes", "Medicine", "Tests"].map(
                            (tab) => (
                              <button
                                key={tab}
                                type="button"
                                className={`px-3 py-2 text-sm text-left transition-colors border-l-3 ${
                                  activeTab === tab
                                    ? "border-green-500 text-green-600 bg-green-50 font-medium"
                                    : " text-gray-600 hover:text-green-700 hover:bg-gray-50 border-l-2"
                                }`}
                                onClick={() => setActiveTab(tab)}
                              >
                                {tab}
                              </button>
                            )
                          )}
                        </div>

                        {/* Right side - Content */}
                        <div className="flex-grow pl-4">
                          {activeTab === "Reason" && (
                            <div className="text-sm text-gray-700"></div>
                          )}
                          {activeTab === "Notes" && (
                            <div className="text-sm text-gray-700"></div>
                          )}
                          {activeTab === "Medicine" && (
                            <div className="text-sm text-gray-700"></div>
                          )}
                          {activeTab === "Tests" && (
                            <div className="text-sm text-gray-700"></div>
                          )}

                          {/* Textarea for editing */}
                          <textarea
                            className="w-full h-full mt-3 min-h-[100px] border border-green-200 border-opacity-40 rounded-md p-2 resize-none overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-100"
                            rows={4}
                            placeholder={"Enter here..."}
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
