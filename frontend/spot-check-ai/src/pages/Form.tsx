import { IonApp, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonMenu, IonMenuButton, IonPage, IonRow, IonSplitPane, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import './Form.css';
import axios from 'axios';
import { useState } from 'react';
import { chatboxEllipses, documentText, help, home, informationCircle, personCircle } from 'ionicons/icons';


const Form: React.FC = () => {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [present, dismiss] = useIonLoading();

  const headers = {
    Authorization: 'Api-Key WtNpAcPm', //python manage.py runserver strips custom headers --> need to try this in prod.
  }
  
  //event object is used in event handlers to handle info about event that has occured
  const handleImageChange = (event:any) => {
    //extracts first file from arr and uses hook to set file state
    const file = event.target.files[0];
    setFile(file);
  };

  const handleFormSubmit = (event:any) => {

    //prevents browser default form submission behavior --> good for async functions
    //browser default behavior: normally reloads page
    event.preventDefault(); 

    const formData = new FormData(); //new form data instance
    formData.append('image', file!); //appends key:value pair to formData
  
    axios.post('http://127.0.0.1:7000/api/posts/', formData) //sends formData to backend
      .then((response) => {
        console.log(response.data); //displays result in console
        // Do something with the response
        setResult(response.data); //sets logged data from response to setResult state
      })
      .catch((error) => {
        console.log(error);
        setResult(error.message);
      });
  };

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

              <IonItem href="/aboutus" lines='none'>
                <IonIcon slot='start' icon={personCircle}></IonIcon>
                <IonLabel>About Us</IonLabel>
              </IonItem>
              <IonItem href="/aboutus" lines='none'>
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

              <IonItem href="/form" lines='none'>
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
                <IonTitle>Form</IonTitle>
              </IonToolbar>
            </IonHeader>
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
                      <IonCardTitle>Instructions</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>1. Click the upload button.</p>
                      <p>2. Select the photo of interest.</p>
                      <p>3. Click the submit button.</p>
                      <p>4. The page will send the data to the model and will output a result.</p>
                      <p>In Development: Uploading Directly From Camera</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol size="12" sizeMd="6">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Current Model Metrics</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Model ID: ImageClassifier02222023</p>
                      <p>Loss: 0.3981</p>
                      <p>Accuracy: 0.815625</p>
                      <p>Precision: 0.74556214</p>
                      <p>Recall: 0.8873239</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol size="12" sizeMd="6">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Submit Photo</IonCardTitle>
                      <IonCardContent>
                        <form id='predict-photo' onSubmit={handleFormSubmit}>
                          <p>Only Image Files are Accepted</p>
                          <p>png, jpeg, jpg, bmp</p>
                          <p>
                            <input type="file"
                              id="the-image"
                              accept="image/png, image/jpeg, image/jpg, image/bmp" 
                              onChange={handleImageChange} 
                              required
                            />
                          </p>
                          <IonButton type="submit">
                            Submit
                          </IonButton>
                        </form>
                      </IonCardContent>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>

                <IonCol size="12" sizeMd="6">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Result</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      {result}
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

export default Form;
