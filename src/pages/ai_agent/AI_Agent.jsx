import AIAssistant from "../../components/AiBot"
import Navbar from "../../components/Navbar"
import { useState, useRef, useEffect } from 'react';
import { IoMdSend, IoIosLink } from "react-icons/io";
import { MdLoop } from "react-icons/md";

const AI_Agent = () => {
  
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const initialMessageSent = useRef(false);

  // Initial message from AI
  useEffect(() => {
    if (!initialMessageSent.current) {
      setTimeout(() => {
        addMessage("Welcome Back, John! How can I help you today?", "ai");
      }, 500);
      initialMessageSent.current = true;
    }
  }, [])

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (content, sender) => {
    setMessages(prevMessages => [...prevMessages, { content, sender, id: Date.now() }]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    addMessage(inputValue, "user");
    setInputValue('');
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      setIsTyping(false);
      addMessage(getAIResponse(inputValue), "ai");
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setTimeout(() => {
      addMessage("Welcome Back, John! How can I help you today?", "ai");
    }, 500);
  };

  const getAIResponse = (userMessage) => {
    const responses = [
      "I'd be happy to help you with that! Could you provide more details?",
      "That's a great question. Let me guide you through the process.",
      "I understand what you need. Here's my suggestion...",
      "I'll help you create a strategy for that. Let's start by defining your goals.",
      "Thanks for sharing. Based on what you've told me, here's what I recommend."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleQuickLink = (linkText) => {
    addMessage(`I want to ${linkText.toLowerCase()}`, "user");
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      if (linkText === "CREATE CAMPAIGN") {
        addMessage("Great! Let's create a campaign. What type of campaign are you looking to set up?", "ai");
      } else if (linkText === "VIEW INSIGHTS") {
        addMessage("Here's a summary of your recent campaign performance. Would you like to see more detailed analytics?", "ai");
      } else if (linkText === "FOLLOW UP") {
        addMessage("I can help you create follow-up messages for your campaign. Would you like me to suggest some templates?", "ai");
      } else if (linkText === "VIEW REFERRALS") {
        addMessage("Here's a summary of your referral program performance. You've received 12 referrals this month.", "ai");
      }
    }, 1500);
  };

  const campaignSummary = (
    <div className=" rounded-lg p-4 my-2 w-full">
      <ul className="list-disc pl-6 space-y-1 bg-purple-50 p-3 text-sm">
        <li><span className="font-semibold">Goal:</span> Increase sales</li>
        <li><span className="font-semibold">Reward:</span> 15% discount on the next purchase</li>
        <li><span className="font-semibold">Condition:</span> Reward is given when the referred person makes a purchase</li>
        <li><span className="font-semibold">Duration:</span> 3 months</li>
      </ul>
      <div className="flex mt-4 space-x-2">
        <button className="flex-1 border border-[#305AFA] text-[#305AFA] py-2 rounded hover:bg-[#305AFA]/10 transition-colors">
          Edit
        </button>
        <button className="flex-1 border border-[#305AFA] text-[#305AFA]  py-2 rounded hover:bg-[#305AFA]/10 transition-colors">
          Launch
        </button>
      </div>
    </div>
  );

  return (
    <div>
    <Navbar title = 'Ai Agent' />
     <div className='p-4 m-6 bg-white shadow rounded-lg'>
    <div className="flex flex-col h-screen rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 shadow">
        <div className="flex items-center gap-2">
            <img src="/assets/navIcons/Ai_Agent.png" alt='AI Icon' />
          <span className="font-medium">AI Agent</span>
        </div>
        <button onClick={resetChat} className="flex items-center text-gray-500 hover:text-gray-700">
          <MdLoop size={16} className="mr-1" />
          <span className="text-sm">Reset</span>
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-scroll scroll-on-hover p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
          >
            {message.sender === 'ai' && (
              <div className="bg-white shadow-lg rounded-full p-1.5 mr-2 h-8 w-8 flex-shrink-0">
                <img src="/assets/navIcons/Ai_Agent.png" alt='AI Icon' />
              </div>
            )}
            
            <div 
              className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                message.sender === 'user' 
                  ? 'bg-[#F8F8F8] text-right' 
                  : 'bg-gradient-to-r from-[#CCD7E9] to-[#DDDBE8]'
              }`}
            >
              {message.content.includes("Here's a summary of your recent campaign performance") ? (
                <>
                  <p>Got it! Here's a quick summary of your campaign:</p>
                  {campaignSummary}
                </>
              ) : (
                <p className="text-sm">{message.content}</p>
              )}
            </div>
            
            {message.sender === 'user' && (
              <div className="bg-gray-400 rounded-full p-1 ml-2 h-8 w-8 flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-xs">J</span>
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-fadeIn">
            <div className="bg-white shadow-lg rounded-full p-1.5 mr-2 h-8 w-8 flex-shrink-0">
                <img src="/assets/navIcons/Ai_Agent.png" alt='AI Icon' />
              </div>
            <div className="bg-gradient-to-r from-[#CCD7E9] to-[#DDDBE8] rounded-lg p-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="border-t border-[#CCCCCC] p-4">
      <div className="mt-4">
          <p className="font-medium text-[#1C1C1C] mb-2">Quick Links</p>
          <div className="flex flex-col md:flex-row justify-between gap-2">
            {['CREATE CAMPAIGN', 'VIEW INSIGHTS', 'FOLLOW UP', 'VIEW REFERRALS'].map((link) => (
              <button 
              key={link}
              onClick={() => handleQuickLink(link)}
              className="flex items-center justify-center rounded-lg max-w-xs w-full py-2 px-3 text-xs font-medium border border-[#305AFF] text-[#305AFF] hover:bg-[#305AFF]/10 transition-colors"
            >
              <IoIosLink  size={14} className="mr-1" />
              {link}
            </button>
            ))}
          </div>
        </div>
        <div className="flex items-center bg-[#FAFAFA] rounded p-3 mt-3">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <button 
            onClick={handleSendMessage}
            disabled={inputValue.trim() === ''}
            className={`ml-2 p-1 text-[#305AFF] `}
          >
            <IoMdSend size={25} />
          </button>
        </div>
      </div>
      
      
    </div>
      </div>
     </div>
  )
}

export default AI_Agent