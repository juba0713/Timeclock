package timeclockApi.controllers.data;

import java.util.Map;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import timeclockApi.controllers.data.UserData;

/**
 * User Data
 * @author Julius B.
 * @added 3/20/2025
 */
@Data
public class UserData {
	
	@NotBlank(message="Email is required!")
	private String email;
	@NotBlank(message="First Name is required!")
	private String firstName;
	@NotBlank(message="Middle Name is required!")
	private String middleName;
	@NotBlank(message="Last Name is required!")
	private String lastName;
	@NotBlank(message="Birthdate is required!")
	private String birthDate;
	@NotBlank(message="Gender is required!")
	private String gender;
	@NotBlank(message="Employee Status is required!")
	private String employeeStatus;
	@NotBlank(message="Hire Date is required!")
	private String hireDate;
	@NotBlank(message="Team is required!")
	private String team;
	@NotBlank(message="User Role is required!")
	private String userRole;
	@NotBlank(message="Username is required!")
	private String username;
	@NotBlank(message="Password is required!")
	private String password;
	private Boolean useEmail;
	
	private Map<String, String> errors;
	
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
