import{user} from './models/user'

export class userservice{

setUser(user:user){
localStorage.setItem('user', JSON.stringify(user));
}

getUser():user{
	const t = localStorage.getItem("user");
	 return t? JSON.parse(t): null;
}
}