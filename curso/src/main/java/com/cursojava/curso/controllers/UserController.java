package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.UserDao;
import com.cursojava.curso.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserDao userDao;
    @RequestMapping(value = "/users/{id}" , method = RequestMethod.GET)
    public User  getUser(@PathVariable String id){
        User user = new User();

        user.setUsername("Giovana");
        user.setLastname("Cardo");
        user.setEmail("prueba@gmail.com");
        user.setPhonenumber("123");
        user.setPassword("1234");
        return user;
    }

    @RequestMapping(value = "/users" , method = RequestMethod.POST)
    public void  createUser(@RequestBody User user){

        userDao.createUser(user);
    }

    @RequestMapping(value = "/users")
    public List<User> getUsers(){
        return userDao.getUsuarios();
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable Long id){

        userDao.deleteUser(id);


    }
}
