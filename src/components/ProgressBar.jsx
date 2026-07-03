export default function ProgressBar({ step, totalSteps = 4 }) {
  const percentage = (step / totalSteps) * 100;

  return (
    <div className="mb-10">

      <div className="flex justify-between text-sm text-slate-600 mb-2">

        <span className="font-semibold">
          Step {step} of {totalSteps}
        </span>

        <span>{Math.round(percentage)}%</span>

      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

        <div
          className="bg-yellow-500 h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>
  );
}