
export default class Service {
  id: string;
  name: string;
  url: string;
  status: string;
  lastCheck: string;

  constructor(id: string, name: string, url: string, status: string, lastCheck: string) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.status = status;
    this.lastCheck = lastCheck;
  }

}
