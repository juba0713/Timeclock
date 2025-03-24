package timeclockApi.model.service;

import org.springframework.stereotype.Service;

import timeclockApi.model.dto.UserDto;

/**
 * User Service
 * @author Julius.B
 * @added 3/24/2025
 */
@Service
public interface UserService {

	public void saveUser(UserDto inDto);
}
