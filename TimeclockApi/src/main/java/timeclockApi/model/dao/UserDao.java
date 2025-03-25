package timeclockApi.model.dao;

import java.util.Optional;

import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import timeclockApi.model.dao.entity.UserEntity;

public interface UserDao extends JpaRepository<UserEntity, Integer>{
	
	public static final String FIND_USER_BY_USERNAME = ""
			+ "SELECT e.* "
			+ "FROM users e "
			+ "WHERE e.username = :username "
			+ "AND e.is_deleted = false ";
	
	@Query(value=FIND_USER_BY_USERNAME, nativeQuery=true)
	public Optional<UserEntity> findUserByUsername(String username) throws DataAccessException;
}
