package timeclockApi.model.dao.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

/**
 * User Entity 
 * @author Julius.B
 * @added 3/24/2025 
 */
@Entity
@Table(name="users")
@Data
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String email;	
	private String firstName;
	private String middleName;	
	private String lastName;	
	private String birthDate;	
	private String gender;	
	private String empStatus;	
	private String hireDate;	
	private String team;	
	private String role;	
	private String username;	
	private String password;
	private boolean isDeleted;
	
	@Override
	public String toString() {
	    return "UserEntity{" +
	            "email: '" + email + '\'' +
	            ", firstName: '" + firstName + '\'' +
	            ", middleName: '" + middleName + '\'' +
	            ", lastName: '" + lastName + '\'' +
	            ", birthDate: '" + birthDate + '\'' +
	            ", gender: '" + gender + '\'' +
	            ", empStatus: '" + empStatus + '\'' +
	            ", hireDate: '" + hireDate + '\'' +
	            ", team: '" + team + '\'' +
	            ", role: '" + role + '\'' +
	            ", username: '" + username + '\'' +
	            ", password: '" + password + '\'' +
	            '}';
	}

}
