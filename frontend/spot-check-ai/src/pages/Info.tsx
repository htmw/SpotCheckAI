import { 
  IonApp, 
  IonButtons, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle, 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonItemDivider, 
  IonItemGroup, 
  IonLabel, 
  IonMenu, 
  IonMenuButton,  
  IonRow, 
  IonSplitPane, 
  IonTitle, 
  IonToolbar, 
} from '@ionic/react';
import './Info.css';
import { chatboxEllipses, documentText, help, home, informationCircle, personCircle } from 'ionicons/icons';

const Info: React.FC = () => {

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
                <IonTitle>Additional Information</IonTitle>
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
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="6">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Melanoma</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      Melanoma is a type of skin cancer that develops in the pigment-producing cells of the skin, known as melanocytes. It is the most dangerous form of skin cancer and can be life-threatening if not treated early. Melanoma is often caused by exposure to ultraviolet (UV) radiation from the sun or tanning beds, although other factors such as family history, fair skin, and a weakened immune system can also increase the risk of developing this disease.
                    </IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol size="12" sizeMd="6">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Benign Melanoma</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      Benign melanoma, also known as a nevus or mole, is a non-cancerous form of the disease that usually does not pose any health risks. These moles are typically small, round, and evenly colored, and may appear anywhere on the body. While benign melanomas are generally harmless, it is important to monitor them for changes in size, shape, or color, as well as the development of symptoms such as itching or bleeding. In some cases, benign melanomas may need to be removed for cosmetic or medical reasons.
                    </IonCardContent>
                  </IonCard>
                </IonCol>


                <IonCol size="12" sizeMd="6">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Cancerous Melanoma</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      Cancerous melanoma is a malignant form of the disease that can spread to other parts of the body, including the lymph nodes, lungs, liver, and brain. It is characterized by the abnormal growth and proliferation of melanocytes, which can result in the formation of dark, irregularly shaped moles or lesions on the skin. Symptoms of cancerous melanoma can include changes in the size, shape, or color of existing moles, the appearance of new moles, and the development of sores that do not heal.
                    </IonCardContent>
                  </IonCard>
                </IonCol>

              </IonRow>
            </IonGrid>
            </div>

          </IonContent>
        </div>
      </IonSplitPane>
      </IonContent>
    </IonApp>
  );
};

export default Info;