import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomLink from '../components/customLink/CustomLink'

const contact = { id: 1, name: 'John', email: 'john@bk.ru' }

const Contact = () => {
  const { id } = useParams()
  const [isEditForm, setIsEditForm] = useState(false)

  const asEdit = () => {
    setIsEditForm(true)
  }

  const Save = () => {
    setIsEditForm(false)
  }
  const deleteContact = (id) => {}

  const renderDetailsForm = () => {
    return (
      <div>
        <div>
          <label>name </label>
          <label>{contact.name}</label>
          <br />
          <label>email </label>
          <label>{contact.email}</label>
        </div>
        <div>
          <button onClick={asEdit}>Edit</button>
          <button onClick={() => deleteContact(id)}>Delete</button>
        </div>
      </div>
    )
  }
  const renderEditForm = () => {
    return (
      <div>
        <label>name </label>
        <input value={contact.name} />
        <br />
        <label>email </label>
        <input value={contact.email} />
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
