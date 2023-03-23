import React, { useState } from 'react';

export type Hook = {
    name: string,
    type: string,

}
const SearchList = ({list}: { list: Hook[] }) => {
    const [currentList, setCurrentList] = useState(list);

    return <div>
        <input onChange={event => {
            const value = event.target.value;
            const newList = list.filter(e => e.name.includes(value));
            setCurrentList(newList);
        }}/>
        <table>
            {currentList.map(element => <tr>
                <td><a href={`/${element.name}`}>{element.name}</a></td>
                <td>{element.type}</td>
            </tr>)}
        </table>
    </div>
}

export default SearchList;