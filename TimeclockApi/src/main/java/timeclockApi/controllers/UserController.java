package timeclockApi.controllers;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import timeclockApi.controllers.data.UserData;
import timeclockApi.model.dto.UserDto;
import timeclockApi.model.service.UserService;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;

	@PostMapping("/user/new")
	public ResponseEntity<?> newUser(@Valid @RequestBody UserData userData, BindingResult bindingResult) {
		
		System.out.println(userData.toString());

        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            
            userData.setErrors(errors);
            
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(userData);
        }
        
        UserDto inDto = new UserDto();
        
        inDto.setUserData(userData);
        
        userService.saveUser(inDto);
  
        return ResponseEntity.status(HttpStatus.CREATED).build();
	}
}
