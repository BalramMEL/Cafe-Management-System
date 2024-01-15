import axios from "axios";

export async function RegisterCafe(cafedata) {
  try {
    const responce = await axios.post("http://127.0.0.1:8080/cafe", cafedata);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
}
