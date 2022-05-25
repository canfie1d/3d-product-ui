import style from '../styles/components/controller.module.css';
import { Children, ReactNode } from 'react';

const Controller = ({children}: {children: ReactNode}) => {
  const renderColumns = () => {
    return Children.map(children, (child: ReactNode) => (
      <div className={style['column']}>
        {child}
      </div>
    ))
  }

  return (
    <div className={style['container']}>
      {renderColumns()}
    </div>
  )
};

export default Controller;
