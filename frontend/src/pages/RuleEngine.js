import React, { useState } from 'react';
import axios from 'axios';

const RuleEngine = () => {
    const [rule, setRule] = useState('');

    const createRule = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/rules', { ruleString: rule });
            console.log('Rule created', response.data);
        } catch (error) {
            console.error('Error creating rule', error);
        }
    };

    return (
        <div>
            <h1>Rule Engine</h1>
            <input type="text" value={rule} onChange={(e) => setRule(e.target.value)} />
            <button onClick={createRule}>Create Rule</button>
        </div>
    );
};

export default RuleEngine;
