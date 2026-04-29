export default function stats() {
  return (
    <div className="px-6 py-16 bg-white">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        {/* Column 1 */}
        <div className="space-y-3">
          <h2 className="text-5xl font-extrabold text-blue-600">
            10K+
          </h2>
          <p className="text-gray-600">
            Professionals trained for exceptional career success
          </p>
        </div>

        {/* Column 2 */}
        <div className="space-y-3">
          <h2 className="text-5xl font-extrabold text-purple-600">
            200+
          </h2>
          <p className="text-gray-600">
            Sessions delivered with unmatched learning excellence
          </p>
        </div>

        {/* Column 3 */}
        <div className="space-y-3">
          <h2 className="text-5xl font-extrabold text-green-600">
            5K+
          </h2>
          <p className="text-gray-600">
            Active learners engaged in dynamic courses
          </p>
        </div>

      </div>

    </div>
  );
}