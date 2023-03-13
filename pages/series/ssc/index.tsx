import axios from "axios";
import Link from "next/link";
import React from "react";

const SSCSeries = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <h1>Test Series World</h1>
      <ul
        style={{
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          listStyle: "none",
        }}
      >
        {data?.map((item: any, index: number) => {
          return (
            <li
              key={index}
              style={{
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              <Link
                href={`/series/ssc/${item?._id}`}
                style={{
                  color: "#9c27b0",
                }}
              >
                {item?.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SSCSeries;

// getServerSideProps
export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/v1/series`);
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
