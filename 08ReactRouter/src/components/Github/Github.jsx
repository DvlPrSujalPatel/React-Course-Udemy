import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const loaderData = useLoaderData(); // Rename to avoid conflict with state
    const [userData, setUserData] = useState([]); // Renamed from 'data' to 'userData'

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUserData(data); // Using 'userData' here
            });
    }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {userData.followers}
            <img src={userData.avatar_url} width={300} alt="" />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
};
