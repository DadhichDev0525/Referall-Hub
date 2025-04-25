import React from 'react'
import Button from '../../../components/Button';

const PlatformSetupStep2 = ({onNext}) => {
  return (
    <div className="flex flex-col items-center  p-6  w-full max-w-3xl mx-auto">
  <h2 className="text-xl font-semibold text-center mb-12">Import Customer Data: Sync with Zapier or Upload CSV</h2>

  <button className="max-w-sm w-full border border-[#305AFA] text-[#305AFA] py-2 rounded-md font-medium hover:bg-[#305AFA]/10 transition">
    Connect with Zapier
  </button>

  <div className="flex items-center my-4">
    <span className="mx-2 text-sm text-gray-500">or</span>
  </div>

  <div className="border-2 border-dashed border-[#305AFA]/80 rounded-md py-10 px-4 text-center text-gray-500 w-3/4">
    <div className="text-4xl mb-2">📤</div>
    <p>Drag and drop files here</p>
    <p className="my-2 text-sm text-gray-500">or</p>
    <label className="inline-block bg-white border border-[#305AFA] text-[#305AFA] font-medium py-2 px-4 rounded-md cursor-pointer hover:bg-[#305AFA]/10 transition">
      Click to Upload CSV File
      <input type="file" accept=".csv" className="hidden" />
    </label>
  </div>

  <Button className="py-2.5 max-w-sm mt-10" onClick={onNext}>
    Next
  </Button>
</div>

  )
}

export default PlatformSetupStep2;