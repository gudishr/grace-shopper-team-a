import React from 'react';
import {connect} from 'react-redux';
import {Login} from './Login';

const Home = () => {
  return (
    <div>
      <div>< Login /></div>
    </div>
  );
}

const mapState = state => {
  return {
    users: state.users,
  }
}

export default connect(mapState)(Home);
