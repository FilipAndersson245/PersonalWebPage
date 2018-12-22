import React from "react";
import { css } from "@emotion/core";
// @ts-ignore
import DotLoader from "react-spinners/DotLoader";

interface ILoaderProps {
  readonly loading?: boolean;
  readonly size?: number;
}

const centering = css`
  display: block;
  margin: auto;
`;

export const Loader = (props: ILoaderProps) => (
  <DotLoader
    loading={props.loading || true}
    color={"#3083E6"}
    size={props.size || 70}
    className={centering}
  />
);

export default Loader;
