import axios from "axios";

export async function getBillionaireData() {

  try {


    const response = await axios.get(
      "https://forbes400.herokuapp.com/api/forbes400/real-time?limit=100"
    );
    
    const data =  response.data;
    return data;


  } catch (error) {
    console.error(error);
    return null;
  }

}
