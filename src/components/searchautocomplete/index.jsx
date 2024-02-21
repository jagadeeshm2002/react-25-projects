import React, { useEffect, useState } from 'react';
import './style.css'
import Suggestions from './suggestinons';
export default function SearchAutoComplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParm] = useState('');
    const [showDropDown, setShowDropDown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])


    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParm(query)
        if (query.length > 1) {
            const filteredData = users && users.length ? users.filter(item => item.toLowerCase().indexOf(query) > -1) : [];
            setFilteredUsers(filteredData);
            setShowDropDown(true)
            console.log(filteredData)



        } else {
            setShowDropDown(false)
        }




    }
    function handleClick (event){
        
        setSearchParm(event.target.innerText)
        setShowDropDown(false)
        setFilteredUsers([])


    }

    async function fetchUsers() {

        try {
            setLoading(true);
            const res = await fetch('https://dummyjson.com/users')
            const data = await res.json();



            if (data && data.users && data.users.length) {
                setUsers(data.users.map(userItem => userItem.firstName));
                setLoading(false);
                setError(null)
                console.log(users)
            };

        } catch (e) {
            setLoading(false)
            setError(e)


        }



    }

    useEffect(() => {
        fetchUsers();
    }, [])
    return (
        <div className="search-autocomplete-container">
            <div className="searchbar">
            {loading ? (<h1>Loading Data!</h1>) : 
                (
                    <input  
                    name="searchbar" 
                    id="searchbar_auto" 
                    placeholder='Search here'
                    value={searchParam}
                    onChange={handleChange} />
                
            )}
            {showDropDown && <Suggestions onClick={handleClick} data={filteredUsers}/>}
            </div>

        </div>
    )
}
