import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import CheckoutPage from './components/CheckoutPage';


function App() {

const style = { height: 500, width: 902 };
  return (
    (
    <div>
      <MaterialLayout>
        <CheckoutPage></CheckoutPage>
    </MaterialLayout>
    </div>
    )
  );
}

export default App; 
