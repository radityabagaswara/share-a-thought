import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { personCircle, settingsOutline } from "ionicons/icons";

import Post from "../../components/post/Post";
import TabPage from "../../layouts/TabPage";
import "./homepage.css";

const Homepage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="icon-only" icon={personCircle} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton color="primary">
              <IonIcon
                slot="icon-only"
                ios={settingsOutline}
                md={settingsOutline}
              />
            </IonButton>
          </IonButtons>
          <IonTitle>Churatin</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div>
          <h1 className="font-bold">Selamat Malam Raditya!</h1>
          <h4 className="m-0">Bagaimana Kabarmu?</h4>
        </div>
        <Post />
        <Post />
        <Post />
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
