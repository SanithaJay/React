import React, { useState } from 'react'

export default function ToDoHooks() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    
    console.log(input);

    function addnames() {
        const newName = { id: list.length, name: input }
        console.log(newName);
        setList([newName, ...list])//copying using spread operator                
    }
    const handleClick = (item) => {
        console.log(`You clicked on ${item.name}`);
        setInput(item.name);
        
       
    };
    

    return (
        <section>
            <h2>TODO LIST Using Hooks</h2>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addnames}>Add Name</button>
            {list.length>0 && list.map(item => {

                return (


                    <h2 key={item.id} onClick={() => handleClick(item)}>{item.name} </h2>

                )
            })

            }
        </section>
    )
}
