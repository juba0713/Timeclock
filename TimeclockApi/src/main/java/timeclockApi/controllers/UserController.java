package timeclockApi.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import timeclockApi.model.data.UserData;

@RestController
public class UserController {

	@PostMapping("/user/new")
	public String newUser(@RequestBody UserData userData) {
		
		System.out.println(userData.toString());
		
		return "User Created Successfully";
	}
	
}
