import { 
  IonApp, 
  IonButton, 
  IonButtons, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonItemDivider, 
  IonItemGroup, 
  IonLabel, 
  IonMenu, 
  IonMenuButton, 
  IonSplitPane, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import './Home.css';
import { chatboxEllipses, documentText, help, home, informationCircle, personCircle } from 'ionicons/icons';

const Home: React.FC = () => {

  //slows video down
  //querySelector: returns the first element within document that matches the specified selector

  return (
    <IonApp>
      <IonContent>
      <IonSplitPane when="xl" contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>

            <IonItemGroup>
              <IonItemDivider>
                <IonLabel>Home</IonLabel>
              </IonItemDivider>

              <IonItem href="#" lines='none'>
                <IonIcon slot='start' icon={home}></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>

            </IonItemGroup>

            <IonItemGroup>
              <IonItemDivider>
                <IonLabel>Information</IonLabel>
              </IonItemDivider>

              <IonItem href="/about" lines='none'>
                <IonIcon slot='start' icon={personCircle}></IonIcon>
                <IonLabel>About Us</IonLabel>
              </IonItem>
              <IonItem href="/info" lines='none'>
                <IonIcon slot='start' icon={informationCircle}></IonIcon>
                <IonLabel>Additional Information</IonLabel>
              </IonItem>
            </IonItemGroup>

            <IonItemGroup>
              <IonItemDivider>
                <IonLabel>Form</IonLabel>
              </IonItemDivider>

              <IonItem href="/form" lines='none'>
                <IonIcon slot='start' icon={documentText}></IonIcon>
                <IonLabel>Prediction Form</IonLabel>
              </IonItem>
              <IonItem href="/chat" lines='none'>
                <IonIcon slot='start' icon={chatboxEllipses}></IonIcon>
                <IonLabel>Chat Bot</IonLabel>
              </IonItem>
            </IonItemGroup>

            <IonItemGroup>
              <IonItemDivider>
                <IonLabel>Contact</IonLabel>
              </IonItemDivider>

              <IonItem href="/contact" lines='none'>
                <IonIcon slot='start' icon={help}></IonIcon>
                <IonLabel>Contact Us</IonLabel>
              </IonItem>

            </IonItemGroup>
          </IonContent>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Disclaimer</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>This is not a replacement for a doctor's visit. If you have emergent concerns, please consult your physician.</IonCardContent>
          </IonCard>
        </IonMenu>
      
        <div className="ion-page" id="main">
          <IonContent>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>SpotCheckAI</IonTitle>
              </IonToolbar>
            </IonHeader>
            <div id="video-container">
              <video muted autoPlay loop id="video-background">
                <source src='../../assets/video/home-background.webm' type='video/webm'></source>
              </video>
            </div>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Skin Cancer Detector Using AI</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              AI-powered skin cancer detection is a promising field that can help improve the accuracy and speed of identifying different types of skin lesions, including melanoma. By training machine learning algorithms on large datasets of skin images, researchers and healthcare professionals can develop tools to enable earlier intervention and successful treatment.
              </IonCardContent>
              <IonCardContent>
                <IonButton href='/form'>Check It Out</IonButton>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </div>
      </IonSplitPane>
      </IonContent>
    </IonApp>
  );
};

export default Home;
