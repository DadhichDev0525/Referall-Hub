import { useState } from 'react';
import { FaCheck,FaRegCircleDot } from "react-icons/fa6";
import PlatformSetupStep4 from './SetupStep4';
import PlatformSetupStep1 from './SetupStep1';
import PlatformSetupStep2 from './SetupStep2';
import PlatformSetupStep3 from './SetupStep3';

export default function SetupSteps() {
  // Track step progress
  const [currentStep, setCurrentStep] = useState(0); 
  const [completedSteps, setCompletedSteps] = useState( []); 
  const [form,setForm] = useState({})
  const handleChange = (e)=>{
    setForm(prev=>({
      ...prev,
      [e.target.name] : e.target.value
    }))
}

  const steps = [
    {
      id: 0,
      title: 'Set Up Business Profile',
      formComponent: <PlatformSetupStep1 onNext={completeCurrentStep} form={form} handleChange={handleChange} />,
    },
    {
      id: 1,
      title: 'Sync Your Customer Data',
      formComponent: <PlatformSetupStep2 onNext={completeCurrentStep}  />,
    },
    {
      id: 2,
      title: 'Set Up AI Agent Rules',
      formComponent: <PlatformSetupStep3 onNext = {completeCurrentStep} form={form} handleChange={handleChange} />,
    },
    {
      id: 3,
      title: 'Set Up First Campaign',
      formComponent: <PlatformSetupStep4 onNext={completeCurrentStep} form={form} />,
    },
  ];

  // Handle step click - only allow navigation to completed steps or current step
  const handleStepClick = (stepId) => {
    if (completedSteps.includes(stepId) || stepId === currentStep) {
      setCurrentStep(stepId);
    }
  };

  // Mark current step as complete and move to next step
  function completeCurrentStep()  {
    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    } else {
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  // For demonstration purposes - returns the status of a step
  const getStepStatus = (stepId) => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'in-progress';
    return 'not-started';
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-48 md:w-64 lg:w-80  bg-[#F7F9FF] p-1 md:p-3 lg:p-6 flex flex-col sticky left-0 top-0">
        <div className="mb-6 border-b border-[#CCC] pb-4">
          <h2 className="text-lg  text-[#305AFA]">Get Started with ReferralHub</h2>
          <p className="text-[#666] text-sm mt-2">
            To get started with better referrals & rewards, complete your account setup in a few easy steps.
          </p>
        </div>

        {/* Steps list */}
        <div className="space-y-4 mt-2">
          {steps.map((step) => {
            const status = getStepStatus(step.id);
            return (
              <div 
                key={step.id} 
                className={`flex items-center cursor-pointer `}
                onClick={() => handleStepClick(step.id)}
              >
                {/* Status indicator */}
                {status === 'completed' ? (
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                    <FaCheck className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                ) : status === 'in-progress' ? (
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-[#305AFA] flex items-center justify-center mr-3">
                    <div className='w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#305AFA]' />
                  </div>
                ) : (
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#AAA] mr-3" />
                )}

                {/* Step text */}
                <div>
                  <div className="font-medium text-sm md:text-base text-[#000]">{step.title}</div>
                  {status === 'completed' && (
                    <div className="text-green-500 text-xs md:text-sm">Completed</div>
                  )}
                  {status === 'in-progress' && (
                    <div className="text-blue-500 text-xs md:text-sm">In Progress</div>
                  )}
                  {status === 'not-started' && (
                    <div className="text-[#333] text-xs md:text-sm">Not Started</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
        <div className="flex-1  mx-auto min-h-screen overflow-y-scroll scroll-on-hover">
          
          {/* Current step form */}
          {steps[currentStep].formComponent}
        
      </div>
    </div>
  );
}

