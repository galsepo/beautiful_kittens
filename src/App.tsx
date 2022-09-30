import { useState, useEffect, ChangeEvent } from 'react';
import { getData } from './utils/data.utils';

import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/search-box.component";
import './App.css';

export type Kittens = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [kittens, setMonsters] = useState<Kittens[]>([]);
  const [filteredMonsrers, setFilterMonsters] = useState(kittens);


  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Kittens[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsrers = kittens.filter((kittens) => {
      return kittens.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsrers);
  }, [kittens, searchField])


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Beautiful kittens</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search kittens"
        className="monstor-search-box"
      />
      <CardList kittens={filteredMonsrers} />
    </div >
  )
};
export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchFild: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       },
//       ));
//   }


//   onSearchChange = (event) => {
//     const searchFild = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchFild }
//     });
//   }


//   render() {
//     const { monsters, searchFild } = this.state;
//     const { onSearchChange } = this;
//     
//     return (
//       <div className="App" >
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search monsters"
//           className="monstor-search-box"
//         />
//         <CardList monsters={filteredMonsrers} />
//       </div >
//     )
//   }
// }



