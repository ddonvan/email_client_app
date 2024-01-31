import logo from './logo.svg';
import './App.css';
import { EmailList } from './components/emailList/emailList.component';
import { useState, useEffect } from 'react';
import { SearchBar } from './components/searchbar/searchbar.component';
import { Content } from './components/content/content.component';


function App() {
  const [emails, setEmails] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredEmails, setFilteredEmails] = useState([]);
  
  const [selectedEmail, setSelectedEmail] = useState({});

  useEffect(() => {
    const fetchUsers = async() => {
      const response = await fetch("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json")
      const users = await response.json();
      setEmails(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    let filtered = [];
    if(searchInput === "") {
      filtered = emails
    } else {
      filtered = emails.filter(email =>
        email.subject.toLowerCase().includes(searchInput.toLowerCase()))
    };
    setFilteredEmails(filtered);
  }, [emails, searchInput]);

  const handleInput = e => {
    setSearchInput(e.target.value)
  }

  const handleClick = (email) => {
    setSelectedEmail(email);
    console.log(selectedEmail);
  }

  return (
    <div className="App">

      <div className='leftBar'>
        
        <h1>inbox</h1>
        <h1>trash</h1>
      </div>

      <div className='email'>
        <SearchBar
          placeholder='Search'
          handleInput={handleInput}
          />
        <EmailList emails={filteredEmails} handleClick={handleClick}/>

      </div>

      <div className='content'>
        <h1>Content</h1>
        <Content email={selectedEmail}/>
      </div>
      
    </div>
  );
  
}

export default App;
