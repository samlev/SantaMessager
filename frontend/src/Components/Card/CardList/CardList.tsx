import React from 'react';
import Card from '../Card';

interface Props {}

// eslint-disable-next-line no-empty-pattern
const CardList: React.FC<Props> = (props: Props): JSX.Element => {
    return <div>
        <Card companyName='Apple' ticker='APPL' price={100}/>
        <Card companyName='Microsoft' ticker='MSFT' price={200} />
        <Card companyName='Tesla' ticker='TSLA' price={0} />
    </div>;
};

export default CardList;