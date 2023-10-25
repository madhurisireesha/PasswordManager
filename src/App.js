import {Component} from 'react'
import Password from './Password'
import './App.css'
import {v4 as uuidv4} from 'uuid'
class App extends Component{
    state={
      website:'',
      username:'',
      password:'',
      search:'',
      showpassword:false,
      count:0,
      id:'',
      list1:[]
    }
    addWebsite=(event)=>{
      this.setState({
        website:event.target.value
      })
    }
    addUsername=(event)=>{
      this.setState({
        username:event.target.value
      })
    }
    addPassword=(event)=>{
      this.setState({
        password:event.target.value
      })
    }
    addPass=(event)=>{
      event.preventDefault()
      const{website,username,password,list1,count}=this.state
      const newlist={
        id:uuidv4(),
      website:website,
        username:username,
      password:password,
      
      }
      this.setState(prevState=>({
        list1:[...list1,newlist],
        website:'',
        username:'',
        password:'',
        count:prevState.count+1
      }))
    }
    onSearchInput=(event)=>{
        this.setState({
          search:event.target.value
        })
    }
    showPassword=()=>{
      const{showpassword}=this.state
      this.setState({
        showpassword:!showpassword
      })
    }
    doDelete=(id)=>{
      const{list1}=this.state
      const list=list1.filter((details)=>(
        details.id!==id
       ))
      //  this.setState({
      //   list1:list,
      //   count:0
      //  })
      this.setState((prerState)=>({
        list1:list,
        count:prerState.count-1
      }))

    }
  render(){
   const{website,username,password,list1,search,showpassword,count}=this.state
   const check=showpassword?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pFoc5YLM3BIkzQHWvvkp1f1DQqN9USzQ-g&usqp=CAU":''
   const list2=list1.filter((details)=>(
     details.username.includes(search)
    ))
   const plength=list2.length
   
    return(
      <div class="entirecontainer">
        <div className='container'>
          <img src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" alt="app logo" className='first'/>
          <div className='container1'>
            <form className='container11' onSubmit={this.addPass}>
              <h3 style={{color:"white"}}>Add New Password</h3>
              <div className='website'>
             <img src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" className='websitei' alt="websi" />
             <input type="text" placeholder='Enter Website' onChange={this.addWebsite} value={website}/></div>
             <div className='website'>
             <img src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png " className='usernamei' alt="user" />
             <input type="text" placeholder='Enter Username' onChange={this.addUsername} value={username}/></div>
             <div className='website'>
             <img src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" className='passwordi' alt="pas" />
             
             <input type="password" placeholder='Enter Password' onChange={this.addPassword} value={password}/></div>
             <button className='addbtn' type="submit">Add</button>
            </form>
            <div className='container12'>
              <img src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" className="firstimage" alt="imagi" placeholder='search'/>
              </div>
          </div>  
          <div className='container2'>
            <div className='container21'>
              <div className='pa'>
              <h1 style={{color:"white"}}>Your Passwords</h1>
              <h1 className='count'>{count}</h1></div>
              <div className='search'>
              <img src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="search" className='searchi'/>
              <input type="search" placeholder='search' onChange={this.onSearchInput} />
              </div>
            </div>
            <div className='container22'>
            <hr/>
            <button type="button" style={{marginLeft:"78vw",border:"none",borderRadius:"2px"}} onClick={this.showPassword} >
              <img src={check} style={{height:"1vh",width:"1.5vw"}}/>
              </button>show passwords
              {plength===0?<div className='nopass'><img src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="nopasswords" className='nopassimage'/><h2>No Passwords</h2></div>:<div className='details1'>
            {list2.map((details)=>(
              <Password details={details} showpassword={showpassword} id={details.id} doDelete={this.doDelete}/>
             ))}
             </div>}
            
           
            </div>
           
          </div> 
         
           
        </div>     
      </div>

     
    )
  }
}
export default App