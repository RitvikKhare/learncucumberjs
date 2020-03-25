import fetch from 'node-fetch'

export class ServiceCalls {

	urlString: string;
	methodString: string;
	headerKeys: string[];
	headerValues: string[];
	responseKeys: any[];
	responseValues: any[];
	payloadValue: any;
	responseJson: any;

	constructor() {
		this.urlString = "";
		this.methodString = "";
		this.headerKeys = [];
		this.headerValues = [];
		this.responseKeys = [];
		this.responseValues = [];
	}

	async setURL(url: string) {
		this.urlString = url;
	}

	async setMethod(method: string) {
		this.methodString = method;
	}

	async setHeaders(headerKey: string, headerVal: string) {
		this.headerKeys.push(headerKey);
		this.headerValues.push(headerVal);
	}

	async setResponse(responseKey: any, responseValue: any) {
		this.responseKeys.push(responseKey);
		this.responseValues.push(responseValue);
	}

	async setPayload(payload: any) {
		this.payloadValue = payload;
	}

	async makeServiceCall() {
		let f1: string = this.headerKeys[0];
		let f2: string = this.headerValues[0];
		if (this.methodString.toLowerCase() === 'get') {

			await fetch(this.urlString, {
				method: this.methodString,
				headers: { f1: f2 }
			})
				.then(res => res.json())
				.then((json) => {
					console.log(json);
					this.responseJson = json;
					console.log(this.responseJson.id + ' | value from JSON');
					for(let cnt=0;cnt<this.responseKeys.length;cnt++)
					{
						let bidString :string = this.responseKeys[cnt];
		     		    console.log('bidString | ' + bidString);
			 			console.log(this.responseJson.bidString + ' | 2 value from JSON');
					}
				});

		} else if (this.methodString.toLowerCase() === 'post') {
			const body = { a: 1 };
			await fetch(this.urlString, {
				method: 'post',
				body: JSON.stringify(body),
				headers: { 'Content-Type': 'application/json' }
			})
				.then(res => res.json())
				.then(json => console.log(json));
		} else {
			await console.log('Service Method Set is incorrect/unhandled ' + this.methodString);
		}
	}


}

let obj1 = new ServiceCalls();
obj1.setURL('https://api.github.com/users/RitvikKhare');
obj1.setMethod('GET');
obj1.setHeaders('Content-Type','application/json');
obj1.makeServiceCall();
obj1.setResponse('id',28248633);
obj1.setResponse('node_id','MDQ6VXNlcjI4MjQ4NjMz');