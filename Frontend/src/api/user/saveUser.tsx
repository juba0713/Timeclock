

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

export type result = {
    status : number;
    errors : Record<string, string>;
}
  
export async function saveUser(params : SaveUserParams){

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${apiUrl}/user/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();
      
      return {
        status: response.status,
        errors: data.errors
      };
}
  