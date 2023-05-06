const express = require ('express')
const router = express.Router()

router.get('/',(request,response) =>{
    response.send("This is user page")
})

// dynamic express
router.get('/newUser',(request,response) =>{
    // response.send("This is new user")
    response.render('users/new')
})

router.post('/',(request,response) =>{
  const isAValidUser = true
  if(isAValidUser)
  {
    users.push({name:request.body.firstname})
    response.redirect(`user/${users.length-1}`)
  }
  else{
    console.log("Erroe")
    response.render('user/new',{firstname : request.body.firstname})

  }
  console.log(request.body.firstname)
  response.send('New User created successfully')
})

router.get('/:id',(request,response) =>{
    response.send(`user id is ${request.params.id}`)
    console.log(request.user.Name)
}) 






router.get('/:id',(request,response)=>{
    // response.send(`user id is ${request.params.id}`)
    console.log(request.servicePage.Service)
    console.log(request.servicePage.description)

    response.write(request.servicePage.Service)
    response.end(request.servicePage.description)


})








//middlewear parameter params it get repeadly reloaded,using next the change will move to next
router.param('id', (request,response, next, id) => {
    // console.log('request.params.id')
    // console.log(id)
    request.user = users[id]

    next()
})

const users=[
    { 
    
        Name:'one'
      } ,
      {
        Name:'two'
      } ,
      {
        Name:'three'
      },
      {
        Name:'four'
      },
      {
        Name:'five'
      },
      {
        Name:'six'
      },
      {
        Name:'seven'
      }


];
//different parameter
// router.get('/:id',(request,response) =>{
//     response.send(`id is ${request.params.id}`)
// })
// router.put('/:id',(request,response) =>{
//     response.send(`id is ${request.params.id}`)
// })
// router.delete('/:id',(request,response) =>{
//     response.send(`id is ${request.params.id}`)
// })

//concurrency concept

router.route('/:id')
    .get((request,response)=>{
        console.log(request.user);
        response.send(`Get methot on user page with id ${request.params.id}`)
    })
    .put((request,response) =>{
      response.send(`id is ${request.params.id}`)
    })
    .delete((request,response)=>{
        response.send(`Delete method on user page with id ${request.params.id}`)
    })





module.exports = router
