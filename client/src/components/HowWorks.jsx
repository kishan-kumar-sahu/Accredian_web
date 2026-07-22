import React from 'react'

const HowWorks = () => {
  return (
  
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">

  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMwX2-ZNoK_wG4Nb0c3zZ6bI1RYCaX7h19_PJAYoHIe-VY8sP4J6a090&s=10" className="mx-auto mb-4" />
    <h3 className="font-bold">Skill Gap Analysis</h3>
    <p className="text-gray-600 text-sm mt-2">
      Assess team skill gaps and developmental needs.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJURIZ6PjV-D9Z4XqlwBlyH_xrGFZUOv_xd7Jkp3Qe2TzMPjTxcBzp0OY&s=10" className="mx-auto mb-4" />
    <h3 className="font-bold">Customized Training Plan
</h3>
    <p className="text-gray-600 text-sm mt-2">
     Create a tailored roadmap addressing organizational goals.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG-0kQJaz50v5zi3QiB6z6xrcJqqoHnJ3TdBJQUltgsyuufCK9XZp8Y0Z&s=10" className="mx-auto mb-4" />
    <h3 className="font-bold">Flexible Program Delivery
</h3>
    <p className="text-gray-600 text-sm mt-2">
  Deliver adaptable programs aligned with industry and organizational needs.
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
    <img src="https://img.magnific.com/free-photo/corporate-business-line-graph-report_53876-124017.jpg?semt=ais_hybrid&w=740&q=80" className="mx-auto mb-4" />
    <h3 className="font-bold">Performance Tracking</h3>
    <p className="text-gray-600 text-sm mt-2">
      Measure growth and optimize learning outcomes.
    </p>
  </div>

</div>

  )
}

export default HowWorks