import React from 'react';
import styles from './index.module.scss';

interface MenuProps {
  items: { text: string; link: string }[];
}
const Menu = ({ items }: MenuProps) => {
  return (
    <div className={styles.menu}>
      {items.map((item, i) => (
        <div className={styles.item} key={i}>
          <a href={item.link}>{item.text}</a>
        </div>
      ))}
    </div>
  );
};

export default Menu;
