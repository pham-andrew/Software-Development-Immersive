//in class coding example

var BinarySearchTree = function(value) {
  var obj = {}
  
  obj.value = value
  obj.left = null
  obj.right = null
  
  obj.insert = function(value) {
    if (value > obj.value) {
        if (obj.right === null) {
            obj.right = BinarySearchTree(value)
        } else {
            obj.right.insert(value)
        }
    } else {
        if (obj.left === null) {
            obj.left = BinarySearchTree(value)
        } else {
            obj.left.insert(value)
        }
    }
  }
  
  obj.contains = function(value) {
      if (obj.value === value) return true
      
      if (value < obj.value) {
        if (obj.left === null) return false
        
        if (obj.left.value === value) {
            return true
        } else {
            return obj.left.contains(value)
        }
      } else {
        if (obj.right === null) return false 
        
        if (obj.right.value === value) {
            return true
        } else {
            return obj.right.contains(value)
        }
      }
  }
  
  obj.depthFirstLog = function(callback) {
      callback(obj.value)
      if (obj.left !== null) obj.left.depthFirstLog(callback)
      if (obj.right !== null) obj.right.depthFirstLog(callback)
  }
  
  return obj
};

let bst = BinarySearchTree(5)
