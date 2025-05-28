import React from "react";

interface Props {
  children: React.ReactNode;
}
export const PageTitle = ({ children }: Props) => {
  return <h2 className="text-2xl font-bold text-center">{children}</h2>;
};
