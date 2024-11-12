import React from 'react';
import RotatingText from 'react-rotating-text';

export default function RotateText() {
    return <>
        <RotatingText 
        items={['Html / Css / Js', 'NextJs / React', 'Java / C++', 'PostgreSql / Supabase', 'Git | GitLab / GitHub' ]} 
        color="#fff"
        typingInterval={75}
        deletingInterval={75}
        className=" text-sm md:text-4xl font-bold ml-4 md:ml-96"
        />
    </> 
    
}