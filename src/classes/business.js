import { makeObservable, observable, action } from 'mobx';

const baseUrl = 'http://localhost:8787';

class Business {
    business = {
        id:"1",
        name: "makeup style",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://d-yofi.co.il/wp-content/uploads/2014/01/134103247.jpg",
        description: "This site represents a service for people who like makeup at a high and professional level. The site presents evening makeup, everyday makeup, makeup of the highest level in the makeup world, excellent service and invites more and more professional and pleasant services"
    };

    constructor() {
        makeObservable(this, {
            business: observable,
            addBusiness: action,
        });
    }

    async addBusiness(newBusiness) {
        try {
            const res = await fetch(`${baseUrl}/businessData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newBusiness)
            });

            if (res.status === 200) {
                const updatedBusiness = await res.json();
                this.business = { ...this.business, ...updatedBusiness };
            }
        } catch (error) {
            console.log(error);
        }
    }

    get getBusiness() {
        return this.business;
    }
}

const singleton = new Business();
export default singleton;
