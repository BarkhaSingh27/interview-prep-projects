import { useCallback, useEffect, useState , useRef} from 'react';
import useDebounce from './useDebounce';

const API = `https://jsonplaceholder.typicode.com/users`;

const DebouncedInput = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const cacheRef = useRef({});

  //fetch users from API
  const fetchUsers=async()=>{
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);
      setUsers(data);
      setFilteredUsers(data);
    } catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers()
  }, []);

  //function to filter users based on input query
  const filterUsers = useCallback((query)=>{
    const key = query.toLowerCase();
    //check if result is present in cache
    if(cacheRef.current[key]){
      setFilteredUsers(cacheRef.current[key]);
      return;
    }
    if(key===""){
      setFilteredUsers(users);
      return;
    }
    //if not present in cache, filter and store in cache
    const filtered = users.filter(user => {
        const name = user.name.toLowerCase();

        //check if any character of key is present in name
        return key.split('').every(char => name.includes(char))
    });
    cacheRef.current[key] = filtered;
    setFilteredUsers(filtered); 
  }, [users]);

  //call debounce hook and pass the filter function and delay time
  const handleChange = useDebounce(filterUsers, 500);

  return (
    <div>
      <h2>Debounced Input Component</h2>
      <input type="text" placeholder="Search..." onChange={(e)=>handleChange(e.target.value)}/>

{filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default DebouncedInput;