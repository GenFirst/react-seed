import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

class LoginContainer extends Component {
  render() {
    return (
      <div className="login">
        <p>
          <FormattedMessage
            id={ 'Login.title' }
            defaultMessage={ 'Login' }
            values={{}}
          />
        </p>
      </div>
    );
  }
}

export default LoginContainer;
