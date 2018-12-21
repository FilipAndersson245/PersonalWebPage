import React from "react";

// @ts-ignore
import DotLoader from "react-spinners/DotLoader";

interface ILoaderProps {
  readonly loading?: boolean;
  readonly size?: number;
}

export const Loader = (props: ILoaderProps) => (
  <DotLoader
    loading={props.loading || true}
    color={"#3083E6"}
    size={props.size || 70}
  />
);

export default Loader;
