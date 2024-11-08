import './App.css'
import PostsList from './components/PostsList';
import {useState} from 'react'
import MainHeader from './components/MainHeader';

function App() {
  const [modalVisable, setModalVisable] = useState(false);

  function hideTheModal (){
    setModalVisable(false);
  }
  function showTheModal (){
    setModalVisable(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showTheModal}/>
      <main>
        <PostsList onPosting={hideTheModal} isPosting={modalVisable}/>
      </main>
    </>
  )
}

export default App
