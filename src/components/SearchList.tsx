import React, { useState } from 'react';

const SearchList = ({list}: { list: string[] }) => {
    const [currentList, setCurrentList] = useState(list);

    return <ul>
        {currentList.map(element => <li><a href={`/${element}`}>{element}</a></li>)}
    </ul>
}

export default SearchList;