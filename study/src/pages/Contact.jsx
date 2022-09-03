import { useEffect, useState, setState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CustomLink from '../components/customLink/CustomLink'
import { db } from '../firebase/config'

const Contact = () => {
  const { id } = useParams()
  const [isEditForm, setIsEditForm] = useState(false)
  const [contact, setContact] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    db.child(`contacts/${id}`)
      .once('value')
      .then((snap) => {
        if (snap.val() === null) {
          setContact({})
          return
        }

        setContact({ ...snap.val() })
      })
    return () => {
      setContact({})
    }
  }, [])

  const Save = () => {
    db.child(`contacts/${id}`).update(contact)
    setIsEditForm(false)
  }
  const deleteContact = (id) => {
    db.child(`contacts/${id}`).remove()
    navigate('/contacts')
  }

  const renderDetailsForm = () => {
    return (
      <div>
        <div>
          <label>name </label>
          <label>{contact.name}</label>
          <br />
          <label>email </label>
          <label>{contact.email}</label>
          <br />
          <label>year </label>
          <label>{contact.year}</label>
        </div>
        <div>
          <button onClick={() => setIsEditForm(true)}>Edit</button>
          <button onClick={() => deleteContact(id)}>Delete</button>
        </div>
      </div>
    )
  }
  const renderEditForm = () => {
    return (
      <div>
        <label>name </label>
        <input
          value={contact.name}
          onChange={(e) => setContact({ ...contact, ['name']: e.target.value })}
        />
        <br />
        <label>email </label>
        <input
          value={contact.email}
          onChange={(e) =>
            setContact({ ...contact, ['email']: e.target.value })
          }
        />
        <br />
        <label>year </label>
        <input
          value={contact.year}
          onChange={(e) => setContact({ ...contact, ['year']: e.target.value })}
        />
        <br />
        <button onClick={Save}>Save</button>
      </div>
    )
  }

  return (
    <div>
      <div>
        <CustomLink to="/contacts">To List</CustomLink>
      </div>
      id:{id}
      {isEditForm ? renderEditForm() : renderDetailsForm()}
    </div>
  )
}

export default Contact
