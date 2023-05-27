import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const HomeScreen = () => {
    return (
      <Alert className="mt-4" variant="success">
        <Alert.Heading>JWT Authentication example</Alert.Heading>
        <p>
          Click Login to sign in to the existing account, or click register to create a new account.
        </p>
      </Alert>
    );
  }

export default HomeScreen