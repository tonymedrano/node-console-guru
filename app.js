/*
 * Filename: /Users/tonymedrano/Desktop/node-guru/app.js
 * Path: /Users/tonymedrano/Desktop/node-guru
 * Created Date: Tuesday, January 15th 2019, 11:30:55 am
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */


'use strict'

const Printer = require('./printer')

const p = Printer.create("NODE GURU")

p.print("Hello World!", "success")
p.print("Hello World!", "warning")
p.print("Hello World!", "info")
p.print("Hello World!", "error")