import React, { useState } from 'react';

export type Hook = {
    name: string,
    type: string,
    summery: string,
}
const SearchList = ({list}: { list: Hook[] }) => {
    const [currentList, setCurrentList] = useState(list);

    return <div className="search-list">
        <input
            placeholder="Search hook"
            onChange={event => {
            const value = event.target.value;
            const newList = list.filter(e => e.name.includes(value));
            setCurrentList(newList);
        }}/>
        <table>
            <tr>
                <th>Hook</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            {currentList.map(element => <tr>
                <td><a href={`/${element.name}`}>{element.name}</a></td>
                <td>{element.type}</td>
                <td>{element.summery}</td>
            </tr>)}
        </table>
    </div>
}

export default SearchList;
