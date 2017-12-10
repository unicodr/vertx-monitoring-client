import { getServices, deleteService, addService } from './serviceApi';
import Service from '../models/Service';

getServices().then(() => {
    fetchAll();
});

(<any>window).createService = function () {
    let name: string = (<HTMLInputElement>document.getElementById('newServiceName')).value;
    let url: string = (<HTMLInputElement>document.getElementById('newServiceUrl')).value;
    addService(name, url).then(result => {
        fetchAll();
    }).catch(error => {
        alert("Error caught: " + error);
    });
};

(<any>window).deleteService = function (id: string) {
    deleteService(id).then(result => {
        fetchAll();
    }).catch(error => {
        alert("Error caught: " + error);
    });
};

function fetchAll() {
    getServices().then(result => {
        let servicesBody: string = "";

        result.forEach((service: Service) => {
            servicesBody += `<tr id="${service.id}">
                <td>${service.id}</td>
                <td>${service.name}</td>
                <td>${service.url}</td>
                <td>${service.status == undefined ? '' : service.status}</td>
                <td>${service.lastCheck == undefined ? '' : service.lastCheck}</td>
                <td><button id="${service.id}" onClick="deleteService(this.id)" class="deletebutton">Delete</button></td>
                </tr>`
        });
        const servicesElement: HTMLElement = document.getElementById('services')!;
        servicesElement.innerHTML = servicesBody;
    }).catch(error => {
        alert("Error caught: " + error);
    });
}