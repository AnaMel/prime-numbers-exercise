import React from 'react';
import Input from '../../../components/Input';

import './homePage.css';

const HomePage = ({ data, error, onSubmit }) => {
    return (
        <div className="homePage">
            <Input />
            <div className="button_cont m-t-30" align="center">
                <a className="example_b" href="#" onClick={onSubmit}>
                    Send
                </a>
            </div>
            <div className="errors height-75">{error}</div>
            {data && <div>{data}</div>}
        </div>
    );
};

export default HomePage;
