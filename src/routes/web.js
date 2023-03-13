import express from 'express'
import { handleHomePage, handleCreateUser } from '../controller/homeController'
const router = express.Router()

const initWebRoutes = (app) => {
  router.get('/', handleHomePage)
  router.post('/users/create-user', handleCreateUser)

  return app.use('/', router)
}

export default initWebRoutes
