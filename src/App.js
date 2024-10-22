import {useEffect, useState} from 'react'
import Dashboard from "./Components/DashBoard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [grouping, setGrouping] = useState(localStorage.getItem( 'grouping' ) || "Status")
  const [ordering, setOrdering] = useState(localStorage.getItem( 'ordering' ) || "Title")
  
  // initially defined to deal with the case of empty lists
  let statuses = ['Backlog', "Todo", 'In progress', 'Done', 'Canceled']
  
  let priorities = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority'
  }

  let priorityScores = [0,1,2,3,4]

  useEffect(() => {
    setOrdering(localStorage.getItem( 'ordering' ) || "Title")
    localStorage.setItem("ordering", localStorage.getItem( 'ordering' ) || 'Title' );
    setGrouping(localStorage.getItem( 'grouping' ) || "Status")
    localStorage.setItem("grouping", localStorage.getItem( 'grouping' ) || 'Status' );
  }, [])

  return (
    <div className="App">
      <Navbar setGrouping={setGrouping} setOrdering={setOrdering}/>
      <Dashboard statuses={statuses} priorities={priorities} priorityScores={priorityScores} grouping={grouping} ordering={ordering} />
    </div>  
  );
}

export default App;