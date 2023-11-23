import { useContext,useState } from "react";
import { todosContext } from "../TodosContext";
import TextInput from "./TextInput";

function SearchBar() {

    const [searchText,setSearchText] = useState('');
    const {todos,setShowTodos} = useContext(todosContext)


    const handleSearch = (event) =>{
        const searchTextValue = event.target.value;

        setSearchText(searchTextValue)

        console.log(searchTextValue)
        
        const todosCheck = todos.filter((todo)=>todo.text.includes(searchTextValue))
        //console.log(todosCheck.map(({text})=>text))
        
        setShowTodos(todosCheck)
    }

    return ( <div>
        <form>
            <TextInput 
                value={searchText}
                onChange={handleSearch}
                placeholder="Search Here..!"/>
        </form>

    </div> );
}

export default SearchBar;