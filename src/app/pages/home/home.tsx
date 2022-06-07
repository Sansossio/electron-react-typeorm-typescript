import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { TodoListEntity } from '../../database/entity/todo-list.entity'
import { useRepository } from '../../database/react'

export const Home = () => {
  const [description, setDescription] = useState('')
  const [todoList, setTodoList] = useState<TodoListEntity[]>([])
  const todoListRepository = useRepository(TodoListEntity)
  const descriptionInput = useRef(null)

  const updateList = async () => {
    const list = await todoListRepository.find({
      order: {
        createdAt: 'DESC'
      }
    })
    setTodoList(list)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!description) {
      return
    }

    await todoListRepository.save({ description })

    setDescription('')
    descriptionInput.current.value = ''
    await updateList()
  }

  const handleDelete = (id: number) => async () => {
    await todoListRepository.delete(id)
    await updateList()
  }

  useEffect(() => {
    updateList()
  }, [])

  return (
    <div>
      <h1>TODO List</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add description</Form.Label>
          <Form.Control placeholder='Add todo description' onChange={e => setDescription(e.target.value)} ref={descriptionInput} />
        </Form.Group>
        <Button type="submit" variant="primary">Add</Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Created at</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => (
            <tr key={`todo-${todo.id}`}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.createdAt.toISOString()}</td>
              <td>
                <Button variant="danger" onClick={handleDelete(todo.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
