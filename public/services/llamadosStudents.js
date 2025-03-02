async function getStudents() {
    try {
        const response = await fetch('http://localhost:3000/Students', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const Students = await response.json();
        return Students;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getStudents };

//////////LLAMADO POST//////////

async function postStudents(usuario, password, email) {
    try {

        const userData = { 
            usuario,
            password,
            email

        }

        const response = await fetch("http://localhost:3000/Students", {
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

export{postStudents}

//////////////LLAMADO UPDATE/////////////


async function updateStudents(kitPintura,id) 
{
    try {
     
        const userData = { 
            temaDelCuadro
        
        };


        


        const response = await fetch("http://localhost:3000/Students/"+id, {
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

export{updateStudents}



//////////////LLAMADO DELETE/////////////


async function deleteStudents(id) {
    try {
        const response = await fetch(`http://localhost:3000/Students/${id}`, {
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

export { deleteStudents };