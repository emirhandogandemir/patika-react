import PropTypes from "prop-types"


function User({ad,surName,isLoggedIn,friends,adress}){
    console.log()
    if(!isLoggedIn){
        return <div>Giriş Yapmadınız</div>
    }
    
    
    return (

<div>
    { `${ad} ${surName}`}
    
    {friends && friends?.map((friend)=> 
    
    <div key ={friend.id}>{friend.name}</div>)}
    
    {adress.title} {adress.zip}
    
   </div>
    )
}

User.propTypes ={
    name:PropTypes.string.isRequired,
    surName:PropTypes.string.isRequired,
    isLoggedIn:PropTypes.bool.isRequired,
    friends:PropTypes.array
}
User.defaultProps ={
    isLoggedIn:false
}
export default User;