import { nanoid } from 'nanoid';
import { Component } from 'react';
import { AddContactForm } from './Form/AddContactForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  filterContacts = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleClickDelete = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== e.target.id
        ),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <AddContactForm addContact={this.addContact} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Filter filter={filter} handleInput={this.handleInput} />
            <Contacts
              contacts={contacts}
              filterContacts={this.filterContacts}
              handleClickDelete={this.handleClickDelete}
            />
          </Section>
        )}
      </>
    );
  }
}

export { App };
