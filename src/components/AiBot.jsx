import { RxCross1 } from "react-icons/rx";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";

const suggestions = [
  "Would you like to see today’s insights for boosting referrals?",
  "Check out today’s AI Insights",
  "Optimize your referral strategy",
  "View performance metrics",
  "Schedule a strategy call",
];

const AIAssistant = ({closeChat}) => {
  const [message, setMessage] = useState("");
  return (
    <div className="w-[350px] rounded-2xl shadow-xl border border-gray-200 overflow-hidden bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 shadow">
        <div className="flex items-center gap-3">
            <img
              src="/assets/Chatbot_Icon.png" 
              alt="AI Icon"
              className="w-9"
            />
          <div>
            <h3 className="font-semibold text-sm">AI Assistant</h3>
            <p className="text-xs text-gray-500 -mt-1">Dashboard Support</p>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-full"
          onClick={closeChat}
        >
          <RxCross1 className="text-gray-500" />
          </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        { suggestions.map((suggestion, index) => (
          <button 
          key={index} 
          onClick={() => setMessage(suggestion)}
          className="w-full text-sm text-[#696969] font-medium py-2 rounded-md bg-gradient-to-r from-[#CCD7E9] to-[#DDDBE8] hover:brightness-95">
            {suggestion}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-[#E6E6E6] flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 text-sm p-2  outline-none"
        />
        <button 
        onClick={() => {
            if (message) {
              setMessage("");
            }
          }}
          disabled={!message}
          className="ml-2 text-[#305AFF] cursor-pointer pt-1.5">
          <IoMdSend className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
