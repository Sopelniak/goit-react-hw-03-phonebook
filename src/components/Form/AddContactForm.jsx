import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.scss';

export class AddContactForm extends Component {
  render() {
    const { name, number, handleInput, onSubmit } = this.props;
    return (
      <>
        <form className={s.form} onSubmit={onSubmit}>
          <label>
            <span>Name</span>

            <input
              onChange={handleInput}
              value={name}
              placeholder="Andrew Sopelniak"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <span>Number</span>

            <input
              onChange={handleInput}
              value={number}
              placeholder="xxx-xx-xx"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

AddContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
