import React from 'react';
import { Drawer } from 'antd';

import styles from '../../../../styles/MobileMenu.module.css';

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

function MobileMenu({ open, setOpen }: Props) {
  const onClose = () => {
    setOpen(!open);
  };

  const containerStyle: React.CSSProperties = {
    // position: 'relative',
    // padding: 48,
    // overflow: 'hidden',
    // textAlign: 'center',
    // background: 'transparent',
    // top: '13vw',
    // left: '-466.4px',
    // width: '100vw',
    // height: '100vh',
    // border: 'none',
    visibility: open ? 'visible' : 'hidden',
  };

  const boxStyle: React.CSSProperties = {
    borderRadius: '2px',
    position: 'absolute',
    width: open ? '100vw' : 0,
    height: '100vh',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    top: '64px',
  };

  return (
    <div className="ContainerBox" style={boxStyle}>
      <div className="NavBar-Container" style={containerStyle}>
        <Drawer
          closable={false}
          getContainer={false}
          onClose={onClose}
          open={open}
          placement="right"
          width="45%"
        >
          <div className={styles.actions}>
            <a className={styles.actions_fonts} href="#Home" onClick={onClose}>
              Inicio
            </a>
            <a
              className={styles.actions_fonts}
              href="#Services"
              onClick={onClose}
            >
              Servicios
            </a>
            <a
              className={styles.actions_fonts}
              href="#WhoWeAre"
              onClick={onClose}
            >
              Quienes Somos
            </a>
            <a
              className={styles.actions_fonts}
              href="#ContactUs"
              onClick={onClose}
            >
              Contacto
            </a>
            <p>+ 54 9 223 4476914</p>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default MobileMenu;
