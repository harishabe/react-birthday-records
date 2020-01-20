import React, { useState }  from 'react';
import {
  useSelector,useDispatch
} from 'react-redux';
import { sortByName,sortByAge } from './actions';

function App() {
  const [persons, setPersons] = useState([{
    'name':'Alexander Alfred',
    'age':'02/09/1981'
  },{
    'name':'Cecilia Olsson ',
    'age':'09/16/1992'
  },{
    'name':'Deborah T.Decker',
    'age':'10/31/1999'
  },
  {
    'name':'Janice Shroyer',
    'age':'12/01/1982'
  },{
    'name':'Jimmy Shergil',
    'age':'12/12/2001'
  },
  {
    'name':'Peter Parker',
    'age':'01/16/1992'
  },{
    'name':'Ralph White',
    'age':'11/30/2011'
  },
  {
    'name':'Veronica Mize',
    'age':'11/30/2011'
  }]);

  useSelector(state => state.sortByNameItem);
  const dispatch = useDispatch();

  return ( 
  <div className = "App" >
    <h1 className="center">Birthday Record </h1> 
      <div className="center">
        <input type="radio" name="gender" value="male" onClick={()=>dispatch(sortByName(persons))} /> Sort By Name
        <input type="radio" name="gender" value="female" onClick={()=>dispatch(sortByAge(persons))}/> Sort By Age
      </div><br />
    <table>
      <thead>
      <tr>
        <th>Person Name</th>
        <th>Date of Birth</th>
      </tr>
      </thead>
      <tbody>
      {persons.map(function(data){
        return(          
          <tr key={data.name}><td>{data.name}</td><td>{data.age}</td></tr>
        )
      })}
      </tbody>
    </table>
  </div>
  );
}

export default App;