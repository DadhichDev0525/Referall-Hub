function Skeleton({ times, className }) {
 
  const outerClassNames = `relative overflow-hidden bg-[#FBFBFB] rounded-md mb-2.5 ${className}`
    
  const innerClassNames = "animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
  

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div key={i} className={outerClassNames} >
                <div className={innerClassNames} />
             </div>
    });

  return <>{boxes}</>;
}

export default Skeleton;