class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

class customLinkedList:
    def __init__(self, data):
        self.head = None
        self.tail = None
        self.size = 0

    def append(self, data):
        new_node = Node(data)
        new_node.next = self.head
        if self.size == 0:
            self.tail = new_node
        self.size += 1
    
    def delete_data(self, data):
        current = self.head
        previous = None
        while current:
            if current.data == data:
                if previous:
                    previous.next = current.next
                else:
                    self.head = current.next
                if current == self.tail:
                    self.tail = previous
                self.size -= 1
                return True 
            previous = current 
            current = current.next 
        return False
    
    def retrieve(self):
        elements = []
        current = self.head
        while current:
            elements.append(current.data)
            current = current.next 
        return elements



numbers = [1,2,3,4,5,10]
print(numbers[3])