import React from 'react';
import './ProfilePage.css';
import './Tweet'
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent } from '@ionic/react';
import Tweet from './Tweet';

interface ContainerProps {
  name: string;
}

// type tweet
const tweets = [
    {
        name: "Sasanka",
        turl: "https://pbs.twimg.com/profile_images/969619375564062728/x_zXQ4Oz_400x400.jpg",
        date: "9th July 2020",
        uid: "@kosuru.sasanka",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name: "Sasanka",
        turl: "https://pbs.twimg.com/profile_images/969619375564062728/x_zXQ4Oz_400x400.jpg",
        date: "9th July 2020",
        uid: "@kosuru.sasanka",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];

const ProfilePage: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
        <img className="profilepic"  src="https://media1.popsugar-assets.com/files/thumbor/XS4YnHClQ1RZMm7gMWAtPORSNA0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/04/30/868/n/1922283/1f2e59ed5ae773b06f2879.82877284_/i/Does-Iron-Man-Die-Avengers-Infinity-War.jpg" />
        <IonList>
            {tweets.map((tweet, i) => (
                    <Tweet 
                        name={tweet.name}
                        turl={tweet.turl}
                        date={tweet.date}
                        uid={tweet.uid}
                        content={tweet.content}
                        />
            ))}
        </IonList>
    </div>
  );
};

export default ProfilePage;