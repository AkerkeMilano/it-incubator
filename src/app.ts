import express from 'express'
import {SETTINGS} from "./settings"
import { videosRouter } from './videos'

export const app = express()
app.use(express.json()) // добавление ко всем реквестам body и query
 
//app.get(SETTINGS.PATH.VIDEOS, getVideosController)
app.use(SETTINGS.PATH.VIDEOS, videosRouter)