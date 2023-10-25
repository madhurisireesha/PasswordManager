import './password.css'
const Password=(props)=>{
    const{details,showpassword,doDelete}=props
    const{website,username,password,id}=details
    const onDelete=()=>{
        doDelete(id)
    }
    return(
        <div className='passwordcontainer'>
            <div className='details'>
            <p>{website}</p>
            <div className='u'>{username}<button className='delbut' onClick={onDelete}><img src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png " className='dusti'/></button></div>
            {showpassword?<p>{password}</p>:<img src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" className='stars' alt='star'/>}
            
            </div>
        </div>
    )
}
export default Password