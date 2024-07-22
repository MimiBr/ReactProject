import {makeObservable, observable, computed, action, runInAction} from 'mobx';

const baseUrl='http://localhost:8787'
class Appointment {
    list = [{
        id: "758",
        serviceType: "11",
        dateTime: "2024-05-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
        clientName: "אבי כהן",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    },{
        id: "859",
        serviceType: "12",
        dateTime: "2024-07-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
        clientName: "רובי לוי",
        clientPhone: "050-588888",
        clientEmail: "m@m.com",
    }];
    constructor(){
        makeObservable(this, {
            list: observable,
            addAppointment: action,
            getAllApointments: computed,
        });
       
    }

    // addAppointment(appointment){
    //     fetch(`${baseUrl}/appointment`, {
    //         method: 'POST',
    //         body: JSON.stringify(appointment)
    //     }).then((res) => {
    //         res.json();
    //     }).then(data => {
    //         console.log(data);//undefined
    //         this.list.push(...appointment);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }
    async addAppointment(appointment) {
        try{
        const res = await fetch(`${baseUrl}/appointment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
            body: JSON.stringify(appointment)
        });
        console.log('res',res);
        if(res.status==200){
            this.list.push(...[appointment]);
            console.log(this.list);          

        }
    }
        catch(error) {
            console.log(error);
        }
    }
    
    get getAllApointments() {
        return this.list.slice().sort((objA, objB) => new Date(objA.dateTime) - new Date(objB.dateTime));
    }
}
const singleton = new Appointment(); // single object as a class instance
export default singleton; /// export singleton instanceAppointment