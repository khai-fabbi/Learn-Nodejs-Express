import express from 'express'
import {
  handleHomePage,
  handleCreateUser,
  handleDeleteUser,
  handleDetailUser,
  handleUpdateUser,
} from '../controller/homeController'
const router = express.Router()

const initWebRoutes = (app) => {
  router.get('/', handleHomePage)
  router.post('/users/create-user', handleCreateUser)
  router.get('/delete-user/:id', handleDeleteUser)
  router.get('/update-user/:id', handleDetailUser)
  router.post('/users/update/:id', handleUpdateUser)
  return app.use('/', router)
}

export default initWebRoutes
