package com.cursojava.curso.dao;

import com.cursojava.curso.models.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Repository
@Transactional
public class UserDaoImp implements UserDao {

    @PersistenceContext
    private EntityManager entityManager;

   @Override
   @Transactional
    public List<User> getUsuarios() {
        String query = "FROM user";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void deleteUser(Long id) {

       User user = entityManager.find(User.class,id);
       entityManager.remove(user);

    }

    @Override
    public void createUser(User user) {
     entityManager.merge(user);
    }
}
