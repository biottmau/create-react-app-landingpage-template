import React from 'react';
import { connect } from 'react-redux';
import Layout from './layout/Layout';


function App() {
  return (
     <Layout/>
  );
}

export default connect()(App);
