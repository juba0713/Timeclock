

export type SaveUserParams = {
    email: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    birthDate: string;
    gender: string;
    employeeStatus: string;
    hireDate: string;
    team: string;
    userRole: string;
    username: string;
    password: string;
    useEmail: boolean;
  };

  
export async function saveUser(params : SaveUserParams) : Promise<boolean>{

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${apiUrl}/user/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
    
      if (!response.ok) {
        return false;
      }
    
      return true;
}
  