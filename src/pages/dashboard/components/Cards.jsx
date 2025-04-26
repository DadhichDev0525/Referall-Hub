

export const KpiCard = ({ title, percentage, trackColor, progressColor }) => {
  const bg = `conic-gradient(${progressColor} ${percentage}%, ${trackColor} ${percentage}% 100%)`;
  const size = 100;
  return (
    <div className="bg-white rounded-lg shadow p-2 lg:p-3 flex flex-col gap-3 items-center justify-center">
      <div className=" text-gray-500">{title}</div>
      <div
        className="rounded-full flex items-center justify-center text-sm font-semibold text-gray-800"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundImage: bg,
        }}
      >
        <div
          className="bg-white rounded-full text-2xl flex items-center justify-center"
          style={{
            width: `${size * 0.8}px`,
            height: `${size * 0.8}px`,
            color: `${progressColor}`,
          }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

