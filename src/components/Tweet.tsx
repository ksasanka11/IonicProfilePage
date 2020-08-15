import React from 'react';
import './ProfilePage.css';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent } from '@ionic/react';

interface ContainerProps {
  name: string;
  turl: string;
  date: string;
  uid: string;
  content: string;
}

const Tweet: React.FC<ContainerProps> = ({ name, turl, date, uid, content }) => {
  return (
    <div className="container">
        <IonItem>
            <IonThumbnail slot="start">
                <IonImg src={turl} />
            </IonThumbnail>
            <IonLabel>{content}</IonLabel>
        </IonItem>
    </div>
  );
};

export default Tweet;