import AppContext from "./AppContext";
import axios from "axios";

const URL = "https://accredian-webbb.onrender.com/api";

const AppState = (props) => {

  const Register = async (name,email, phone, domain, companyName, candidate, modeOfDelivery) => {
    try {
      const res = await axios.post(
        `${URL}/register`,
        { name, email, phone, domain, companyName, candidate, modeOfDelivery },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("res", res.data);
      return res.data;

    } catch (error) {
      console.log("API Error:", error);
    }
  };

  return (
    <AppContext.Provider value={{ Register }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;