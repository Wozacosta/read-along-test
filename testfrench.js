var jsonfile = require('jsonfile')
var file = './align3.json'
jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)
})/**
 * Created by wozacosta on 2/28/17.
 */
