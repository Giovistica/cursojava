package com.cursojava.curso.dao;

import com.cursojava.curso.models.User;

import java.util.List;

public interface UserDao {

    List<User> getUsuarios();

    void deleteUser(Long id);

    void createUser(User user);
}
