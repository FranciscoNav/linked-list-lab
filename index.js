function getName(node){
    return node.name
}

function headNode(linkedList, collection){
    return collection[linkedList]
}

function next (node, collection){
    let nextAddress = node.next
    return collection[`${nextAddress}`]
}
  
function nodeAt(index, linkedList, collection){
    let currentNode = headNode(linkedList, collection);
   
    for(let i = 0; i< index; i++){
        currentNode = next(currentNode, collection);
    }

    return currentNode
}

function addressAt(index, linkedList, collection){
    if(index == 0 ){
        return linkedList
    }else{
        let lastIndex = index - 1
        let node = nodeAt(lastIndex, linkedList, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList,){
    let index = 0 
    let currentNode = headNode(linkedList, collection)
  
    while(currentNode != node){
      index++
      currentNode = next(currentNode, collection)
    }
    return index
}

function insertNodeAt(index, newAddress, linkedList, collection){
    let lastNode = nodeAt(index -1, linkedList, collection)
    let followingNode = nodeAt(index, linkedList, collection)

    let lastNodeIndex = indexAt(lastNode, collection, linkedList)
    let followingNodIndex = indexAt(followingNode, collection, linkedList)

    let lastNodeAddress =  addressAt(lastNode, linkedList, collection)
    let followingNodeAddress = addressAt(followingNode, linkedList, collection)

    lastNode.next = newAddress
    let newNode = collection[newAddress]
    newNode.next = followingNodeAddress 
}

function deleteNodeAt(index, linkedList, collection){
    let previousNode;
    let currentNode = headNode(linkedList, collection);
    for(let i = 0; i < index; i++){
        previousNode = currentNode
        currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next
}