import React from 'react'
import CustomLink from '../components/customLink/CustomLink'
const contacts = [
  { id: 1, name: 'John', year: 2000 },
  { id: 2, name: 'Lena', year: 2001 },
]
const Contacts = () => {
  const deleteContact = (id) => {
    console.log(id)
  }

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>year</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.year}</td>
            <td>
              <CustomLink to={`/contact/${contact.id}`}>details</CustomLink>
              <button onClick={() => deleteContact(contact.id)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Contacts
