import React, { ChangeEvent } from 'react';

interface Props {
    // Define props here
};

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    const [search, setSearch] = React.useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e)} />
            <button onClick={(e) => onClick(e)}>Search</button>
        </div>
    );
};

export default Search;