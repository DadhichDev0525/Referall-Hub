const Button = ({children, className,...rest}) => {
    const defaultClasses = "w-full text-white rounded-lg bg-gradient-to-r from-[#305AFF]/80 to-[#B5D2FF] hover:from-[#305AFF] hover:to-[#B5D2FF] transition cursor-pointer";
    const combinedClasses = `${defaultClasses} ${className}`; 
  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
