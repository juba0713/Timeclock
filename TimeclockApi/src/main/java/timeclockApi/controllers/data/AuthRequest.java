package timeclockApi.controllers.data;

import lombok.Data;

@Data
public class AuthRequest {

	private String username;
    private String password;
    
    @Override
    public String toString() {
    	return "Username: " + username + "\n"
    			+ "Password: " + password;
    }
}
