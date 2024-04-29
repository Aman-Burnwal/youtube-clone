const Button = ({ name, icon }) => {
  
  
  return (
      <div className="hover:bg-slate-200  hover:rounded-lg px-3 py-1 ">
          
          <div className="flex flex-row gap-5">
              
              <p>{icon}</p>
              <p>{ name }</p>
              
          </div>
          
    </div>
  )
}
export default Button