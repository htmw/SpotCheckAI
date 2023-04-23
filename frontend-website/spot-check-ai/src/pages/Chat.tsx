import { 
  IonApp, 
  IonButton, 
  IonButtons, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCol, 
  IonContent, 
  IonGrid, 
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
import './Chat.css';
import { chatboxEllipses, documentText, help, home, informationCircle, personCircle } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Chat: React.FC = () => {

  const [chatPrompt, setChatPrompt] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [questionResponseArray, setQuestionResponseArray]= useState([
    {
      "question": "Your history of questions inputted",
      "response": "Your history of responses recieved"
    }
  ]);

  const handleChatPrompt = (event:any) => {
    setChatPrompt(event.target.value);
  };

  function handleChatClick () {
    console.log("in handleChatClick");
    console.log(chatPrompt);
    
    axios.post('http://localhost:8000/chat/qa/', {
      question: chatPrompt,
    })
    .then(function (response) {
      //console.log(response)
      console.log(response.data)
      setChatResponse(response.data);
      //handleChatResponse();
    })
    .catch(function (error) {
      console.log(error)
      setChatResponse(error.message);
    })
  }

  //if statement: if chat response is not null or undefined
  //use effect: will call handleChatResponse() only if chatResponse changes (the second argument)
  useEffect(() => {
    if (chatResponse) {
      handleChatResponse();
    }
  }, [chatResponse]);

  function handleChatResponse () {
    console.log("in handleChatResponse()");
    console.log(chatResponse)
    setQuestionResponseArray([
      ...questionResponseArray,
      { question: chatPrompt, response: chatResponse },
    ]);  }

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
              <IonTitle>Chat Bot</IonTitle>
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
            <IonCardHeader>
              <IonCardTitle>
                ChatBot Powered by GPT
              </IonCardTitle>
              <IonCardSubtitle>
                Ask the chatbot any questions you have about SpotCheckAI
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>

          <>
            {
              questionResponseArray.map ((qa: {question:string, response:string}, index:number) => (

                <IonGrid>
                  <IonCol>
                  <IonCard key={index}>
                    <IonCardHeader>
                      <IonCardTitle>Question</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      {qa.question}
                    </IonCardContent>
                    <IonCardHeader>
                      <IonCardTitle>Response</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      {qa.response}
                    </IonCardContent>
                  </IonCard>
                  </IonCol>
                </IonGrid>
              ))
            }
          </>

          <IonCard>
            <IonCardContent>
              <IonInput placeholder="Enter your message here" onIonChange={handleChatPrompt} clearInput/>
              <IonButton onClick={handleChatClick}>Submit</IonButton>
            </IonCardContent>
          </IonCard>

        </IonContent>
      </div>
    </IonSplitPane>
    </IonContent>
  </IonApp>
  );
};

export default Chat;