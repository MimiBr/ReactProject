import { makeObservable, observable, computed, action, runInAction } from 'mobx';
const baseUrl = 'http://localhost:8787'
class Services {
    list = [
        {
            id: "546",
            name: "Evening makeup",
            price: "2500",
            duration: "100",
            descraption: "Professional evening make-up at global make-up market",
            img: "https://mornoam.co.il/wp-content/uploads/2022/05/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%99%D7%A4%D7%95%D7%A8-%D7%91%D7%A8%D7%99%D7%90%D7%99%D7%9D.jpg"
        },
        {
            id: "546",
            name:"Makeup course",
            price: "2500",
            descraption:"Professional courses led by professional and leading hairdressers",
            duration: "100",
            img: "https://makemeup.co.il/wp-content/uploads/2022/09/TROLL_3.jpg"

        },
        {
            id: "800",
            name: "Makeup and care products",
            descraption: "fhfgfg gbdgdbdtdg dgdgdgdgdgdn fgdgdgd dgdgdbc ",
            price: "400",
            duration: "100",
            img: "https://www.yooli.co.il/wp-content/uploads/2018/07/cdp635194247428721227.jpg"

        },
        //  {
        //     id:"900",
        //      name:"רעררק",
        //     descraption:"fhfgfg gbdgdbdtdg dgdgdgdgdgdn fgdgdgd dgdgdbc ",
        //     price:"350",
        //     duration:"120"

        //  },

    ];
    constructor() {
        makeObservable(this, {
            list: observable,
            // addService: action,
            getAllServices: computed,
        });

    }

    async addService(Service) {
        try {
            const res = await fetch(`${baseUrl}/service`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(Service)
            });
            console.log("res", res)
            if (res.status == 200) {
                this.list.push(...[Service]);
                console.log("sucseed")
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    get getAllServices() {
        return this.list;
    }
}
const singleton = new Services(); // single object as a class instance
export default singleton; /// export singleton instanceAppointment