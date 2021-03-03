import * as fs from 'fs'
import * as Mustache from 'mustache'
import * as path from 'path'
import { data } from '../data/'

const template = fs.readFileSync(path.join(__dirname, '../README.template')).toString()
const content = Mustache.render(template, data)

fs.writeFileSync(path.join(__dirname, '../README.md'), content)