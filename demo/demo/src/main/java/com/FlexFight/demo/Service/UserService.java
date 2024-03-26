package com.FlexFight.demo.Service;

import com.FlexFight.demo.model.User;

import java.util.List;

public interface UserService {
  public User saveUser(User user);

  public List<User> getAllUsers();
}
