package timeclockApi.model.logic.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import timeclockApi.model.dao.UserDao;
import timeclockApi.model.dao.entity.UserEntity;
import timeclockApi.model.logic.UserLogic;

/**
 * User Logic Implementation
 * @author Julius.B
 * @added 3/24/2025
 */
@Service
public class UserLogicImpl implements UserLogic {
	
	@Autowired
	private UserDao userDao;

	@Override
	public void saveUser(UserEntity entity) {
		
		userDao.save(entity);
	}
	
	
	
	
}
