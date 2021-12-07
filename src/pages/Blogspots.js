import React from 'react';
import BlogspotSummery from "../components/BlogspotSummery";
import posts from '../data/posts.json';

const Blogspots = () => {

    console.log(posts);


    return (
        <div>
            <h2>Alle posts van de afgelopen tijd</h2>
            <BlogspotSummery inputArray={posts}/>
        </div>
    );
};

export default Blogspots;