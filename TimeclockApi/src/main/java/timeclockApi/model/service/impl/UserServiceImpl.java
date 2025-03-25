package timeclockApi.model.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import timeclockApi.model.dao.entity.UserEntity;
import timeclockApi.model.dto.UserDto;
import timeclockApi.model.logic.UserLogic;
import timeclockApi.model.service.UserService;

/**
 * User Service Implementation
 * @author Julius.B
 * @added 3/24/2025
 */
@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserLogic userLogic;
	
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public void saveUser(UserDto inDto) {
		
		UserEntity user = new UserEntity();
		user.setEmail(inDto.getUserData().getEmail());
		user.setFirstName(inDto.getUserData().getFirstName());
		user.setMiddleName(inDto.getUserData().getMiddleName());
		user.setLastName(inDto.getUserData().getLastName());
		user.setBirthDate(inDto.getUserData().getBirthDate());
		user.setEmpStatus(inDto.getUserData().getEmployeeStatus());
		user.setHireDate(inDto.getUserData().getHireDate());
		user.setTeam(inDto.getUserData().getTeam());
		user.setRole(inDto.getUserData().getUserRole());
		user.setUsername(inDto.getUserData().getUsername());
		user.setPassword(encoder.encode(inDto.getUserData().getPassword()));
		
		userLogic.saveUser(user);
	}
}
