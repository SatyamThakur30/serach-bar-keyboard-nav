
import React, { useEffect, useState } from 'react';
// import data from "../data"
export const Searchcontext = React.createContext()

// context act as global data store
export function Searchcontextprovider(props) {
    const [inputText, setInputText] = useState("")
    const [filterData, setFilterData] = useState([])
    const [suggestionLists, setSuggestionLists] = useState([])

    const [isDataEmpty,setIsDataEmpty]=useState(false)

    const debounce = (func, delay) => {
        let debounceTimer
        return (...args) => {
            const context = this
            clearTimeout(debounceTimer)
            debounceTimer
                = setTimeout(() => func.apply(context, args), delay)
        }
    }

    const handleInput = debounce((text) => {
        setInputText(text)
    }, 1000)


    useEffect(() => {
        if (inputText.length) {
            (async () => {
                const resp = await fetch(`http://localhost:5000/get-by-filter?text=${inputText}`)
                const jsonData = await resp.json()
                setFilterData(jsonData.data)
            
                if(jsonData.data.length){
                    setIsDataEmpty(false)
                }
                else{
                    setIsDataEmpty(true)
                }
            })()



        }
        else {
            setFilterData([])
            setSuggestionLists([])
            setIsDataEmpty(false)

        }
    }, [inputText])

    useEffect(() => {

        if (filterData.length) {
            const lists = document.getElementsByClassName("single-list")
            setSuggestionLists(lists)
        }
        else {

            setSuggestionLists([])
        }
    }, [filterData])


    return (
        <Searchcontext.Provider value={{ text: inputText, handleInput: handleInput, filterData: filterData, lists: suggestionLists,isDataEmpty:isDataEmpty }}>
            {
                props.children
            }
        </Searchcontext.Provider>
    );
}
