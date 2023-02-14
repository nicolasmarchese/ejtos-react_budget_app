import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const {budget, dispatch, expenses, currency} = useContext(AppContext);
    
    const handleSetBudget = (e) => {  
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(e.target.value>20000){
            alert('The value cannot exceed remaining funds')
        
            return

           

        }else if(e.target.value<totalExpenses){
            alert('You cannot reduce the budget value lower than the spending')
        
            return
        }
        dispatch({
        type:'SET_BUDGET', 
        payload: e.target.value
    })

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span><input
                        required='required'
                        type='number'
                        id='cost'
                        value = {budget}
                        step = '10'
                        max = '20000'
                        
                       
                        onChange = {handleSetBudget}
                        >
                        </input>
        </div>
    );
};
export default Budget;
