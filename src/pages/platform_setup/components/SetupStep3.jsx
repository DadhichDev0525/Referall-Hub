import React from "react";
import Button from "../../../components/Button";

const PlatformSetupStep3 = ({ form, handleChange, onNext }) => {
  return (
    <div className=" p-6 w-full max-w-xl mx-auto">
      <h2 className="text-lg font-semibold text-center my-12">
        Set Up AI Agent Rules
      </h2>

      {/* Tone of Communication */}
      <div className="p-4">
        <label className="block text-gray-700 mb-1">
          Tone of Communication <span className="text-red-500">*</span>
        </label>
        <select
          name="tone_of_communication"
          value={form?.tone_of_communication || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        >
          <option value="" hidden>
            Select
          </option>
          <option value="friendly">Friendly</option>
          <option value="professional">Professional</option>
          <option value="motivational">Motivational</option>
          <option value="casual">Casual</option>
        </select>
      </div>

      {/* Response Style */}
      <div className="p-4">
        <label className="block text-gray-700 mb-1">Response Style <span className="text-red-500">*</span></label>
        <select
          name="response_style"
          value={form?.response_style || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        >
          <option value="" hidden>Select</option>
          <option value="concise">Concise</option>
          <option value="detailed">Detailed</option>
          <option value="step-by-step">Step-by-Step</option>
        </select>
      </div>

      {/* Toggle: Auto-offer help */}
      <div className="flex items-center justify-between mb-3 p-4">
        <div>
          <p className="text-sm font-medium text-gray-700">Auto-offer help</p>
          <p className="text-xs text-gray-500">
            AI pops up suggestions automatically when user lands on a page.
          </p>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />

          <div
            className="w-11 h-6 flex items-center px-1 border rounded-full transition-all 
                  peer-checked:justify-end peer-checked:border-[#305AFA]"
          >
            <div
              className="w-4 h-4 border rounded-full transition-all  border-[#305AFA] bg-white"
            />
          </div>
        </label>
      </div>

      {/* Toggle: User-initiated only */}
      <div className="flex items-center justify-between mb-6 p-4">
        <div>
          <p className="text-sm font-medium text-gray-700">
            User-initiated only
          </p>
          <p className="text-xs text-gray-500">
            AI only responds when clicked or messaged.
          </p>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />

          <div
            className="w-11 h-6 flex items-center px-1 border rounded-full transition-all 
                  peer-checked:justify-end peer-checked:border-[#305AFA]"
          >
            <div
              className="w-4 h-4 border rounded-full transition-all  border-[#305AFA] bg-white"
            />
          </div>
        </label>
      </div>

      <div className="flex justify-center">
      <Button className="py-2.5 max-w-sm" onClick={onNext}>Next</Button>
      </div>
     
    </div>
  );
};

export default PlatformSetupStep3;
