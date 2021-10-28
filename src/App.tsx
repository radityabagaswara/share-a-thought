import { Redirect, Route } from "react-router-dom";
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
import {
  addOutline,
  appsOutline,
  chatbubblesOutline,
  homeOutline,
  notificationsOutline,
} from "ionicons/icons";
import Homepage from "./pages/homepage/Homepage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import "./app.css";
import CreatePost from "./pages/createpost/CreatePost";

const App: React.FC = () => (
  <IonApp>
    {/* Router */}
    <IonReactRouter>
      {/* No Tabs */}
      <Route exact path="/createpost">
        <CreatePost />
      </Route>

      {/* Tabs */}
      <Route
        path="/tabs"
        render={() => (
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tabs/homepage">
                <Homepage />
              </Route>
            </IonRouterOutlet>

            {/* Tabs */}
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
          </IonTabs>
        )}
      />
      <Route
        path="/"
        render={() => <Redirect to="/tabs/homepage" />}
        exact={true}
      />
      <Route
        path="/categories"
        render={() => <Redirect to="/tabs/homepage" />}
      />
    </IonReactRouter>
  </IonApp>
);

export default App;
