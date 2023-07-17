export class user {
	constructor(
	  public status_code: number,
	  public message: string,
	  public first_name: string,
	  public last_name: string,
	  public birthdate: Date,
	  public mail: string,
	  public gender: string,
	  public mobile: string,
	  public address: string,
	  public balance: number,
	  public userid: number,
	  public token: string
	) {}
  }