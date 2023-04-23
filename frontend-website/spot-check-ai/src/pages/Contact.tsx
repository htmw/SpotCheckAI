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
  IonInput, 
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
import './Contact.css';
import { chatboxEllipses, documentText, help, home, informationCircle, personCircle } from 'ionicons/icons';

const Contact: React.FC = () => {

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
                <IonTitle>Contact Us</IonTitle>
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

            <IonCard>
              <IonCardContent>
                <div className="container">
                  <IonCardHeader>
                    <IonCardTitle>Contact Form</IonCardTitle>
                  </IonCardHeader>
                  <form target="_blank" action="https://formsubmit.co/raffertyleung98@gmail.com" method="POST">
                    <div className="form-group">
                      <div className="form-row">
                          <IonInput type="text" name="name" className="form-control" placeholder="Full Name" inputmode="text" clearInput required></IonInput>
                          <IonInput type="email" name="email" className="form-control" placeholder="Email Address" inputmode="email" clearInput required></IonInput>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea placeholder="Your Message" className="form-control" id="contact-text-area" name="message" rows={10} required></textarea>
                    </div>

                    <IonButton type="submit">Submit Form</IonButton>
                  </form>
                </div>
              </IonCardContent>
            </IonCard>

            

          </IonContent>
        </div>
      </IonSplitPane>
      </IonContent>
    </IonApp>
  );
};

export default Contact;