import React from "react";
import {
  addOutline,
  appsOutline,
  chatbubblesOutline,
  createOutline,
  ellipse,
  homeOutline,
  notificationsOutline,
  square,
  triangle,
} from "ionicons/icons";
import {
  IonApp,
  IonButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

const TabPage: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <IonTabs>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/homepage">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/categories">
              <IonIcon icon={appsOutline} />
              <IonLabel>Category</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/createpost">
              <IonButton fill="outline">
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/categories">
              <IonIcon icon={notificationsOutline} />
              <IonLabel>Notification</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab5" href="/categories">
              <IonIcon icon={chatbubblesOutline} />
              <IonLabel>Messages</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>{" "}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default TabPage;
