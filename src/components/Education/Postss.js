import React, { useEffect, useState } from 'react';
import PostsOne from './PostsOne';
import PostsTwo from './PostsTwo';
import PostLoadingComponent from './PostLoading';
import { CardData } from './CardData';


function Postss({ section }) {
	var PostLoading;

	if(section == "one"){
		PostLoading = PostLoadingComponent(PostsOne);
	} else {
		PostLoading = PostLoadingComponent(PostsTwo);
	}

	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});
	
	
	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/api/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
    }, [setAppState]);
    
	return (
			<>
				<div className="projContainer">
					<div className="projectsContainer">
							<PostLoading  isLoading={appState.loading} posts={appState.posts} />
					</div>
				</div>
			</>
	);
}

export default Postss;