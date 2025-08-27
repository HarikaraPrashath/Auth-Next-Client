"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

interface RequestAppointmentSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestAppointmentSheet: React.FC<RequestAppointmentSheetProps> = ({
  isOpen,
  onClose,
}) => {
  const [doctor, setDoctor] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [visit, setVisit] = useState<string>("");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-opacity-50 flex justify-end items-center "
        >
          <motion.div
            key="sheet"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white w-full h-screen max-w-md p-6 shadow-2xl relative animated-slide-in-right"
          >
            <h1 className="text-xl">Request New Appointment</h1>
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              title="Close"
              aria-label="Close"
            >
              <IoMdClose size={24} />
            </button>
            {/* Form Content */}
            <form className="mt-6 space-y-4">
              {/* Appointment Dropdown */}
              <label htmlFor="doctor-select" className="block mb-2">
                select Provider
              </label>
              <select
                id="doctor-select"
                value={doctor}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setDoctor(e.target.value)
                }
                className="border border-gray-300 rounded-md p-2 w-[100%]"
              >
                <option value="Dr. Sarah Wilson (Primary Care Physician)">
                  Dr. Sarah Wilson (Primary Care Physician)
                </option>
                <option value="upcoming">Upcoming Appointments</option>
                <option value="past">Past Appointments</option>
                <option value="allAppointments">All Appointments</option>
              </select>

              {/* Department Dropdown */}
              <label htmlFor="department-select" className="block mb-2">
                Department
              </label>
              <select
                id="department-select"
                value={department}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setDepartment(e.target.value)
                }
                className="border border-gray-300 rounded-md p-2 w-[100%]"
              >
                <option value="Internal Medicine">Internal Medicine</option>
                <option value="upcoming">Upcoming Appointments</option>
                <option value="past">Past Appointments</option>
                <option value="allAppointments">All Appointments</option>
              </select>

              {/* Appointment Type Dropdown */}
              <label htmlFor="type-select" className="block mb-2">
                Appointment Type
              </label>
              <select
                id="type-select"
                value={type}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setType(e.target.value)
                }
                className="border border-gray-300 rounded-md p-2 w-[100%]"
              >
                <option value="In-Person">In-Person</option>
                <option value="upcoming">Upcoming Appointments</option>
                <option value="past">Past Appointments</option>
                <option value="allAppointments">All Appointments</option>
              </select>

              {/* Preferred Date Dropdown */}
              <label htmlFor="date-select" className="block mb-2">
                Preferred Date
              </label>
              <select
                id="date-select"
                value={date}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setDate(e.target.value)
                }
                className="border border-gray-300 rounded-md p-2 w-[100%]"
              >
                <option value="mm/dd/yyyy">mm/dd/yyyy</option>
                <option value="upcoming">Upcoming Appointments</option>
                <option value="past">Past Appointments</option>
                <option value="allAppointments">All Appointments</option>
              </select>

              {/* Preferred Time Dropdown */}
              <label htmlFor="time-select" className="block mb-2">
                Preferred Time
              </label>
              <select
                id="time-select"
                value={time}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setTime(e.target.value)
                }
                className="border border-gray-300 rounded-md p-2 w-[100%]"
              >
                <option value="Morning (9:00AM - 12:00PM)">
                  Morning (9:00AM - 12:00PM)
                </option>
                <option value="upcoming">Upcoming Appointments</option>
                <option value="past">Past Appointments</option>
                <option value="allAppointments">All Appointments</option>
              </select>

              {/* Reason for Visit */}
              <label htmlFor="reason" className="block mb-2">
                Reason for Visit
              </label>
              <textarea
                className="flex-1 border-1 w-[100%] p-2 text-gray-700 border-gray-500 rounded-md"
                rows={3}
                placeholder="Enter the reason here..."
                value={visit}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setVisit(e.target.value)
                }
              ></textarea>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="submit"
                  className=" text-green-700 border-1 border-green-700 px-4 py-2 rounded-md"
                  title="cancel Appointment Request"
                >
                  Cancel
                </button>
                <button
                  type="reset"
                  className=" text-white bg-green-700 px-4 py-2 rounded-md"
                  title="Submit Appointment Request"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RequestAppointmentSheet;
