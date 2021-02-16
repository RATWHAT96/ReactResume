import React, {useState} from 'react';
import './Cards.css';

 
/* hi */
const PostsTwo = (props) => {
	const { posts } = props;

	const [clickOne, setClickOne] = useState(true);
	const [clickTwo, setClickTwo] = useState(false);

	const handleClickOne = () => {setClickOne(true);setClickTwo(false);}
	const handleClickTwo = () => {setClickOne(false);setClickTwo(true);}	


	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<>
			<div className="skillsSelector">
				<ul className="horizontal-list">
					<li onClick={handleClickOne} className={clickOne ? 'skillSelectActive' : 'skillSelect'}>Education</li>
					<li onClick={handleClickTwo} className={clickTwo ? 'skillSelectActive' : 'skillSelect'}>Software Engineering</li>
				</ul>
			</div>
			<div className='cards'>
					{posts.map((post) => {
						return (
							<> 
								<li className={(post.excerpt=="three" && clickOne) ? 'cards__item wide' : 'no__cards'}>
									<figure className='cards__item__pic-wrap' data-category={post.title}>
										<div className='cards__item__info'>
										<img className='cards__item__img' alt='Travel Image' src={post.image} />
										</div>
									</figure>
								</li>
                                <li className={(post.excerpt=="four" && clickTwo) ? 'cards__item' : 'no__cards'}>
									<figure className='cards__item__pic-wrap' data-category={post.title}>
										<div className='cards__item__info'>
										<img className='cards__item__img' alt='Travel Image' src={post.image} />
										</div>
									</figure>
								</li>
							</>
						);
					})}
			</div>
		</>
	);
};
export default PostsTwo;

/*
<a href="https://iconscout.com/icons/git-community" target="_blank">Git community Icon</a> by <a href="https://iconscout.com/contributors/WHCompare">Alexiuz AS</a> on <a href="https://iconscout.com">Iconscout</a>
<a href="https://iconscout.com/icons/documentation" target="_blank">Documentation Icon</a> by <a href="https://iconscout.com/contributors/hana-arif">Vectors Point</a> on <a href="https://iconscout.com">Iconscout</a>
<a href="https://iconscout.com/icons/user-story" target="_blank">User story Icon</a> by <a href="https://iconscout.com/contributors/sbts2018" target="_blank">SBTS</a>
<a href="https://iconscout.com/icons/testing" target="_blank">Testing Icon</a> by <a href="https://iconscout.com/contributors/bzzricon" target="_blank">BZZRICON Studio</a>
*/

