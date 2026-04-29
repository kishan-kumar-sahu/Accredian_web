import React from 'react'

const HowWorks = () => {
  return (
  
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">

  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
    <img src="https://via.placeholder.com/100" className="mx-auto mb-4" />
    <h3 className="font-bold">Skill Gap Analysis</h3>
    <p className="text-gray-600 text-sm mt-2">
      Assess team skill gaps and developmental needs.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
    <img src="https://via.placeholder.com/100" className="mx-auto mb-4" />
    <h3 className="font-bold">Customized Training Plan
</h3>
    <p className="text-gray-600 text-sm mt-2">
     Create a tailored roadmap addressing organizational goals.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
    <img src="https://via.placeholder.com/100" className="mx-auto mb-4" />
    <h3 className="font-bold">Flexible Program Delivery
</h3>
    <p className="text-gray-600 text-sm mt-2">
  Deliver adaptable programs aligned with industry and organizational needs.
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
    <img src="https://via.placeholder.com/100" className="mx-auto mb-4" />
    <h3 className="font-bold">Performance Tracking</h3>
    <p className="text-gray-600 text-sm mt-2">
      Measure growth and optimize learning outcomes.
    </p>
  </div>

</div>

  )
}

export default HowWorks