import React from "react";

import styles from "./List.module.scss";

interface IListProps {
  items: any[];
  label: string;
  renderListItem: (item: any) => React.ReactNode;
}

const List: React.FC<IListProps> = ({ items, label, renderListItem }) => (
  <section className="movies-list">
    <h2 className={styles.label}>{label}</h2>

    <div className={styles.listContainer}>{items.map(renderListItem)}</div>
  </section>
);

export default List;
