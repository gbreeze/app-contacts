import { EventAggregator } from 'aurelia-event-aggregator';
import { WebAPI } from './web-api';
import { ContactUpdated, ContactViewed } from './messages';
import { inject } from 'aurelia-framework';
import Sortable = require('sortablejs');


@inject(WebAPI, EventAggregator)
export class ContactList {
  contacts;
  selectedId = 0;

  options = {}

  constructor(private api: WebAPI, ea: EventAggregator) {
    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.find(x => x.id == id);
      Object.assign(found, msg.contact);
    });
  }

  attached() {
    //Sortable.create(document.querySelector(".list-group"), {})
  }

  created() {
    this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }


  func(customEvent: CustomEvent) {
    let event = customEvent.detail;
    console.log("event", event);
  }
}