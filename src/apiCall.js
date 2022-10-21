import axios from "axios";
export function sendMail(email, notify) {
  const fetchData = async (email) => {
    console.log({ email });
    try {
      const { data } = await axios.post(
        "https://courageous-yak-veil.cyclic.app/waitlist/add",
        { email }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData(email);
}
