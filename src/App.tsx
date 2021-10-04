import React from 'react'
import ClickCount from './components/clickCount';
import SomeExampleComponent from './components/example/someExampleComponent';
import MyFirstComponent from './components/myFirstComponent';

const App: React.FC = () => {
  return (
    <div>
      <SomeExampleComponent />
      <ClickCount/>
    </div>
  )
}

export default App
