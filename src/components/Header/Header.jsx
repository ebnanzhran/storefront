import React from "react";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import './header.scss';

export default function Header(props) {

  return (
    <>
      <AppBar style={{ backgroundColor: '#4d4d4d' }} className="header_container" position="static">
        <Toolbar>
          <h3 data-testid='header'>Bahaa Store</h3>
        </Toolbar>
      </AppBar>
    </>
  )
}
