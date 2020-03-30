import React, { ReactNode, useState } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../contexts/app";

export function AppProvider(props: any) {
  const [loading, setLoading] = useState(false);
  return <AppContext.Provider value={{ loading }}>{props.children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node
};
