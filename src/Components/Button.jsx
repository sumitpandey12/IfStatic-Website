// import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button
        className="bg-red-600 
        font-[popins]
       p-2 
       px-5
        m-5
    
         rounded
         transition-transform
          transition-shadow
           hover:shadow-md 
           active:translate-x-3 active:translate-y-3 
           active:shadow-none
            text-white
           
             "
      >
      {props.name}
      </button>
    </div>
  );
};

export default Button;
