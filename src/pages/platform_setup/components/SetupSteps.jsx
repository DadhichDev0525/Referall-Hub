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
    <div className="flex flex-col lg:flex-row h-screen gap-y-5 lg:p-4">
      {/* Sidebar */}
      <div className="w-full lg:w-80 rounded-lg  bg-[#F7F9FF] p-4 lg:p-6 flex flex-col sticky left-0 top-0">
        <div className="lg:mb-6 mb-2 border-b border-[#CCC] pb-4">
          <h2 className="text-lg  text-[#305AFA]">Get Started with ReferralHub</h2>
          <p className="text-[#666] text-sm lg:mt-2">
            To get started with better referrals & rewards, complete your account setup in a few easy steps.
          </p>
        </div>

        {/* Steps list */}
        <div className="flex lg:flex-col flex-wrap items-center lg:items-start  gap-y-2 gap-x-10 mt-2">
          {steps.map((step) => {
            const status = getStepStatus(step.id);
            return (
              <div 
                key={step.id} 
                className={`flex items-center min-w-min cursor-pointer `}
                onClick={() => handleStepClick(step.id)}
              >
                {/* Status indicator */}
                {status === 'completed' ? (
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#19C79F] flex items-center justify-center mr-3">
                    <FaCheck className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                ) : status === 'in-progress' ? (
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-[#305AFA] flex items-center justify-center mr-3">
                    <div className='w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#305AFA]' />
                  </div>
                ) : (
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-[#AAA] mr-3" />
                )}

                {/* Step text */}
                <div>
                  <div className="font-medium text-sm lg:text-base text-[#000]">{step.title}</div>
                  {status === 'completed' && (
                    <div className="text-[#19C79F] text-xs lg:text-sm">Completed</div>
                  )}
                  {status === 'in-progress' && (
                    <div className="text-blue-500 text-xs lg:text-sm">In Progress</div>
                  )}
                  {status === 'not-started' && (
                    <div className="text-[#333] text-xs lg:text-sm">Not Started</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
        <div className="flex-1  mx-auto min-h-[95vh] overflow-y-scroll scroll-on-hover">
          
          {/* Current step form */}
          {steps[currentStep].formComponent}
        
      </div>
    </div>
  );
}

