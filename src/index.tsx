import React from "react";

interface HelloProps {
  name: string;
}

export const Hello: React.FC<HelloProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};
