import { ReactElement } from 'react';
import cn from 'classnames';

import { TextAreaProps } from '@/components/text-area/text-area.proptypes';

import styles from '@/components/text-area/text-area.module.scss';

export default function TextArea({
  placeholder,
  ...props
}: TextAreaProps): ReactElement {
  const classes = cn(styles['text-area']);
  return <textarea className={classes} placeholder={placeholder} {...props} />;
}
