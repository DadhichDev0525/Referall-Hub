import React from "react";
import Button from "../../../components/Button";

const PlatformSetupStep1 = ({ form, handleChange , onNext }) => {
  return (
    <div className="p-6 md:p-10 space-y-6 max-w-4xl mx-auto h-screen">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Build Your Business Identity
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Help us tailor the referral experience by adding key details about
          your business
        </p>
      </div>

      {/* Form */}
      <form onSubmit={onNext} className="space-y-6 flex flex-col ">
        {/* Logo + Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Logo
          </label>
          <div
            className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100"
          >
            <input type="file" hidden />
            Choose Image
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Description
          </label>
          <textarea
            placeholder="Enter business description..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none "
            rows={3}
          />
        </div>

        {/* Grid Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row 1 */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="business_name"
              value={form?.business_name || ""}
              onChange={handleChange}
              placeholder="Enter business name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="business_email"
              value={form?.business_email || ""}
              onChange={handleChange}
              placeholder="e.g., robert.fox@myemail.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
              required
            />
          </div>

          {/* Row 2 */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Business Phone No. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="business_phno"
              value={form?.business_phno || ""}
              onChange={handleChange}
              placeholder="Enter phone no."
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              name="industry"
              value={form?.industry || ""}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            >
              <option hidden>Select</option>
              <option value="E-commerce">E-commerce</option>
              <option value="SaaS/Software">SaaS/Software</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Fitness & Wellness">Fitness & Wellness</option>
            </select>
          </div>

          {/* Row 3 */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Business Type <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            >
              <option hidden>Select</option>
              <option value="B2C">B2C (Business to Consumer)</option>
              <option value="B2B">B2B (Business to Business)</option>
              <option value="D2C">D2C (Direct to Consumer)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Products <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="products"
              value={form?.products || ""}
              onChange={handleChange}
              placeholder="Enter products..."
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  "
            />
          </div>

          {/* Row 4 */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Company Size <span className="text-red-500">*</span>
            </label>
            <select
              name="company_size"
              value={form?.company_size || ""}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  "
              required
            >
              <option hidden>Select</option>
              <option value="1-10">1–10 employees</option>
              <option value="11-50">11–50 employees</option>
              <option value="51-200">51–200 employees</option>
              <option value="201-500">201–500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">City <span className="text-red-500">*</span></label>
            <select
              name="city"
              value={form?.city || ""}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
              required
            >
              <option hidden>Select</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
              <option value="miami">Miami</option>
              <option value="san-francisco">San Francisco</option>
              <option value="seattle">Seattle</option>
              <option value="boston">Boston</option>
              <option value="atlanta">Atlanta</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Row 5 */}
          <div>
            <label className="text-sm font-medium text-gray-700">State <span className="text-red-500">*</span></label>
            <select
              name="state"
              value={form?.state || ""}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  "
              required
            >
              <option hidden>Select</option>
              <option value="california">California</option>
              <option value="texas">Texas</option>
              <option value="new-york">New York</option>
              <option value="florida">Florida</option>
              <option value="illinois">Illinois</option>
              <option value="georgia">Georgia</option>
              <option value="washington">Washington</option>
              <option value="massachusetts">Massachusetts</option>
              <option value="pennsylvania">Pennsylvania</option>
              <option value="colorado">Colorado</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="zip_code"
              value={form?.zip_code || ""}
              onChange={handleChange}
              required
              placeholder="Enter zip code"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  "
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="pt-4 self-center min-w-sm">
          <Button className="py-2.5 " onClick={onNext}>Next</Button>
        </div>
      </form>
    </div>
  );
};

export default PlatformSetupStep1;
