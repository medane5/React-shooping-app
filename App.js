import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([

    {itemName:"item 1",quantity:1,isSelected:false},
    {itemName:"item 2",quantity:3,isSelected:false},
    {itemName:"item 3",quantity:2,isSelected:false},

  ]);
  
  const [inputValue,setInputValue]= useState("");

  const [totalItemCount, setTotalItemCount]= useState(0);



  function handleAddButtonClick() {
       setItems([...items, {itemName:inputValue,quantity:1,isSelected:false,}]);
    setInputValue(""); // setInputValue to be an empty string again 
  }

const handleQuantityIncrease = (index) => {
    const newitems =[...items];
	newitems[index].quantity++;
 
	setItems(newitems);
    
}

const handleQuantityDecrease = (index) => {
     const newitems= [...items];
	 newitems[index].quantity--;
     setItems(newitems);
}

const calculateTotal = () => {
     const totalItemCount = items.reduce((total,item)=>{
		 return total+item.quantity;
	 },0);

	 setTotalItemCount(totalItemCount);

}



const togglecomplete = (index) => {
   const newitems = [...items];
   newitems[index].isSelected= !newitems[index].isSelected;
   setItems(newitems);

}



  
	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event)=>setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...'  />
					<FontAwesomeIcon icon={faPlus} onClick={handleAddButtonClick} />
				</div>
				<div className='item-list'>

         {items.map((item,index)=>
         
         
                 <div className='item-container'>

					  	<div className='item-name' onClick= {()=>togglecomplete(index)}>

							{/* HINT: replace false with a boolean indicating the item has been completed or not */}
							{item.isSelected ? (
								<>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span className='completed'>{item.itemName}</span>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faCircle}  />
									<span>{item.itemName}</span>
								</>
							)}
						  </div>

						  <div className='quantity'>
							<button>
								<FontAwesomeIcon icon={faChevronLeft} onClick={() =>handleQuantityDecrease(index)}/>
							</button>
							<span> {item.quantity}  </span>
							<button>
								<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)}/>
							</button>
						  </div>

				</div>
          )}

				


				</div>
				<div className='total'>Total: {calculateTotal}</div>
			</div>
		</div>
	);
};

export default App;