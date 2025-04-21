import { useState } from "react";
import Papa from "papaparse";

const CsvUploader = () => {
  const [csvData, setCsvData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setCsvData(results.data);
        console.log("Parsed CSV Data:", results.data); // you can remove this
      },
    });
  };

  return (
    <div>
      <label className="block w-full max-w-xs mx-auto my-4 cursor-pointer">
        <div className="flex items-center justify-center w-full px-4 py-3 text-sm text-gray-600 bg-white border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
          <span>📁 Upload CSV File</span>
        </div>
        <input
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {csvData.length > 0 && (
        <div className="mt-4 max-h-64 overflow-y-auto text-sm text-gray-700 border rounded p-2 bg-white">
          <pre>{JSON.stringify(csvData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CsvUploader;
