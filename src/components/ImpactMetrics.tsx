export default function ImpactMetrics() {
  const metrics = [
    { label: "Projects Led", value: "15+" },
    { label: "Years Experience", value: "7+" },
    { label: "User Retention Increase", value: "40%" },
    { label: "Efficiency Gains", value: "30%" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Selected Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-4xl font-bold text-indigo-600">{metric.value}</div>
              <div className="text-gray-600 mt-2">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}