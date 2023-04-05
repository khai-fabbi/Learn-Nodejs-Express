import express from 'express'
import { findAllUser } from '../controller/userController'

const router = express.Router()

const initialRouteApi = (app) => {
  router.get('/users', findAllUser)
  return app.use('/api/v1', router)
}
export default initialRouteApi
