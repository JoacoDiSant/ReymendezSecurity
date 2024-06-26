import React from 'react';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';

import styles from '../styles/Home.module.css';
import Headers from './Headers';
import Footer from './Footers';
import Body from './Body';

const { Header } = Layout;

function App() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className={styles.main}>
      <Header
        style={{
          padding: 0,
          backgroundColor: '#FFE408',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          zIndex: 1,
          position: 'fixed',
          width: '100%',
          height: '90px',
          top: 0,
        }}
      >
        <Headers open={open} setOpen={setOpen} />
      </Header>
      <div className="Body">
        <Body />
      </div>
      <div className={`Footer ${styles.footer}`}>
        <Footer />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
