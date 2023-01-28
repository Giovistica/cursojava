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

    @RequestMapping(value = "/users" , method = RequestMethod.POST)
    public void  createUser(@RequestBody User user){

        userDao.createUser(user);
    }


    @RequestMapping(value = "/users",  method = RequestMethod.GET)
    public List<User> getUsers(){
        return userDao.getUsuarios();
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable Long id){

        userDao.deleteUser(id);


    }
}
