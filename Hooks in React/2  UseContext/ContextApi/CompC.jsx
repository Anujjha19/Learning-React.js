import React from 'react';
import { FName, LName } from './App';

const CompC = () => {
    return (
        <div>
            <FName.Consumer>
                {(firstName) => {
                    return (
                        <LName.Consumer>
                            {(lastName) => {
                                return (
                                    <h1>Hello {firstName} {lastName}</h1>
                                );
                            }}
                        </LName.Consumer>
                    );
                }} 
            </FName.Consumer>

        </div>
    );
};

export default CompC;
