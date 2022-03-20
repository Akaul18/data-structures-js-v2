const Node = require('./node')

class BinarySearchTree {
    constructor() {
        this.rootNode = null
    }


    insert(value) {
        const newNode = new Node(value)
        if (!this.rootNode) {
            this.rootNode = newNode
        } else {
            this.insertNode(this.rootNode, newNode)
        }
        return this
    }

    insertNode(currentNode, newNode) {
        if (newNode.value > currentNode.value) {
            if (currentNode.right === null) {
                currentNode.right = newNode
            } else {
                this.insertNode(currentNode.right, newNode)
            }
        } else if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode
            } else {
                this.insertNode(currentNode.left, newNode)
            }
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(2)
bst.insert(7)
bst.insert(18)
bst.insert(11)
console.log(bst)


//             10
//     5               15
// 2       7       11      18