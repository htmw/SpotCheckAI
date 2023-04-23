import { 
  IonApp, 
  IonButtons, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
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
  IonToolbar, 
} from '@ionic/react';
import './About.css';
import { chatboxEllipses, documentText, help, home, informationCircle, personCircle } from 'ionicons/icons';

const About: React.FC = () => {

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
              <IonCardTitle>Feedback</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>We want to know what you think of our platform! Please leave your feedback in the Contact Us page!</IonCardContent>
          </IonCard>
        </IonMenu>
      
        <div className="ion-page" id="main">
          <IonContent>
            {
              //page header
            }
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>About Us</IonTitle>
              </IonToolbar>
            </IonHeader>

            {
              //video background
            }
            <div id="video-container">
              <video muted autoPlay loop id="video-background">
                <source src='../../assets/video/home-background.webm' type='video/webm'></source>
              </video>
            </div>

            <div>
              <IonCard>
                <div id='headshot-container'>
                  <img alt='developer-headshot' src='https://raw.githubusercontent.com/htmw/SpotCheckAI/main/documents/images/headshot.png'/>
                </div>
                <IonCardHeader>
                  <IonCardTitle>Meet the Developer</IonCardTitle>
                  <IonCardSubtitle>Rafferty Leung</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Rafferty Leung is a Master of Computer Science student at Pace University. He is interested in the intersection between computer science and life sciences. For more information about him please visit:
                  <p>
                    <a href='https://www.rafferty-leung.com/'>https://www.rafferty-leung.com/</a>
                  </p>
                  <p>
                    <a href='https://github.com/htmw/SpotCheckAI'>https://github.com/htmw/SpotCheckAI</a>
                  </p>
                </IonCardContent>
                </IonCard>
            </div>

          </IonContent>
        </div>
      </IonSplitPane>
      </IonContent>
    </IonApp>
  );
};

export default About;