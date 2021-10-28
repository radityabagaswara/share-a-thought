import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
} from "@ionic/react";
import React from "react";
import style from "./Post.module.css";
const Post: React.FC = () => {
  return (
    <IonCard className={style.card}>
      <IonCardContent>
        <div className="">
          <div className={style.contentText}>
            <p>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </p>
          </div>
          <div className={style.avatar}>
            <IonAvatar className={style.avatarImage}>
              <img src="https://via.placeholder.com/500" />
            </IonAvatar>
            <p>John Doe</p>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Post;
