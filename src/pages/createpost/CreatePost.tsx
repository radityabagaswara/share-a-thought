import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
// import { Keyboard } from "@capacitor/keyboard";

const CreatePost: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [maxText, setMaxText] = useState<number>(456);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon="" />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton color="primary" fill="outline">
              Curhat
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonTextarea
          value={text}
          placeholder="Share Your Thought"
          autocapitalize="on"
          autofocus={true}
          maxlength={maxText}
          autoGrow={true}
          onIonChange={(e) => setText(e.detail.value!)}
        ></IonTextarea>
      </IonContent>
      <IonFooter>
        <IonToolbar className="px-2">
          <IonButtons slot="start">
            <IonAvatar style={{ width: "40px", height: "40px" }}>
              <img src="https://via.placeholder.com/500" />
            </IonAvatar>
          </IonButtons>
          <IonButtons slot="end">
            {text?.length} / {maxText}
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default CreatePost;
