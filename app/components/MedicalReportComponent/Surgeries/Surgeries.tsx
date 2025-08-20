"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type Surgery = {
  id: string;
  date: string;
  surgeon: string;
  surgeryType: string;
  operatingRoom: string;
  instructions?: string;
  notes?: string;
  reason?: string;
};

const surgeries: Surgery[] = [
  {
    id: "1",
    date: "May 15, 2025",
    surgeon: "Dr Smith",
    surgeryType: "Cardiac Surgery",
    operatingRoom: "OR-3",
    instructions: "Pre-operative fasting required",
    notes: "Patient has history of hypertension",
    reason: "Coronary artery bypass",
  },
  {
    id: "2",
    date: "May 15, 2025",
    surgeon: "Dr Smith",
    surgeryType: "Cardiac Surgery",
    operatingRoom: "OR-3",
  },
  {
    id: "3",
    date: "May 15, 2025",
    surgeon: "Dr Smith",
    surgeryType: "Cardiac Surgery",
    operatingRoom: "OR-3",
  },
];

const Surgeries = () => {
  const [activeTab, setActiveTab] = useState("Today");
  const [expandedRow, setExpandedRow] = useState<string | null>("");
  const tabs = ["Today", "Upcoming", "Completed"];

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div>
      <h1 className="text-green-950 text-xl">Surgeries</h1>
      {/* Tabs */}
      <div className="mt-4">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-green-500 text-green-600"
                  : "text-gray-500 hover:text-gray-700  "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 px-6 py-3 border-t-3 border-gray-200">
          <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-600">
            <div>Date & Time</div>
            <div>Surgeon</div>
            <div>Surgery Type</div>
            <div>Ops. Room</div>
          </div>
        </div>

        {/* Surgery Rows */}
        <div className="">
          {surgeries.map((surgery) => (
            <div key={surgery.id}>
              {/* Main Row */}
              <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">
                      {surgery.date}
                    </span>
                  </div>
                  <div className="text-sm text-gray-900">{surgery.surgeon}</div>
                  <div className="text-sm text-gray-900">
                    {surgery.surgeryType}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900">
                      {surgery.operatingRoom}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleRow(surgery.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      {expandedRow === surgery.id ? (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedRow === surgery.id && (
                <div className="px-6 pb-4 bg-gray-50">
                  <div className="bg-white rounded-md border border-green-200 p-4 flex gap-4">
                    {/* Left side - Info */}
                    <div className="flex flex-col space-y-2 w-1/3">
                      {surgery.instructions && (
                        <div className="text-sm text-gray-700">
                          <span className="font-semibold text-green-600">
                            Instructions:
                          </span>{" "}
                        </div>
                      )}
                      {surgery.notes && (
                        <div className="text-sm text-gray-700">
                          <span className="font-semibold text-green-600">
                            Notes:
                          </span>{" "}
                        </div>
                      )}
                      {surgery.reason && (
                        <div className="text-sm text-gray-700">
                          <span className="font-semibold text-green-600">
                            Reason:
                          </span>{" "}
                        </div>
                      )}
                    </div>

                    {/* Right side - Textarea */}
                    <div className="flex-grow">
                      <textarea
                        className="w-full h-full min-h-[100px] border border-green-200 border-opacity-40 rounded-md p-2 resize-none overflow-y-auto max-h-40
                scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-100"
                        rows={4}
                        placeholder="Enter surgery notes here..."
                        onChange={() => {}}
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Surgeries;
