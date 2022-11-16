import axios from "axios";
export function sendMail(email, notify) {
  const fetchData = async (email) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${user.token}`,
      },
    };
    console.log({ email });
    try {
      const { data } = await axios.post(
        "https://courageous-yak-veil.cyclic.app/waitlist/add",
        JSON.stringify({ email }),
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData(email);
}
