async function getProfe() {
    try {
        const response = await fetch('http://localhost:3000/profe', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getProfe };

//////////LLAMADO POST//////////

async function postProfe(usuario,password,email) {
    try {
     
        const userData = { 
            usuario,
            password,
            email
        
        };

        const response = await fetch("http://localhost:3000/profe", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        return await response.json();

    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postProfe}

//////////////LLAMADO UPDATE/////////////


async function updateProfe(usuario,password,email,id) 
{
    try {
     
        const userData = { 
            usuario, 
            password,
            email
        
        };


        


        const response = await fetch("http://localhost:3000/profe/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateProfe}



//////////////LLAMADO DELETE/////////////


async function deleteProfe(id) {
    try {
        const response = await fetch(`http://localhost:3000/profe/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deleteProfe };