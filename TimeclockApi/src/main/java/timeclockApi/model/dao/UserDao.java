package timeclockApi.model.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import timeclockApi.model.dao.entity.UserEntity;

public interface UserDao extends JpaRepository<UserEntity, Integer>{
	
}
