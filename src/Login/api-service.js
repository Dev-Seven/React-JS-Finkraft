import { useLocal, server } from "../constants/defaultValues";
import axios from "axios";
const local = useLocal;

const gstDetails = {
  message: "Bussiness successfully created",
  ref_id: "60cb3b5f0855bfca157539a9",
  status: "Success",
  code: 200,
};

export const getGstinDetails = async (data) => {
  if (local) {
    return gstDetails;
  } else {
    console.log(server + "checkGstin\ndata -> " + JSON.stringify(data));
    const res = await axios.post(server + "checkGstin", data);
    return res.data;
  }
};
