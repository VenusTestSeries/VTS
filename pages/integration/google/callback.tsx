import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const Callback = () => {
  const router = useRouter();

  const GetData = async () => {
    try {
      const url = "/api/google/success";
      const { data } = await axios({
        method: "GET",
        url,
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <pre>
        <code>{JSON.stringify(router.query, null, 2)}</code>
      </pre>

      <button onClick={GetData}>Get User Data</button>
    </div>
  );
};
export default Callback;
