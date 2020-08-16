import React from 'react';
import './ProfilePage.css';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent, IonGrid, IonRow, IonCol, IonButton} from '@ionic/react';
import Tweet from '../Tweet/Tweet';

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
        type: "R",
        likes: 100,
        retweets: 25,
        comments: 9,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name: "Sasanka",
        turl: "https://pbs.twimg.com/profile_images/969619375564062728/x_zXQ4Oz_400x400.jpg",
        date: "9th July 2020",
        uid: "@kosuru.sasanka",
        type: "L",
        likes: 120,
        retweets: 45,
        comments: 19,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];

const ProfilePage: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <div className="coverdiv">
        <img className="coverpic"  src="https://media1.popsugar-assets.com/files/thumbor/XS4YnHClQ1RZMm7gMWAtPORSNA0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/04/30/868/n/1922283/1f2e59ed5ae773b06f2879.82877284_/i/Does-Iron-Man-Die-Avengers-Infinity-War.jpg" />
      </div>
      <IonGrid>
        <IonRow>
          <IonCol size="1" size-sm>
            <img className="profilepic"  src="https://media1.popsugar-assets.com/files/thumbor/XS4YnHClQ1RZMm7gMWAtPORSNA0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/04/30/868/n/1922283/1f2e59ed5ae773b06f2879.82877284_/i/Does-Iron-Man-Die-Avengers-Infinity-War.jpg" />
          </IonCol>
          <IonCol>
            <IonButton className="followbtn">
              Follow
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <h3>Tony</h3>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonList>
          {tweets.map((tweet, i) => (
                  <Tweet 
                      name={tweet.name}
                      turl={tweet.turl}
                      date={tweet.date}
                      uid={tweet.uid}
                      content={tweet.content}
                      type={tweet.type}
                      likes={tweet.likes}
                      comments={tweet.comments}
                      retweets={tweet.retweets}
                      />
          ))}
      </IonList>
    </div>
  );
};

export default ProfilePage;