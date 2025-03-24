package timeclockApi.model.logic;

import org.springframework.stereotype.Service;

import timeclockApi.model.dao.entity.UserEntity;


/**
 * User Logic
 * @author Julius.B
 * @added 3/24/2025
 */
@Service
public interface UserLogic {

	public void saveUser(UserEntity entity);
}
