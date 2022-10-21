import axios from "axios";
export function sendMail(email, notify) {
  const fetchData = async (email) => {
    console.log({ email });
    try {
      const { data } = await axios.post("/waitlist/add", { email });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData(email);
}
