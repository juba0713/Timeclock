package timeclockApi.model.dto;

import lombok.Data;
import timeclockApi.controllers.data.UserData;

/**
 * A DTO to use for transaction between UserController & UserService
 * @author Julius.B
 * @added 3/24/2025
 */
@Data
public class UserDto {
	
	
	private UserData userData;
}
