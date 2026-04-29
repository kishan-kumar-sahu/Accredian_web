export default function clients() {
  return (
    <div className="px-6 py-20 bg-gray-50 text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900">
        Our Proven Partnerships
      </h2>

      {/* Subheading */}
      <p className="text-gray-600 mt-3 text-lg">
        Successful Collaborations With the Industry’s Best
      </p>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12 items-center">

        <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png" alt="client" className="mx-auto opacity-70 hover:opacity-100 transition" />
        <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png" alt="client" className="mx-auto opacity-70 hover:opacity-100 transition" />
        <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png" alt="client" className="mx-auto opacity-70 hover:opacity-100 transition" />
        <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png" alt="client" className="mx-auto opacity-70 hover:opacity-100 transition" />
        <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg" alt="client" className="mx-auto opacity-70 hover:opacity-100 transition" />
        <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg" alt="client" className="mx-auto opacity-70 hover:opacity-100 transition" />

      </div>

    </div>
  );
}