import{user} from './models/user'

export class userservice{

getUser():user{
	const t = localStorage.getItem("user");
	 return t? JSON.parse(t): null;
}
setUser(user: user){
	localStorage.setItem('user', JSON.stringify(user));
}
}