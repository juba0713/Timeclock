package timeclockApi.model.data;

import lombok.Data;

/**
 * User Data
 * @author Julius B.
 * @added 3/20/2025
 */
@Data
public class UserData {

	private String email;
	
	private String firstName;
	
	private String middleName;
	
	private String lastName;
	
	private String birthDate;
	
	private String gender;
	
	private String employeeStatus;
	
	private String hireDate;
	
	private String team;
	
	private String userRole;
	
	private String username;
	
	private String password;
	
	private Boolean useEmail;
	
	@Override
	public String toString() {
	    return "User{" +
	            "email='" + email + '\'' +
	            ", firstName='" + firstName + '\'' +
	            ", middleName='" + middleName + '\'' +
	            ", lastName='" + lastName + '\'' +
	            ", birthDate='" + birthDate + '\'' +
	            ", gender='" + gender + '\'' +
	            ", employeeStatus='" + employeeStatus + '\'' +
	            ", hireDate='" + hireDate + '\'' +
	            ", team='" + team + '\'' +
	            ", userRole='" + userRole + '\'' +
	            ", username='" + username + '\'' +
	            ", password='" + password + '\'' +
	            ", useEmail=" + useEmail +
	            '}';
	}

}
