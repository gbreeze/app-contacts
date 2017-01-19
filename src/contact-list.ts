import { EventAggregator } from 'aurelia-event-aggregator';
import { WebAPI } from './web-api';
import { ContactUpdated, ContactViewed } from './messages';
import { inject } from 'aurelia-framework';

@inject(WebAPI, EventAggregator)
export class ContactList {
  contacts;
  selectedId = 0;

  options = {
    handle: '.move',
    animation: 150
  }

  constructor(private api: WebAPI, ea: EventAggregator) {
    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.find(x => x.id == id);
      Object.assign(found, msg.contact);
    });
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

    //// If item isn't being dropped into its original place
    if (event.newIndex != event.oldIndex) {
      //// https://ilikekillnerds.com/2015/09/aurelia-and-dragdrop-using-sortable/
      this.swapArrayElements(this.contacts, event.newIndex, event.oldIndex)
    }

    console.log(this.contacts)

  }

  swapArrayElements(theArray: Array<any>, a: number, b: number) {
    let temp = theArray[a];
    theArray[a] = theArray[b];
    theArray[b] = temp;
  }


}

