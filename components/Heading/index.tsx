import { type ComponentPropsWithoutRef } from 'react';
import styles from '@/components/Heading/index.module.scss';

export function Heading(props: ComponentPropsWithoutRef<'h1'>) {
  return (
    <h1 className={styles.heading} {...props}>
      {props.children}
    </h1>
  );
}
