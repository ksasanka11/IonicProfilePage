import React from 'react';
import './Tweet.css'
import { IonGrid, IonRow, IonCol, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { heart, gitCompare  } from 'ionicons/icons';
interface ContainerProps {
  name: string;
  turl: string;
  date: string;
  uid: string;
  content: string;
  type: string;
}

const Tweet: React.FC<ContainerProps> = ({ name, turl, date, uid, content, type }) => {
  return (
    <div className="container">
      <IonCard>
        
        <IonCardHeader>
          <IonGrid>
            <IonRow>
              <IonCol size="auto">
                  <IonIcon  md={type==="R"? gitCompare:heart} ios={type==="R"? gitCompare:heart}/>
              </IonCol>
              <IonCol>
                  <IonCardSubtitle>
                    {type==="R"? "Retweeted": "Liked"}
                  </IonCardSubtitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="auto">
                <div>
                  <IonThumbnail>
                      <img className="tweetprofilepic" src={turl} />
                  </IonThumbnail>
                </div>
              </IonCol>
              <IonCol>
                <div>
                  <IonCardTitle>{name}</IonCardTitle>
                  <IonCardSubtitle>{uid}</IonCardSubtitle>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardHeader>
        <IonCardContent>
          {content}
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Tweet;