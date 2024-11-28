import React, { ChangeEvent } from 'react';

interface Props {
    onClick: (e: React.SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({onClick, search, handleChange}: Props): JSX.Element => {
    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e)} />
            <button onClick={(e) => onClick(e)}>Search</button>
        </div>
    );
};

export default Search;