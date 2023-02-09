def dfs(visits,dictonary,stack):
    while(len(stack)!=0):
        #taking current element from the stack
        curr=stack.pop()
        #If the current element is not visited the if block will execute
        if(visits[curr]==False):
            #setting curr element to true that means marking as visited
            visits[curr]=True
            #adding or appending the current element to the orderofcourse
            orderofcourse.append(curr)
            #assigning the curr element adjacency list to the x variable
            random=dictonary[curr]
        for j in random :
            #checking every adjacency list item is visited or not it not visited (False).
            if(visits[j]==False):
                # if not visited it will append to the stack
                stack.append(j)
#list of vertices
listofcourses=['full','front','back','html','css','js','c','java','python']
#adjacency lists
prerequisites=[['front','back'],['html','css','js','full'],['c','java','python','full'],['front'],['html','front'],['html','css','front'],['c','back'],['c','back'],['java','back']]
dictonary={}
visits={}
stack=[]
orderofcourse=[]
for i in range(len(listofcourses)):
    #mapping all the adjacency lists to the vertices using dictionaries 
    dictonary[listofcourses[i]]=prerequisites[i]
    #initially setting all the vertices to false (here false is unvisited true is visited)
    visits[listofcourses[i]]=False
#adding stating element to the stack
stack.append(listofcourses[0])
dfs(visits,dictonary,stack)
while((len(orderofcourse)>0)):
      print(orderofcourse.pop())
