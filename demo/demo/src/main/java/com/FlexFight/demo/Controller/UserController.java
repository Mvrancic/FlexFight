package com.FlexFight.demo.Controller;

import com.FlexFight.demo.Service.UserService;
import com.FlexFight.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {
  @Autowired
  private UserService userService;

  @PostMapping("/add")
  public String addUser(@RequestBody User user) {
    userService.saveUser(user);
    return "User added successfully";
  }
  @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
