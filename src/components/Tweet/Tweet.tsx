import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

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
      <IonCard>
        <IonThumbnail className="profilepic">
            <img src={turl} />
        </IonThumbnail>
        <IonCardHeader>
          <IonCardTitle>{name}</IonCardTitle>
          <IonCardSubtitle>{uid}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          {content}
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Tweet;