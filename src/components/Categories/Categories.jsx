import * as React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/Categories';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './categories.scss'


function Categories(props) {

  return (

    <section  >
      <AppBar position="static">
        <Tabs className='container'>
          {
            props.categories.categories.map((category) => {
              return (
                <Tab className='tab_content' label={category.displayName} key={category.name} onClick={() => props.changeActiveCategory(category.name)}>
                  {category.displayName}
                </Tab>
              );
            })
          }
        </Tabs>
      </AppBar>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { categories: state.categories };
}

const mapDispatchToProps = { changeActiveCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories)