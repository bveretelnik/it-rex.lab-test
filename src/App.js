import axios from 'axios'
import React,{useState, useEffect} from 'react'
import './App.css';
import { Description } from './components/Description/Description';
import { Header } from './components/Header/Header';
import { Table } from './components/Table/Table';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
      fetchUser()
  }, [])
  
  
      const fetchUser = async() => {
    const response = await axios('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json')
    setUsers(response.data)
      }

  return (
    <div className="App">
      
      <Header/>
      <Table users={users}/>
      <Description /> 
    </div>
  );
}

export default App;
