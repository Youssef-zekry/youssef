export class user {
	public status_code: number = -2;
	public message: string = '';
	public firstName: string = '';
	public lastName: string = '';
	public birthdate: Date | null = null;
	public mail: string = '';
	public gender: string = '';
	public mobile: string = '';
	public address: string = '';
	public balance: number = 0;
	public userid: number = 0;
	public token: string = '';
	constructor(
	   status_code?: number,
	   message?: string,
	   firstName?: string,
	   lastName?: string,
	   birthdate?: Date,
	   mail?: string,
	   gender?: string,
	   mobile?: string,
	   address?: string,
	   balance?: number,
	   userid?: number,
	   token?: string
	) {}
	
  }