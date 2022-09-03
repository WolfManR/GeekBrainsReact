import React, { useEffect, useState } from 'react'
import CustomLink from '../components/customLink/CustomLink'
import { db } from '../firebase/config'

const Contacts = () => {
  const [name, setName] = useState('')
  const [contacts, setContacts] = useState({})
  const deleteContact = (id) => {
    db.child(`contacts/${id}`).remove()
  }
  const addContact = () => {
    if (name.length < 2) return
    db.child('contacts').push({ name: name })
  }

  useEffect(() => {
    db.child('contacts').on('value', (snap) => {
      if (snap.val() !== null) setContacts({ ...snap.val() })
      else setContacts({})
    })

    return () => {
      setContacts({})
    }
  }, [])

  return (
    <div>
      <div>
        <label>name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={addContact}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>year</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(contacts).map((id) => {
            return (
              <tr key={id}>
                <td>{contacts[id].name}</td>
                <td>{contacts[id].year}</td>
                <td>
                  <CustomLink to={`/contact/${id}`}>details</CustomLink>
                  <button onClick={() => deleteContact(id)}>delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Contacts
