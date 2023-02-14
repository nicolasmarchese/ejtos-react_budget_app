import { useContext } from "react";
import { AppContext } from "../context/AppContext";



const CurrencyDropDown = () => {

    const {dispatch, currency} = useContext(AppContext);

    const changeCurrency = (e) => {  
       
        dispatch({
        type:'CHG_CURRENCY', 
        payload: e.target.value
    })}

    
    return (<div><label className="input-group-text" htmlFor="inputGroupSelect01">Currency
    
    <select className="custom-select" id="inputGroupSelect01" onChange={changeCurrency}>
          
    
    <option value="£" name="finance">£ Pound</option>
    <option value="$" name="sales">$ Dollar</option>
    <option value="€" name="hr">€ Euro</option>
    <option value="₹" name="it">₹ Ruppee</option>
    </select>
    </label>

</div>
    

    );
};

export default CurrencyDropDown