import React from "react";

import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => (
  <div className={styles.mainWrapper}>{children}</div>
);

export default Layout;
