import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' }, 
    { label: 'Bacon', type: 'bacon' }, 
    { label: 'Cheese', type: 'cheese' }, 
    { label: 'Meat', type: 'meat' }, 
];

const buildControls = (props) => ( 
    <div className={Classes.BuildControls}> 
    <p>Current Price : ${props.price.toFixed(2)}</p>
        {controls.map(cltr =>(
            <BuildControl 
                key={cltr.label} 
                lavel={cltr.label} 
                added={() => props.ingredientAdd(cltr.type)} 
                remove={() => props.ingredientRemove(cltr.type)}
                disabled={props.disabled[cltr.type]}/>
        ))}
    </div>
);

export default buildControls;